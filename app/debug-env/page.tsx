"use client"

import { useEffect } from 'react'

export default function DebugEnv() {
  useEffect(() => {
    console.log('=== Environment Variables Debug ===')
    console.log('NODE_ENV:', process.env.NODE_ENV)
    console.log('NEXT_PUBLIC_FORCE_LOCAL_SIGNALING:', process.env.NEXT_PUBLIC_FORCE_LOCAL_SIGNALING)
    console.log('NEXT_PUBLIC_CF_WORKER_URL:', process.env.NEXT_PUBLIC_CF_WORKER_URL)
    console.log('===================================')
  }, [])

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Environment Variables Debug</h1>
      <div className="space-y-2">
        <p><strong>NODE_ENV:</strong> {process.env.NODE_ENV}</p>
        <p><strong>NEXT_PUBLIC_FORCE_LOCAL_SIGNALING:</strong> {process.env.NEXT_PUBLIC_FORCE_LOCAL_SIGNALING}</p>
        <p><strong>NEXT_PUBLIC_CF_WORKER_URL:</strong> {process.env.NEXT_PUBLIC_CF_WORKER_URL}</p>
      </div>
      <p className="mt-4 text-sm text-gray-600">Check the browser console for more details.</p>
    </div>
  )
}
