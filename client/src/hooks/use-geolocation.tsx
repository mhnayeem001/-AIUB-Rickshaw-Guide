import { useState, useCallback } from 'react';
import type { GeolocationPosition } from '@/types';

interface UseGeolocationReturn {
  position: GeolocationPosition | null;
  error: string | null;
  loading: boolean;
  getCurrentPosition: () => Promise<GeolocationPosition>;
}

export function useGeolocation(): UseGeolocationReturn {
  const [position, setPosition] = useState<GeolocationPosition | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const getCurrentPosition = useCallback((): Promise<GeolocationPosition> => {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        const errorMsg = 'Geolocation is not supported by this browser';
        setError(errorMsg);
        reject(new Error(errorMsg));
        return;
      }

      setLoading(true);
      setError(null);

      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const newPosition = {
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
          };
          setPosition(newPosition);
          setLoading(false);
          resolve(newPosition);
        },
        (err) => {
          const errorMsg = `Location error: ${err.message}`;
          setError(errorMsg);
          setLoading(false);
          reject(new Error(errorMsg));
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 300000, // 5 minutes
        }
      );
    });
  }, []);

  return {
    position,
    error,
    loading,
    getCurrentPosition,
  };
}
