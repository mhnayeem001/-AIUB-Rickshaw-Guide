import { ThemeProvider as BaseThemeProvider } from '@/hooks/use-theme';
import { LanguageProvider } from '@/hooks/use-language';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <BaseThemeProvider>
      <LanguageProvider>
        {children}
      </LanguageProvider>
    </BaseThemeProvider>
  );
}
