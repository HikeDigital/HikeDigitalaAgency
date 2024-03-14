import { cn } from '@/lib/utils'
import './globals.css'
import type { Metadata } from 'next'
import { Inter,Syne,Kanit,Suwannaphum } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})
 
const syne = Syne({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-syne',
})

const suwannaphum = Suwannaphum({
  weight:["100", "300", "400", "700", "900",],
  style:["normal"],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-suwannaphum',
})


const kanit = Kanit({
  weight:["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style:["normal",'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-kanit',
})



export const metadata: Metadata = {
  title: 'Hike',
  description: 'Digital Agency',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='light'>
      <body className={cn('min-h-screen font-sans antialiased grainy font-',inter.className,syne.variable,kanit.variable,suwannaphum.variable)}>
        {children}
      </body>
    </html>
  )
}
