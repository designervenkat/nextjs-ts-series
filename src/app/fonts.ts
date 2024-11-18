import { Roboto, Aboreto } from 'next/font/google'
// import { Roboto, Aboreto } from 'next/font/local'

export const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
  variable: '--font-roboto',
})

export const aboreto = Aboreto({
  weight: '400',
  display: 'swap',
})
