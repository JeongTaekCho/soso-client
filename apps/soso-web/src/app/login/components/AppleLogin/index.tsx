'use client'

import AppleIcon from '@/shared/components/icons/AppleIcon'
import { useEffect, useState } from 'react'

declare global {
  interface Window {
    AppleID: {
      auth: {
        init: (config: AppleIDConfig) => void
        signIn: () => Promise<AppleIDSignInResponse>
      }
    }
  }
}

interface AppleIDConfig {
  clientId: string
  scope: string
  redirectURI: string
  state: string
  nonce?: string
  usePopup: boolean
}

interface AppleIDSignInResponse {
  authorization: {
    code: string
    id_token: string
    state: string
  }
  user?: {
    email: string
    name: {
      firstName: string
      lastName: string
    }
  }
}
export default function AppleLogin() {
  const [isAppleLoaded, setIsAppleLoaded] = useState(false)

  // Apple JS SDK 로드
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js'
    script.async = true
    script.onload = () => {
      setIsAppleLoaded(true)
    }
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  const loginWithApple = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (!isAppleLoaded || !window.AppleID) {
      console.error('Apple ID SDK not loaded')
      return
    }

    window.AppleID.auth.init({
      clientId: process.env.NEXT_PUBLIC_APPLE_CLIENT_ID!,
      scope: 'name email',
      redirectURI: `https://soso-client-soso-web.vercel.app/login/apple`,
      state: Math.random().toString(36).substring(2, 15),
      nonce: Math.random().toString(36).substring(2, 15),
      usePopup: true,
    })

    try {
      const res: AppleIDSignInResponse = await window.AppleID.auth.signIn()
      console.log('Apple Sign In Response:', res)

      await handleAppleSignInSuccess(res)
    } catch (error) {
      console.error('Apple Sign In Error:', error)
    }
  }

  const handleAppleSignInSuccess = async (response: AppleIDSignInResponse) => {
    console.log(response)
    try {
      const { code, id_token, state } = response.authorization
      const user = response.user

      // const backendResponse = await fetch('/api/auth/apple', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     code,
      //     id_token,
      //     state,
      //     user,
      //   }),
      // })

      // if (!backendResponse.ok) {
      //   throw new Error('Backend authentication failed')
      // }

      // const result = await backendResponse.json()
      // console.log('Backend response:', result)

      // 로그인 성공 처리 (토큰 저장, 리다이렉트 등)
      // localStorage.setItem('token', result.token);
      // router.push('/dashboard');
    } catch (error) {
      console.error('Error handling Apple sign in:', error)
    }
  }

  return (
    <button
      onClick={loginWithApple}
      className="relative flex h-56 w-full items-center justify-center gap-2 rounded-16 border border-black bg-black text-white font-body1_m"
    >
      <AppleIcon />
      Apple로 시작하기
    </button>
  )
}
