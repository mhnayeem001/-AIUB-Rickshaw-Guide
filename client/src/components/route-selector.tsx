import { useState } from 'react';
import { ArrowUpDown, MapPin, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLanguage } from '@/hooks/use-language';
import { useGeolocation } from '@/hooks/use-geolocation';
import { locations } from '@/lib/fare-data';
import { useToast } from '@/hooks/use-toast';

interface RouteSelectorProps {
  fromLocation: string;
  toLocation: string;
  onFromLocationChange: (value: string) => void;
  onToLocationChange: (value: string) => void;
  onSwapLocations: () => void;
}

export function RouteSelector({
  fromLocation,
  toLocation,
  onFromLocationChange,
  onToLocationChange,
  onSwapLocations,
}: RouteSelectorProps) {
  const { t, language } = useLanguage();
  const { getCurrentPosition, loading: geoLoading } = useGeolocation();
  const { toast } = useToast();

  const handleUseCurrentLocation = async () => {
    try {
      await getCurrentPosition();
      onFromLocationChange('current-location');
      onToLocationChange('aiub');
      toast({
        title: t('Location detected!', 'অবস্থান সনাক্ত করা হয়েছে!'),
        description: t('Using current location as starting point.', 'বর্তমান অবস্থানকে শুরুর বিন্দু হিসেবে ব্যবহার করা হচ্ছে।'),
      });
    } catch (error) {
      toast({
        title: t('Location Error', 'অবস্থান ত্রুটি'),
        description: t('Unable to get your location. Please select manually.', 'আপনার অবস্থান পেতে অক্ষম। অনুগ্রহ করে ম্যানুয়ালি নির্বাচন করুন।'),
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 space-y-4">
      <h3 className="text-lg font-semibold mb-4" data-testid="route-selector-title">
        {t('Where are you going from and to?', 'আপনি কোথা থেকে কোথায় যাচ্ছেন?')}
      </h3>
      
      {/* From Input */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" data-testid="from-label">
          {t('From', 'থেকে')}
        </label>
        <div className="relative">
          <Select value={fromLocation} onValueChange={onFromLocationChange}>
            <SelectTrigger className="w-full p-3 pr-10 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all" data-testid="select-from-location">
              <SelectValue placeholder={t('Select starting point', 'শুরুর বিন্দু নির্বাচন করুন')} />
            </SelectTrigger>
            <SelectContent>
              {locations.map((location) => (
                <SelectItem key={location.id} value={location.id}>
                  {language === 'en' ? location.nameEn : location.nameBn}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <MapPin className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        </div>
      </div>

      {/* Swap Button */}
      <div className="flex justify-center">
        <Button
          onClick={onSwapLocations}
          className="p-3 rounded-full bg-primary text-white hover:bg-blue-700 transition-colors shadow-lg"
          size="icon"
          data-testid="button-swap-locations"
        >
          <ArrowUpDown className="h-4 w-4" />
        </Button>
      </div>

      {/* To Input */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" data-testid="to-label">
          {t('To', 'পর্যন্ত')}
        </label>
        <div className="relative">
          <Select value={toLocation} onValueChange={onToLocationChange}>
            <SelectTrigger className="w-full p-3 pr-10 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all" data-testid="select-to-location">
              <SelectValue placeholder={t('Select destination', 'গন্তব্য নির্বাচন করুন')} />
            </SelectTrigger>
            <SelectContent>
              {locations.map((location) => (
                <SelectItem key={location.id} value={location.id}>
                  {language === 'en' ? location.nameEn : location.nameBn}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <MapPin className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        </div>
      </div>

      {/* Use My Location Button */}
      <Button
        onClick={handleUseCurrentLocation}
        disabled={geoLoading}
        className="w-full p-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-medium transition-colors flex items-center justify-center space-x-2"
        data-testid="button-use-location"
      >
        <Navigation className="h-4 w-4" />
        <span>
          {geoLoading 
            ? t('Getting location...', 'অবস্থান পাওয়া হচ্ছে...')
            : t('Use My Current Location', 'আমার বর্তমান অবস্থান ব্যবহার করুন')
          }
        </span>
      </Button>
    </div>
  );
}
