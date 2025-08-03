export interface Location {
  id: string;
  name: string;
  nameEn: string;
  nameBn: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface FareData {
  [key: string]: number;
}

export interface RouteResult {
  fare: number;
  distance: number;
  duration?: number;
  route?: string;
}

export interface GeolocationPosition {
  lat: number;
  lng: number;
}

export type Theme = 'light' | 'dark';
export type Language = 'en' | 'bn';
