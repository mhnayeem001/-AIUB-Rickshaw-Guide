
import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WelcomeHeader } from '@/components/welcome-header';
import { RouteSelector } from '@/components/route-selector';
import { FareResult } from '@/components/fare-result';

import { AdvisorySection } from '@/components/advisory-section';

import { useTheme } from '@/hooks/use-theme';
import { useLanguage } from '@/hooks/use-language';
import { calculateFare, estimateDistance, locations } from '@/lib/fare-data';
import type { RouteResult } from '@/types';

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [fareResult, setFareResult] = useState<RouteResult | null>(null);

  // Calculate fare when locations change
  useEffect(() => {
    if (fromLocation && toLocation && fromLocation !== toLocation) {
      const fare = calculateFare(fromLocation, toLocation);
      const distance = estimateDistance(fare);
      
      setFareResult({
        fare,
        distance,
        route: `${fromLocation} → ${toLocation}`
      });
    } else {
      setFareResult(null);
    }
  }, [fromLocation, toLocation]);

  const handleSwapLocations = () => {
    const temp = fromLocation;
    setFromLocation(toLocation);
    setToLocation(temp);
  };

  const getLocationName = (locationId: string) => {
    if (locationId === 'current-location') {
      return t('Current Location', 'বর্তমান অবস্থান');
    }
    const location = locations.find(loc => loc.id === locationId);
    return location ? (language === 'en' ? location.nameEn : location.nameBn) : '';
  };

  // Conditional image source based on theme
 const rickshawImageSrc =
  theme === 'dark'
    ? 'https://raw.githubusercontent.com/mhnayeem001/Picture/main/ricksha%20red%203.png'
    : 'https://raw.githubusercontent.com/mhnayeem001/Picture/main/pedicab-rickshaw-icon-vector-45102478.avif';

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-200">
      {/* Navigation Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b dark:border-gray-700">
        <div className="max-w-md mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img
              src={rickshawImageSrc}
              alt="Rickshaw Icon"
              className="w-8 h-8 object-contain"
            />
            <h1 className="text-xl font-semibold" data-testid="app-title">
              {t('AIUB Rickshaw Guide', 'এআইইউবি রিকশা গাইড')}
            </h1>
          </div>
          <div className="flex items-center space-x-2">
            {/* Language Toggle */}
            <Button
              onClick={toggleLanguage}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              size="icon"
              variant="ghost"
              data-testid="button-toggle-language"
            >
              <span className="text-sm font-medium">
                {language === 'en' ? 'EN' : 'বাং'}
              </span>
            </Button>
            {/* Theme Toggle */}
            <Button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              size="icon"
              variant="ghost"
              data-testid="button-toggle-theme"
            >
              {theme === 'light' ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 py-6 space-y-6">
        <WelcomeHeader />
        
        <RouteSelector
          fromLocation={fromLocation}
          toLocation={toLocation}
          onFromLocationChange={setFromLocation}
          onToLocationChange={setToLocation}
          onSwapLocations={handleSwapLocations}
        />
        
        <FareResult
          result={fareResult}
          fromLocationName={getLocationName(fromLocation)}
          toLocationName={getLocationName(toLocation)}
        />
        
        
        {/* MapContainer component is not used in this version, so it's commented out */}
        {/* <MapContainer
          fromLocation={fromLocation}
          toLocation={toLocation}
          fareResult={fareResult}
        /> */}
        
        {/* Advisory Section */}  
        
        <AdvisorySection />
        
        
      </main>

     {/* Footer */}
{/* Footer */}
<footer className="max-w-md mx-auto px-4 py-6 text-center text-sm text-gray-500 dark:text-gray-400 border-t dark:border-gray-700 mt-8">
  <p data-testid="footer-credit">
    {t('Made for AIUB students with ❤️', 'এআইইউবি শিক্ষার্থীদের জন্য ❤️ দিয়ে তৈরি')}
  </p>
  <p className="mt-1 text-xs" data-testid="footer-copyright">
    {t('© 2024 AIUB Rickshaw Guide. All rights reserved.', '© ২০২৪ এআইইউবি রিকশা গাইড। সর্বস্বত্ব সংরক্ষিত।')}
  </p>
</footer>
    </div>
  );
}
