import { useTranslations } from 'next-intl'

export default function HomePage() {
  const translate = useTranslations('HomePage')
  return (
    <div>
      <h1>{translate('title')}</h1>
      <p>{translate('about')}</p>
    </div>
  )
}
