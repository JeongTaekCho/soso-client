declare namespace naver.maps {
  class Event {
    static addListener(target: any, eventName: string, listener: (event: any) => void): void
    static removeListener(listener: (event: any) => void): void
    static trigger(target: any, eventName: string, eventObject?: any): void
  }

  class Map {
    constructor(el: HTMLElement, options: MapOptions)
    setOptions(key: string, value: any): void
    setCenter({ lat: number, lng: number }): void
    getCenter(): LatLng
    setZoom(zoom: number): void
    getZoom(): number
    panTo({ lat: number, lng: number }): void
    addOverlayMapTypeId(mapTypeId: string): void
    removeOverlayMapTypeId(mapTypeId: string): void
    fitBounds(bounds: Bounds, padding?: number | Padding): void // 지도 경계를 맞추기
    addListener(eventName: string, listener: (event: any) => void): void // 지도 이벤트 추가
  }

  interface MapOptions {
    center: LatLng
    zoom: number
    mapTypeId?: string
    zoomControl?: boolean
    zoomControlOptions?: ZoomControlOptions
    scaleControl?: boolean
    mapTypeControl?: boolean
    mapDataControl?: boolean
    disableDoubleClickZoom?: boolean
    draggable?: boolean
    scrollWheel?: boolean
    keyboardShortcuts?: boolean // 키보드로 지도 조작 가능 여부
  }

  interface ZoomControlOptions {
    position: Position
  }

  class LatLng {
    constructor(lat: number, lng: number)
    lat(): number
    lng(): number
    toString(): string
    equals(latlng: LatLng): boolean // 좌표 비교
  }

  class Marker {
    constructor(options: MarkerOptions)
    setPosition(position: LatLng): void
    getPosition(): LatLng
    setMap(map: Map | null): void
    getMap(): Map | null
    setTitle(title: string): void
    getTitle(): string
    setIcon(icon: string | MarkerImage | MarkerIconOptions): void // 아이콘 설정 추가
    setAnimation(animation: Animation | null): void // 마커 애니메이션
  }

  interface MarkerOptions {
    position: LatLng
    map?: Map
    title?: string
    icon?: string | MarkerImage | MarkerIconOptions
    draggable?: boolean
    clickable?: boolean
    zIndex?: number
  }

  interface MarkerIconOptions {
    url: string
    size?: Size
    scaledSize?: Size // 스케일 조정된 아이콘 크기
    origin?: Point
    anchor?: Point
  }

  const Animation: {
    BOUNCE: string // 마커 바운스 애니메이션
    DROP: string // 마커 드롭 애니메이션
  }

  class InfoWindow {
    constructor(options: InfoWindowOptions)
    open(map: Map, anchor?: Marker | LatLng): void
    close(): void
    setContent(content: string | HTMLElement): void
    getContent(): string | HTMLElement
    setPosition(position: LatLng): void // 위치 설정 추가
    getPosition(): LatLng // 현재 위치 반환
  }

  interface InfoWindowOptions {
    content: string | HTMLElement
    maxWidth?: number
    position?: LatLng
    zIndex?: number
    borderColor?: string // 외곽선 색상
    borderWidth?: number // 외곽선 두께
  }

  class Geocoder {
    addressSearch(query: string, callback: (status: string, response: GeocoderResponse) => void): void // 주소 검색
    coord2Address(lat: number, lng: number, callback: (status: string, response: GeocoderResponse) => void): void // 좌표를 주소로 변환
  }

  interface GeocoderResponse {
    status: string
    result: {
      items: Array<{
        address: string
        roadAddress?: string
        point: LatLng
      }>
    }
  }

  class Bounds {
    constructor(sw: LatLng, ne: LatLng)
    getSouthWest(): LatLng
    getNorthEast(): LatLng
    contains(latlng: LatLng): boolean // 경계 내 좌표 포함 여부
    extend(latlng: LatLng): void // 경계 확장
  }

  class Padding {
    constructor(top: number, right: number, bottom: number, left: number)
  }

  interface OverlayView {
    setMap(map: Map | null): void
    getMap(): Map | null
    setZIndex(zIndex: number): void
  }

  const MapTypeId: {
    NORMAL: string
    SATELLITE: string
    HYBRID: string
    TERRAIN: string
  }

  type Position = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'

  type Animation = 'BOUNCE' | 'DROP'

  type Bounds = [LatLng, LatLng]

  class Point {
    constructor(x: number, y: number)
    x: number
    y: number
  }

  namespace TransCoord {
    /**
     * Converts WGS84 LatLng to TM128 Point
     * @param latlng - The WGS84 LatLng object
     */
    function fromLatLngToTM128(latlng: LatLng): Point

    /**
     * Converts TM128 Point to WGS84 LatLng
     * @param point - The TM128 Point object
     */
    function fromTM128ToLatLng(point: Point): LatLng
  }
}
