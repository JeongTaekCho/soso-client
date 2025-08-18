import PlaceCard from '@/shared/components/card/PlaceCard'
import Flex from '@/shared/components/layout/Flex'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import GpsButton from '../GpsButton'
import ListViewButton from '../ListViewButton'
import { ShopType } from '@/shared/types/shopType'
import { getCurrentLocation } from '@/shared/utils/getCurrentLocation'
import useMapStore from '@/shared/store/useMapStore'
import { useEffect, useRef, useState } from 'react'
import { CURRENT_LOCATION_MARKER_ID } from '@/shared/constant/location'
import { useDialog } from '@/shared/context/DialogContext'
import { Swiper as SwiperRef } from 'swiper/types'
import { useLocationStore } from '@/shared/store/useLocationStore'
import ResearchButton from '../ResearchButton'
import dynamic from 'next/dynamic'
import WishViewButton from '../WishViewButton'
import CategoryButton from '../CategoryButton'
import { useSearchStore } from '@/shared/store/useSearchStore'
import SearchIcon from '@/shared/components/icons/SearchIcon'

interface MapViewProps {
  isNativeApp: boolean | undefined
  shopData: ShopType[]
  totalShopCount: number
  isWishListView: boolean
  isCategoryView: boolean
  toggleMapViewMode: () => void
  handleClickWishList: () => void
  openCategoryModal: () => void
}

const NaverMap = dynamic(() => import('@/shared/components/layout/NaverMap'), { ssr: false })

export default function MapView({
  isNativeApp,
  shopData,
  totalShopCount,
  isWishListView,
  isCategoryView,
  toggleMapViewMode,
  handleClickWishList,
  openCategoryModal,
}: MapViewProps) {
  const { map, addMarker, setCenter, clearMarkers } = useMapStore()
  const { lat, lng, setPrevLocation, setLocation } = useLocationStore()
  const { setSearchValue } = useSearchStore()

  const [isMove, setIsMove] = useState(false)
  const [selectedShopId, setSelectedShopId] = useState<number | null>(null)
  const [isRender, setIsRender] = useState(false)
  const { openDialog } = useDialog()
  const swiperRef = useRef<SwiperRef>(null)

  const handleClickResearch = () => {
    const location = map?.getCenter()

    setPrevLocation(null, null, null)

    setLocation(Number(location?.lat()), Number(location?.lng()))
    setIsMove(false)
  }

  const goToSlide = (shopId: number) => {
    const slideIndex = shopData?.findIndex((shop) => shop.id === shopId)
    if (slideIndex !== undefined && slideIndex !== -1 && swiperRef.current) {
      // swiperRef.current.slideTo(slideIndex, 300);
      swiperRef.current.slideToLoop
        ? swiperRef.current.slideToLoop(slideIndex, 300)
        : swiperRef.current.slideTo(slideIndex, 300)
    }
  }

  useEffect(() => {
    clearMarkers()
    const currentAddMarker = async () => {
      const currentLocation = await getCurrentLocation()

      if (currentLocation === 'denied') return
      addMarker({
        id: CURRENT_LOCATION_MARKER_ID,
        position: { lat: currentLocation.lat, lng: currentLocation.lng },
        icon: {
          content: `<div style="width:24px; height:24px" class="animate-glow"><img width='24' height='24' src="/images/marker/current_marker.svg" alt="지도 마커" ></img></div>`,
        },
        zIndex: 20,
      })
    }

    currentAddMarker()

    if (!shopData || shopData.length === 0 || !map) {
      return
    }

    shopData.forEach((shop) => {
      addMarker({
        id: shop.id,
        position: { lat: shop.lat, lng: shop.lng },
        icon: {
          content:
            selectedShopId === shop.id
              ? `<div style="width:48px; height:48px"><img width='48' height='48' src="/images/marker/map_active_marker.svg" alt="지도 마커" ></img></div>`
              : `<div style="width:32px; height:32px"><img width='32' height='32' src="/images/marker/map_marker.svg" alt="지도 마커" ></img></div>`,
        },
        zIndex: selectedShopId === shop.id ? 10 : 1,
      })
    })
  }, [shopData, map, addMarker, selectedShopId])

  useEffect(() => {
    if (!shopData || (shopData && !shopData.length)) return

    setSelectedShopId(shopData[0].id)
  }, [shopData])

  const handleSlideChange = (swiper: SwiperRef) => {
    const activeIndex = swiper.realIndex
    const selectedShop = shopData?.[activeIndex]
    if (selectedShop) {
      setSelectedShopId(selectedShop.id)
      setCenter(selectedShop.lat, selectedShop.lng)
    }
  }

  const handleClickGps = async () => {
    if (isNativeApp === undefined) {
      return
    }
    if (isNativeApp) {
      window.ReactNativeWebView?.postMessage(JSON.stringify({ type: 'REQUEST_LOCATION' }))
    }

    const currentLocation = await getCurrentLocation()

    if (currentLocation === 'denied') {
      openDialog({
        type: 'alert',
        title: '위치 권한 에러',
        message: (
          <span>
            위치 권한이 비활성화 되어있습니다.
            <br />
            위치 권한을 허용해주세요.
          </span>
        ),
      })
      return
    }

    setCenter(currentLocation.lat, currentLocation.lng)
    setIsMove(true)
  }

  useEffect(() => {
    if (shopData?.length) {
      setCenter(shopData?.[0].lat, shopData?.[0].lng)
    } else {
      setCenter(lat, lng)
    }
  }, [shopData, lat, lng])

  useEffect(() => {
    if (!map) return

    const handleDrag = () => {
      const center = map.getCenter()
      setCenter(center.lat(), center.lng())
      setIsMove(true)
    }

    naver.maps.Event.addListener(map, 'dragend', handleDrag)
  }, [map])

  useEffect(() => {
    if (!shopData || !map || isRender) return

    const setupMapCenter = async () => {
      if (shopData.length) {
        setCenter(shopData[0].lat, shopData[0].lng)
      } else {
        setCenter(lat, lng)
      }
    }

    setupMapCenter()
    setIsRender(true)
  }, [shopData, map])

  useEffect(() => {
    if (!isNativeApp) {
      return
    }

    const handler = (e: Event) => {
      const { lat, lng } = (e as CustomEvent<{ lat: number; lng: number }>).detail
      setCenter(lat, lng)
      setIsMove(true)
    }

    window.addEventListener('native-location', handler)

    return () => {
      window.removeEventListener('native-location', handler)
    }
  }, [isNativeApp])

  return (
    <div>
      <div className="fixed top-0 z-sticky flex w-full max-w-screen flex-col p-16">
        <Link href="/search" onClick={() => setSearchValue('')}>
          <div className="relative h-46 w-full">
            <div className="absolute left-10 top-[52%] -translate-y-1/2">
              <SearchIcon fill="#9EA4AA" />
            </div>
            <div className="flex h-full w-full items-center rounded-12 bg-white pl-46 text-gray-400 shadow-search-bar font-body1_m focus:outline-main">
              찾고있는 소품샵이 있나요?
            </div>
          </div>
        </Link>

        <div className="z-important my-8 flex items-center gap-8">
          <WishViewButton isActive={isWishListView} onClick={handleClickWishList} className="shadow-button" />
          <CategoryButton isActive={isCategoryView} onClick={openCategoryModal} className="shadow-button" />
        </div>
        {isMove && <ResearchButton onClick={handleClickResearch} />}
      </div>

      <NaverMap
        markerEvent={(_marker, data) => {
          goToSlide(data.id)
        }}
      />
      <div className="fixed bottom-76 left-1/2 flex w-full -translate-x-1/2 flex-col items-end gap-20 layout-center">
        <div className="flex flex-col gap-12 px-16">
          <ListViewButton totalShopCount={totalShopCount} onClick={toggleMapViewMode} />
          <GpsButton onClick={handleClickGps} />
        </div>
        <div className="w-full">
          {shopData && shopData?.length > 0 ? (
            <Swiper
              slidesPerView={1.2}
              spaceBetween={10}
              loop={shopData?.length > 3}
              centeredSlides={true}
              onSlideChange={handleSlideChange}
              onSwiper={(swiper) => {
                swiperRef.current = swiper
              }}
            >
              {shopData?.map((shop) => (
                <SwiperSlide key={shop.id}>
                  <PlaceCard width="100%" type="map" data={shop} />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="px-24">
              <Flex
                direction="col"
                gap={8}
                align="center"
                className="w-full rounded-16 bg-white px-18 py-12 shadow-place-card"
              >
                <p className="text-gray-500 font-body1_m">찾고 계신 장소가 없으신가요?</p>
                <Link
                  href="/report"
                  className="flex w-full items-center justify-center rounded-8 bg-orange-light py-9 text-main font-body2_m"
                >
                  소품샵 등록하기
                </Link>
              </Flex>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
