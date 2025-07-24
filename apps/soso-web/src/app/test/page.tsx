'use client'

import { useState, useEffect } from 'react'
import './styles.css'

interface Shop {
  name: string
  location: string
  image: string
}

export default function TestPage() {
  const [shops, setShops] = useState<Shop[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    const fetchShops = async () => {
      try {
        setLoading(true)
        const response = await fetch('https://api.sosohan.shop/v1/api/shop/temp')

        if (!response.ok) {
          throw new Error('데이터를 불러오는데 실패했습니다')
        }

        const data = await response.json()
        setShops(data.result)
      } catch (error) {
        console.error('데이터를 불러오는 중 오류가 발생했습니다:', error)
        setError('데이터를 불러오는 중 오류가 발생했습니다.')
      } finally {
        setLoading(false)
      }
    }

    fetchShops()
  }, [])

  if (loading) {
    return (
      <div className="container">
        <h1>소품샵 목록</h1>
        <div className="loading">로딩 중...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container">
        <h1>소품샵 목록</h1>
        <p className="error">{error}</p>
      </div>
    )
  }

  return (
    <div className="container fixed left-0 top-0 h-full w-full overflow-y-auto bg-white">
      <h1>소품샵 목록</h1>
      <div className="shop-grid">
        {shops?.map((shop, index) => (
          <div key={index} className="shop-card">
            <img src={shop.image} alt={shop.name} className="shop-image" />
            <div className="shop-info">
              <h2 className="shop-name">{shop.name}</h2>
              <p className="shop-location">{shop.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
