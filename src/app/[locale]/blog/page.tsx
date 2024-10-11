import { useTranslations } from 'next-intl';

function Blog() {
  const t = useTranslations('Blog');
  return <h1>{t('hello')}</h1>;
}

export default Blog;
