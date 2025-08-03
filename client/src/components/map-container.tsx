import { useEffect, useRef, useState } from 'react';
import { Map } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';
import { loadGoogleMapsAPI, createMap, calculateRoute } from '@/lib/google-maps';
import type { GeolocationPosition } from '@/types';

interface MapContainerProps {
  isVisible: boolean;
  origin?: GeolocationPosition;
  destination?: GeolocationPosition;
}

export function MapContainer({ isVisible, origin, destination }: MapContainerProps) {
  const { t } = useLanguage();
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [mapError, setMapError] = useState<string | null>(null);

  useEffect(() => {
    if (!isVisible || !mapRef.current) return;

    const initializeMap = async () => {
      try {
        await loadGoogleMapsAPI();
        
        // Default center (AIUB approximate location)
        const center = origin || { lat: 23.8759, lng: 90.3795 };
        const newMap = createMap(mapRef.current!, center);
        setMap(newMap);
        setMapError(null);
      } catch (error) {
        console.error('Failed to load map:', error);
        setMapError('Failed to load map');
      }
    };

    initializeMap();
  }, [isVisible, origin]);

  useEffect(() => {
    if (!map || !origin || !destination) return;

    const calculateAndDisplayRoute = async () => {
      try {
        await calculateRoute(map, origin, destination);
      } catch (error) {
        console.error('Failed to calculate route:', error);
      }
    };

    calculateAndDisplayRoute();
  }, [map, origin, destination]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden" data-testid="map-container">
      <div className="p-4 border-b dark:border-gray-700">
        <h3 className="font-semibold flex items-center space-x-2">
          <Map className="text-primary" />
          <span data-testid="map-title">
            {t('Route Map', 'রুট ম্যাপ')}
          </span>
        </h3>
      </div>
      <div className="h-64">
        {mapError ? (
          <div className="h-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
            <div className="text-center text-gray-500 dark:text-gray-400">
              <Map className="mx-auto text-4xl mb-2" />
              <p data-testid="map-error">
                {t('Failed to load map', 'মানচিত্র লোড করতে ব্যর্থ')}
              </p>
            </div>
          </div>
        ) : (
          <div 
            ref={mapRef} 
            className="w-full h-full"
            data-testid="map-display"
          />
        )}
      </div>
    </div>
  );
}
