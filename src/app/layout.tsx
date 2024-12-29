import Header from '@/components/common/header/Header'
import '@/styles/globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'RadioStation',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`dark antialiased`}>
        <div className={`wrapper`}>
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
