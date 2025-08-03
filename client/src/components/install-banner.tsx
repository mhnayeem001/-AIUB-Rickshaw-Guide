import { useState, useEffect } from 'react';
import { Smartphone, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/use-language';

export function InstallBanner() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsVisible(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      setDeferredPrompt(null);
      setIsVisible(false);
    }
  };

  const handleDismiss = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="bg-gradient-to-r from-primary to-blue-600 text-white rounded-2xl p-4" data-testid="install-banner">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Smartphone className="text-2xl" />
          <div>
            <h4 className="font-semibold" data-testid="install-title">
              {t('Install App', 'অ্যাপ ইনস্টল করুন')}
            </h4>
            <p className="text-sm opacity-90" data-testid="install-description">
              {t('Add to home screen for quick access', 'দ্রুত অ্যাক্সেসের জন্য হোম স্ক্রিনে যুক্ত করুন')}
            </p>
          </div>
        </div>
        <div className="flex space-x-2">
          <Button
            onClick={handleInstall}
            className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            data-testid="button-install"
          >
            {t('Install', 'ইনস্টল')}
          </Button>
          <Button
            onClick={handleDismiss}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            size="icon"
            variant="ghost"
            data-testid="button-dismiss-install"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
