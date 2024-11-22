import Link from 'next/link'
import Switcher from './Switcher'
import { useTranslations } from 'next-intl'

function Header() {
  const translate = useTranslations('Navigation')
  return (
    <nav className="flex items-center justify-between">
      <Link href="/">{translate('home')}</Link>
      <Link href="/">{translate('about')}</Link>

      <Switcher />
    </nav>
  )
}

export default Header
