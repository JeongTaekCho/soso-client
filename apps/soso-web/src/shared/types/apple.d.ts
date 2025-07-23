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
