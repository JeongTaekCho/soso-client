'use client';

import useMapStore from '@/shared/store/useMapStore';
import Script from 'next/script';
import { useEffect, useRef } from 'react';

interface NaverMapProps {
  width?: string;
  height?: string;
  markerEvent?: (marker: naver.maps.Marker, data: any) => void; // 마커 이벤트 콜백 추가
}

// 사용자 정의 타입 확장
interface CustomMap extends naver.maps.Map {
  customMarkers?: naver.maps.Marker[];
}

export default function NaverMap({ width, height, markerEvent }: NaverMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const { setMap, center, minZoom, zoom, map, markers } = useMapStore();

  // 초기화 함수 (한 번만 실행)
  const initMap = () => {
    if (!window.naver || !mapRef.current) return;

    const newMap = new naver.maps.Map(mapRef.current, {
      center: new naver.maps.LatLng(center.lat, center.lng),
      zoom: zoom,
    }) as CustomMap;

    newMap.setOptions('minZoom', minZoom);

    newMap.customMarkers = [];
    setMap(newMap);
  };

  // 마커 업데이트
  const updateMarkers = () => {
    if (!map) return;

    const customMap = map as CustomMap;

    // 기존 마커 제거
    customMap.customMarkers?.forEach((marker) => marker.setMap(null));
    customMap.customMarkers = [];

    // 새로운 마커 추가
    const newMarkers = markers.map((markerData) => {
      const newMarker = new naver.maps.Marker({
        position: new naver.maps.LatLng(markerData.position.lat, markerData.position.lng),
        map: map,
        icon: {
          content: `<div style="width:32px; height:32px"><img width='32' height='32' src="/images/marker/map_marker.png" alt="지도 마커" ></img></div>`,
        },
      });

      naver.maps.Event.addListener(newMarker, 'click', () => {
        map.panTo(newMarker.getPosition()); // 지도 중심 이동
        if (markerEvent) {
          markerEvent(newMarker, markerData);
        }
      });

      return newMarker;
    });

    customMap.customMarkers = newMarkers;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (window.naver && mapRef.current) {
        initMap();
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (map) {
      updateMarkers();
    }
  }, [map, markers]);

  useEffect(() => {
    if (!map) return;

    map.panTo(new naver.maps.LatLng(center.lat, center.lng)); // 지도 중심 이동
  }, [map, center]);

  useEffect(() => {
    if (!map) return;

    map.setZoom(zoom);
  }, [zoom]);

  const mapStyle = {
    width: width || '100%',
    height: height || 'calc(100vh - 60px)',
  };

  return (
    <>
      {/* 네이버 지도 스크립트 */}
      <Script
        strategy="lazyOnload"
        type="text/javascript"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}&submodules=geocoder`}
        onLoad={initMap}
      />
      <div ref={mapRef} id="map" style={mapStyle} />
    </>
  );
}
