'use client';

import Loading from '@/shared/components/loading/Loading';
import useLocationHandler from '@/shared/hooks/useLocationHandler';
import useMapStore from '@/shared/store/useMapStore';
import Script from 'next/script';
import { useEffect, useRef, useState } from 'react';

interface NaverMapProps {
  width?: string;
  height?: string;
  markerEvent?: (marker: naver.maps.Marker, data: any) => void;
  isCurrent?: boolean;
}

// 사용자 정의 타입 확장
interface CustomMap extends naver.maps.Map {
  customMarkers?: naver.maps.Marker[];
}

export default function NaverMap({ width, height, markerEvent, isCurrent }: NaverMapProps) {
  if (isCurrent) {
    useLocationHandler();
  }

  const mapRef = useRef<HTMLDivElement>(null);
  const { setMap, center, minZoom, zoom, map, markers } = useMapStore();

  const [loading, setLoading] = useState(true);

  const initMap = () => {
    if (!window.naver || !mapRef.current) return;

    const newMap = new naver.maps.Map(mapRef.current, {
      center: new naver.maps.LatLng(center.lat, center.lng),
      zoom: zoom,
    }) as CustomMap;

    newMap.setOptions('minZoom', minZoom);
    newMap.customMarkers = [];
    setMap(newMap);

    setLoading(false);
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
        icon: markerData.icon || {
          content: `<div style="width:48px; height:48px"><img width='48' height='48' src="/images/marker/map_active_marker.svg" alt="지도 마커" ></img></div>`,
        },
        zIndex: markerData.zIndex || 1,
      });

      naver.maps.Event.addListener(newMarker, 'click', () => {
        map.panTo(newMarker.getPosition());
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
      />

      {loading && <Loading />}

      <div ref={mapRef} id="map" style={mapStyle} />
    </>
  );
}
