import { useEffect, useState } from 'react'

export const useIsNativeApp = (): undefined | boolean => {
  const [isNative, setIsNative] = useState<boolean>(true)

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }
    setIsNative((window as any).isNativeApp === true)
  }, [])

  return isNative
}
