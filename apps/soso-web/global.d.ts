declare namespace naver.maps {
  class Map {
    constructor(el: HTMLElement, options: MapOptions);
    setOptions(key: string, value: any): void;
    setCenter(center: LatLng): void;
    getCenter(): LatLng;
    setZoom(zoom: number): void;
    getZoom(): number;
    panTo(latlng: LatLng): void;
    addOverlayMapTypeId(mapTypeId: string): void;
    removeOverlayMapTypeId(mapTypeId: string): void;
  }

  interface MapOptions {
    center: LatLng;
    zoom: number;
    mapTypeId?: string;
    zoomControl?: boolean;
    zoomControlOptions?: ZoomControlOptions;
    scaleControl?: boolean;
    mapTypeControl?: boolean;
    mapDataControl?: boolean;
    disableDoubleClickZoom?: boolean;
    draggable?: boolean;
    scrollWheel?: boolean;
  }

  interface ZoomControlOptions {
    position: Position;
  }

  class LatLng {
    constructor(lat: number, lng: number);
    lat(): number;
    lng(): number;
    toString(): string;
  }

  class Marker {
    constructor(options: MarkerOptions);
    setPosition(position: LatLng): void;
    getPosition(): LatLng;
    setMap(map: Map | null): void; // 마커를 지도에 추가하거나 제거
    getMap(): Map | null;
    setTitle(title: string): void;
    getTitle(): string;
  }

  interface MarkerOptions {
    position: LatLng;
    map?: Map; // 마커를 추가할 지도 객체
    title?: string; // 마커 제목
    icon?: string | MarkerImage; // 마커 아이콘
    draggable?: boolean; // 마커 드래그 가능 여부
    clickable?: boolean; // 마커 클릭 가능 여부
    zIndex?: number; // 마커의 z-index
  }

  class MarkerImage {
    constructor(url: string, size: Size, options?: MarkerImageOptions);
  }

  interface MarkerImageOptions {
    origin?: Point; // 아이콘의 기준점
    anchor?: Point; // 기준점에서의 앵커 위치
  }

  class Size {
    constructor(width: number, height: number);
  }

  class Point {
    constructor(x: number, y: number);
  }

  class Polygon {
    constructor(options: PolygonOptions);
    setMap(map: Map | null): void;
    getPath(): LatLng[];
    setPath(paths: LatLng[]): void;
  }

  interface PolygonOptions {
    map: Map;
    paths: LatLng[] | LatLng[][]; // 다중 경로를 허용
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

  class Circle {
    constructor(options: CircleOptions);
    setMap(map: Map | null): void;
    getCenter(): LatLng;
    setCenter(center: LatLng): void;
    getRadius(): number;
    setRadius(radius: number): void;
  }

  interface CircleOptions {
    map: Map; // 추가할 지도 객체
    center: LatLng; // 원의 중심 좌표
    radius: number; // 반지름 (미터 단위)
    strokeColor?: string; // 원의 외곽선 색상
    strokeOpacity?: number; // 외곽선 투명도
    strokeWeight?: number; // 외곽선 두께
    fillColor?: string; // 원 내부 색상
    fillOpacity?: number; // 내부 투명도
  }

  class InfoWindow {
    constructor(options: InfoWindowOptions);
    open(map: Map, anchor?: Marker): void;
    close(): void;
    setContent(content: string | HTMLElement): void;
    getContent(): string | HTMLElement;
  }

  interface InfoWindowOptions {
    content: string | HTMLElement; // 표시할 내용
    maxWidth?: number; // 최대 너비
    position?: LatLng; // 위치
    zIndex?: number; // z-index
  }

  const MapTypeId: {
    NORMAL: string;
    SATELLITE: string;
    HYBRID: string;
    TERRAIN: string;
  };

  type Position = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

  type Bounds = [LatLng, LatLng]; // 지도 경계
}
