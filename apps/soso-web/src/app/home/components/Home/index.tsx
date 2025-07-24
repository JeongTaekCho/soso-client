'use client'

import { useGetShopQuery } from '@/shared/hooks/useGetShopQuery'
import { useEffect, useState } from 'react'
import { useLocationStore } from '@/shared/store/useLocationStore'
import SelectCategoryModal, { DEFAULT_CATEGORY_ID_LIST } from './components/SelectCategoryModal'
import { getIsSameArray } from '@/shared/utils/getIsSame'
import MapView from './components/MapView'
import ListView from './components/ListView'
import { useIsNativeApp } from '@/shared/hooks/useIsNativeApp'
import useLocationHandler from '@/shared/hooks/useLocationHandler'

export default function HomePage() {
  useLocationHandler(true)
  const isNativeApp = useIsNativeApp()
  const { lat, lng, setLocation } = useLocationStore()
  const [categoryIdList, setCategoryIdList] = useState<number[]>(DEFAULT_CATEGORY_ID_LIST)
  const [isWishListView, setIsWishListView] = useState<boolean>(false)
  const [isOpenCategoryModal, setIsOpenCategoryModal] = useState<boolean>(false)
  const [isMapViewMode, setIsMapViewMode] = useState<boolean>(true)
  const { data: shopData } = useGetShopQuery(lat, lng, undefined, isWishListView, categoryIdList)
  const totalShopCount = shopData?.length ?? 0
  const isCategoryView = categoryIdList.length > 0 && !getIsSameArray(categoryIdList, DEFAULT_CATEGORY_ID_LIST)

  const toggleMapViewMode = () => {
    setIsMapViewMode((prev) => !prev)
  }

  const handleClickWishList = () => {
    setIsWishListView((prev) => !prev)
  }

  // useEffect(() => {
  //   if (prevShopId) {
  //     setSelectedShopId(prevShopId);
  //   }
  // }, [prevShopId]);

  useEffect(() => {
    if (!isNativeApp) {
      return
    }

    const handler = (e: Event) => {
      const { lat, lng } = (e as CustomEvent<{ lat: number; lng: number }>).detail
      setLocation(lat, lng)
    }

    window.addEventListener('init-native-location', handler)

    return () => {
      window.removeEventListener('init-native-location', handler)
    }
  }, [isNativeApp])

  return (
    <div className="relative">
      {isMapViewMode ? (
        <MapView
          isNativeApp={isNativeApp}
          shopData={shopData ?? []}
          totalShopCount={totalShopCount}
          toggleMapViewMode={toggleMapViewMode}
          isWishListView={isWishListView}
          isCategoryView={isCategoryView}
          handleClickWishList={handleClickWishList}
          openCategoryModal={() => setIsOpenCategoryModal(true)}
        />
      ) : (
        <ListView
          shopData={shopData ?? []}
          toggleMapViewMode={toggleMapViewMode}
          isWishListView={isWishListView}
          isCategoryView={isCategoryView}
          handleClickWishList={handleClickWishList}
          openCategoryModal={() => setIsOpenCategoryModal(true)}
        />
      )}

      <SelectCategoryModal
        isOpen={isOpenCategoryModal}
        onClose={() => {
          setIsOpenCategoryModal(false)
        }}
        categoryIdList={categoryIdList}
        onSubmit={setCategoryIdList}
      />
    </div>
  )
}
