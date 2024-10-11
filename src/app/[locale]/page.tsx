// import Image from "next/image";
// import Header from '@/components/Header';
import AboutMe from '@/components/AboutMe';
import Hero from '@/components/Hero';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('HomePage');
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* <Header /> */}
      <Hero />
      <AboutMe />
      <h1>{t('title')}</h1>
    </div>
  );
}
