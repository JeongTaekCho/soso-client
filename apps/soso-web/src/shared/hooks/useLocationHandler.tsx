import { useDialog } from '@/shared/context/DialogContext'
import { useLocationStore } from '@/shared/store/useLocationStore'
import { useEffect } from 'react'
import { useIsNativeApp } from './useIsNativeApp'

const useLocationHandler = () => {
  const { isInitialLocationSet, setIsInitialLocationSet, setLocation, resetLocation } = useLocationStore()
  const { openDialog } = useDialog()
  const isNativeApp = useIsNativeApp()

  useEffect(() => {
    if (!isInitialLocationSet && isNativeApp === false) {
      requestLocation()
      setIsInitialLocationSet(true)
    }
  }, [isInitialLocationSet, isNativeApp])

  const requestLocation = async () => {
    if (!navigator.geolocation) {
      console.warn('Geolocation이 지원되지 않는 브라우저입니다.')
      resetLocation()
      return
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords
        setLocation(latitude, longitude)
      },
      (error) => {
        openDialog({
          type: 'alert',
          title: '위치 권한 거부',
          message: (
            <span>
              위치 권한이 거부되었습니다.
              <br /> 기본 위치를 사용합니다.
            </span>
          ),
        })
        resetLocation() // 기본 위치 설정
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    )
  }

  return null
}

export default useLocationHandler
