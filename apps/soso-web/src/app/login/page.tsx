'use client'

import GoogleIcon from '@/shared/components/icons/GoogleIcon'
import Flex from '@/shared/components/layout/Flex'
import { useIsNativeApp } from '@/shared/hooks/useIsNativeApp'
import { useAuthStore } from '@/shared/store/useAuthStore'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function LoginPage() {
  const isNativeApp = useIsNativeApp()
  const [redirectUri, setRedirectUri] = useState('')

  const router = useRouter()
  const { isHydrated, token } = useAuthStore()

  const handleGuestLogin = () => {
    router.push('/')
  }

  useEffect(() => {
    setRedirectUri(`${window.location.origin}/login/callback`)
  }, [])

  const googleLogin = () => {
    if (!redirectUri) return

    if (isNativeApp) {
      window.ReactNativeWebView?.postMessage(JSON.stringify({ type: 'GOOGLE_LOGIN_REQUEST' }))
      return
    }

    const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID
    const scope = encodeURIComponent('openid profile email')

    const authUrl = `https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${scope}`
    window.location.href = authUrl
  }

  useEffect(() => {
    if (!isHydrated || !token) return
    if (token) {
      router.push('/')
    }
  }, [token, isHydrated])

  useEffect(() => {
    if (!isNativeApp) {
      return
    }

    const onGoogleLoginSuccess = (e: Event) => {
      const { code } = (e as CustomEvent<{ code: string }>).detail
      if (code) {
        router.push(`${redirectUri}?code=${code}`)
      }
    }

    window.addEventListener('google-login-success', onGoogleLoginSuccess)

    return () => {
      window.removeEventListener('google-login-success', onGoogleLoginSuccess)
    }
  }, [isNativeApp])

  return (
    <Flex justify="center" align="center" className="h-screenVh w-full">
      <Image
        width={205}
        height={120}
        style={{ width: '68%', height: 'auto' }}
        src="/images/logo.svg"
        alt="소소 로고"
        className="mb-[200px]"
      />
      <Flex
        direction="col"
        gap={12}
        justify="center"
        className="fixed bottom-100 left-1/2 w-full -translate-x-1/2 px-16"
      >
        <button
          onClick={googleLogin}
          className="relative flex h-56 w-full items-center justify-center rounded-16 bg-[#F3EDE8] font-body1_m"
        >
          <div className="absolute left-14 top-1/2 -translate-y-1/2">
            <GoogleIcon />
          </div>
          Google로 시작하기
        </button>
        <button
          onClick={handleGuestLogin}
          className="relative flex h-56 w-full items-center justify-center rounded-16 bg-[#F3EDE8] font-body1_m"
        >
          로그인 없이 시작하기
        </button>
      </Flex>
    </Flex>
  )
}
