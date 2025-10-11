// amplitude.ts
'use client'

import * as amplitude from '@amplitude/analytics-browser'

async function initAmplitude() {
  await amplitude.init(process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY!, undefined, {
    autocapture: true,
  }).promise
}

if (typeof window !== 'undefined') {
  initAmplitude()
}

export const Amplitude = () => null

export default amplitude
