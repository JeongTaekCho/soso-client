declare namespace naver.maps {
  class Map {
    constructor(el: HTMLElement, options: MapOptions);
    setOptions(key: string, value: any): void;
  }

  interface MapOptions {
    center: LatLng;
    zoom: number;
    mapTypeId?: string;
  }

  class LatLng {
    constructor(lat: number, lng: number);
  }

  class Polygon {
    constructor(options: PolygonOptions);
  }

  interface PolygonOptions {
    map: Map;
    paths: LatLng[];
    strokeColor?: string;
    strokeOpacity?: number;
    strokeWeight?: number;
    fillColor?: string;
    fillOpacity?: number;
  }

  class CadastralLayer {
    constructor(options: { map: Map });
    setMap(map: Map): void;
  }

  const MapTypeId: {
    NORMAL: string;
    SATELLITE: string;
    HYBRID: string;
    TERRAIN: string;
  };

  class Polyline {
    constructor(options: PolylineOptions);
    setMap(map: Map | null): void; // 지도에 폴리라인 추가 또는 제거
    getPath(): LatLng[]; // 폴리라인 경로 반환
    setPath(path: LatLng[]): void; // 폴리라인 경로 설정
  }

  interface PolylineOptions {
    map: Map; // 폴리라인을 추가할 지도 객체
    path: LatLng[]; // 폴리라인 경로
    strokeColor?: string; // 폴리라인 색상
    strokeOpacity?: number; // 폴리라인 투명도
    strokeWeight?: number; // 폴리라인 두께
    clickable?: boolean; // 폴리라인 클릭 가능 여부
    zIndex?: number; // 폴리라인의 z-index
  }
}
