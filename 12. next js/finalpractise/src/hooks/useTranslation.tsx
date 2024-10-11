// src/hooks/useTranslation.ts
import { useTranslation } from 'next-i18next';

export const useI18n = () => {
  const { t } = useTranslation('common');
  return { t };
};
