import { Info } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';

export function AdvisorySection() {
  const { t } = useLanguage();

  const safetyTips = [
    {
      en: 'Always negotiate fare before starting the journey',
      bn: 'যাত্রা শুরুর আগে সর্বদা ভাড়া দর কষাকষি করুন'
    },
    {
      en: 'Keep emergency contacts handy',
      bn: 'জরুরি যোগাযোগের নম্বর হাতের কাছে রাখুন'
    },
    {
      en: 'Share your location with friends/family',
      bn: 'বন্ধু/পরিবারের সাথে অবস্থান শেয়ার করুন'
    },
    {
      en: 'Prefer well-lit routes during night travel',
      bn: 'রাতের যাত্রায় আলোকিত পথ পছন্দ করুন'
    }
  ];

  return (
    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-2xl p-4" data-testid="advisory-section">
      <div className="flex items-start space-x-3">
        <Info className="text-blue-500 mt-1" />
        <div className="space-y-2">
          <h4 className="font-semibold text-blue-900 dark:text-blue-200" data-testid="advisory-title">
            {t('Safety & Fare Tips', 'নিরাপত্তা ও ভাড়ার টিপস')}
          </h4>
          <ul className="text-sm text-blue-800 dark:text-blue-300 space-y-1" data-testid="advisory-tips">
            {safetyTips.map((tip, index) => (
              <li key={index} data-testid={`tip-${index}`}>
                • {t(tip.en, tip.bn)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
