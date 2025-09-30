import { useEffect, useState } from 'react'

export const useIsNativeApp = (): undefined | boolean => {
  const [isNative, setIsNative] = useState<boolean>(true)

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }
    const isWebView = typeof (window as any).ReactNativeWebView !== 'undefined'

    setIsNative(isWebView)
  }, [])

  return isNative
}
