import { useLanguage } from '@/hooks/use-language';

export function WelcomeHeader() {
  const { t } = useLanguage();

  return (
    <div className="text-center space-y-2">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white" data-testid="welcome-title">
        {t('Welcome, AIUB Student!', 'স্বাগতম, এআইইউবি শিক্ষার্থী!')}
      </h2>
      <p className="text-gray-600 dark:text-gray-300" data-testid="welcome-description">
        {t(
          'Get fair rickshaw fare estimates for your daily commute',
          'আপনার দৈনিক যাতায়াতের জন্য ন্যায্য রিকশা ভাড়ার অনুমান পান'
        )}
      </p>
    </div>
  );
}
