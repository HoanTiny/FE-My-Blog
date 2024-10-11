export type Locale = (typeof locales)[number];

export const locales = ['en', 'vi'] as const;
export const defaultLocale: Locale = 'vi';

// Thêm các functions này
export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
