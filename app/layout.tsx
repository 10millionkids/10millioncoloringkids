import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Fredoka, Nunito } from 'next/font/google'
import './globals.css'

const fredoka = Fredoka({ subsets: ['latin'], variable: '--font-fredoka', weight: ['500', '600', '700'] })
const nunito = Nunito({ subsets: ['latin'], variable: '--font-nunito' })

export const metadata: Metadata = {
  metadataBase: new URL('https://10millionkidscoloringpages.shop'),
  title: '10 Million Coloring Educational Pages for Kids – Just ₹149',
  description:
    'Get 10 Million+ printable coloring & educational pages for kids — alphabets, numbers, Hindi, animals, tracing, cut & glue and more. Instant PDF download for just ₹149.',
  keywords: [
    'kids coloring pages',
    'educational worksheets',
    'preschool worksheets',
    'printable coloring pages',
    'kids learning bundle',
  ],
  openGraph: {
    title: '10 Million Coloring Educational Pages – Just ₹149',
    description: 'Printable coloring & learning pages for kids. Instant download.',
    url: 'https://10millionkidscoloringpages.shop',
    siteName: '10 Million Kids Coloring Pages',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#fbf7ef',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${fredoka.variable} ${nunito.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
