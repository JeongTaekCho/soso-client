'use client';

import useMapStore from '@/shared/store/useMapStore';
import Script from 'next/script';
import { useEffect, useRef } from 'react';

interface NaverMapProps {
  width?: string;
  height?: string;
}

export default function NaverMap({ width, height }: NaverMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const { setMap } = useMapStore();

  const initMap = () => {
    if (!window.naver || !mapRef.current) return;

    const map = new naver.maps.Map(mapRef.current, {
      center: new naver.maps.LatLng(37.5665, 126.978),
      zoom: 12,
    });

    setMap(map);

    new naver.maps.Marker({
      position: new naver.maps.LatLng(37.5665, 126.978),
      map: map,
    });
  };
  useEffect(() => {
    if (window.naver) {
      initMap();
    }
  }, [setMap]);

  return (
    <>
      {/* 네이버 지도 스크립트 */}
      <Script
        strategy="lazyOnload"
        type="text/javascript"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}&submodules=geocoder`}
        onReady={initMap}
      />
      <div ref={mapRef} id="map" style={{ width: width || '100%', height: height || 'calc(100vh - 60px)' }} />
    </>
  );
}
