import type { GeolocationPosition } from '@/types';

declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}

let isLoaded = false;
let loadPromise: Promise<void> | null = null;

export function loadGoogleMapsAPI(): Promise<void> {
  if (isLoaded) return Promise.resolve();
  if (loadPromise) return loadPromise;

  loadPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${
      import.meta.env.VITE_GOOGLE_MAPS_API_KEY || 'YOUR_API_KEY'
    }&libraries=geometry,places`;
    script.async = true;
    script.defer = true;
    
    script.onload = () => {
      isLoaded = true;
      resolve();
    };
    
    script.onerror = () => {
      reject(new Error('Failed to load Google Maps API'));
    };
    
    document.head.appendChild(script);
  });

  return loadPromise;
}

export function createMap(container: HTMLElement, center: GeolocationPosition): google.maps.Map {
  return new window.google.maps.Map(container, {
    zoom: 13,
    center: { lat: center.lat, lng: center.lng },
    mapTypeId: window.google.maps.MapTypeId.ROADMAP,
    disableDefaultUI: false,
    zoomControl: true,
    streetViewControl: false,
    fullscreenControl: false,
  });
}

export function calculateRoute(
  map: google.maps.Map,
  origin: GeolocationPosition,
  destination: GeolocationPosition
): Promise<{ distance: number; duration: number }> {
  return new Promise((resolve, reject) => {
    const directionsService = new window.google.maps.DirectionsService();
    const directionsRenderer = new window.google.maps.DirectionsRenderer({
      suppressMarkers: false,
      draggable: false,
    });
    
    directionsRenderer.setMap(map);
    
    directionsService.route({
      origin: { lat: origin.lat, lng: origin.lng },
      destination: { lat: destination.lat, lng: destination.lng },
      travelMode: window.google.maps.TravelMode.DRIVING,
    }, (result: any, status: any) => {
      if (status === 'OK') {
        directionsRenderer.setDirections(result);
        const route = result.routes[0];
        const leg = route.legs[0];
        
        resolve({
          distance: Math.round(leg.distance.value / 1000 * 10) / 10, // km
          duration: Math.round(leg.duration.value / 60) // minutes
        });
      } else {
        reject(new Error('Failed to calculate route'));
      }
    });
  });
}

export function reverseGeocode(position: GeolocationPosition): Promise<string> {
  return new Promise((resolve, reject) => {
    const geocoder = new window.google.maps.Geocoder();
    
    geocoder.geocode({
      location: { lat: position.lat, lng: position.lng }
    }, (results: any[], status: any) => {
      if (status === 'OK' && results[0]) {
        resolve(results[0].formatted_address);
      } else {
        reject(new Error('Failed to get address'));
      }
    });
  });
}
