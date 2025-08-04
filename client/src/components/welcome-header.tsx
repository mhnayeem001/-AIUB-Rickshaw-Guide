import { useLanguage } from '@/hooks/use-language';

export function WelcomeHeader() {
  const { t } = useLanguage();

  return (
    <div className="text-center space-y-2">
      <h2
        className="text-2xl font-bold text-gray-900 dark:text-white"
        data-testid="welcome-title"
      >
        {t('Hello AIUBians!', 'হ্যালো এআইইউবিয়ানস!')}
      </h2>
      <p
        className="text-gray-600 dark:text-gray-300"
        data-testid="welcome-description"
      >
        {t(
          'Make your daily commute easier by knowing the fair rickshaw fare.',
          'ন্যায্য রিকশা ভাড়ার জানার মাধ্যমে আপনার দৈনিক যাতায়াত সহজ করুন।'
        )}
      </p>
    </div>
  );
}