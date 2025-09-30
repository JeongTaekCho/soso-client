'use client'

import { useAppleLoginMutation } from '@/app/login/components/AppleLogin/hooks/useAppleLoginMutation'
import AppleIcon from '@/shared/components/icons/AppleIcon'
import { useIsNativeApp } from '@/shared/hooks/useIsNativeApp'
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
  const { mutate: appleLoginMutate } = useAppleLoginMutation()
  const isNativeApp = useIsNativeApp()

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

    if (isNativeApp) {
      window.ReactNativeWebView?.postMessage(JSON.stringify({ type: 'APPLE_LOGIN_REQUEST' }))
      return
    }

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
      await handleAppleSignInSuccess(res.authorization.id_token)
    } catch (error) {
      console.error('Apple Sign In Error:', error)
    }
  }

  const handleAppleSignInSuccess = async (idToken: string) => {
    try {
      appleLoginMutate(idToken)
    } catch (error) {
      console.error('Error handling Apple sign in:', error)
    }
  }

  useEffect(() => {
    if (!isNativeApp) return

    const handler = (event: MessageEvent) => {
      try {
        const data = JSON.parse(event.data)
        if (data.type === 'APPLE_LOGIN_SUCCESS') {
          const { idToken } = data.payload
          if (idToken) {
            handleAppleSignInSuccess(idToken)
          } else {
            console.error('Error handling Apple sign in: id token is empty')
          }
        }
      } catch (err) {
        console.error('APPLE_LOGIN_SUCCESS 처리 중 에러:', err)
      }
    }

    window.addEventListener('message', handler)

    return () => {
      window.removeEventListener('message', handler)
    }
  }, [isNativeApp])

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
