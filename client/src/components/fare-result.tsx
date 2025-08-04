import { Route } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';
import type { RouteResult } from '@/types';

interface FareResultProps {
  result: RouteResult | null;
  fromLocationName: string;
  toLocationName: string;
}

export function FareResult({ result, fromLocationName, toLocationName }: FareResultProps) {
  const { t } = useLanguage();

  if (!result) {
    return null;
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6" data-testid="fare-result">
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-2">
          <Route className="text-primary text-xl" />
          <h3 className="text-lg font-semibold" data-testid="fare-result-title">
            {t('Fare Amount:', 'ভাড়ার পরিমাণ:')}
          </h3>
        </div>
        
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4">
          <div className="text-3xl font-bold text-primary" data-testid="text-estimated-fare">
            ৳ {result.fare}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-300 mt-1" data-testid="text-estimated-distance">
            {t('Approximate distance: ', 'আনুমানিক দূরত্ব: ')}
            {result.distance} km
          </div>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-300">
          <span data-testid="text-route-description">
            {t('Route: ', 'রুট: ')}
            {fromLocationName} → {toLocationName}
          </span>
          <span className="text-xs bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded-full">
            {t('Est.', 'আনুমানিক')}
          </span>
        </div>
      </div>
    </div>
  );
}