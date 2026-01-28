import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'James Edington | Sales Director & Applied AI Innovator',
  description: 'Building the future of Remote Sales Management. Explore my Applied AI portfolio and connect with me.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2MDXTMJQWH"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2MDXTMJQWH');
          `}
        </Script>

        {/* Contentsquare (Hotjar) */}
        <Script
          src="https://t.contentsquare.net/uxa/ffcc813c72d62.js"
          strategy="afterInteractive"
        />

        {/* Leadfeeder/Dealfront */}
        <Script id="leadfeeder" strategy="afterInteractive">
          {`
            (function(ss,ex){ 
              window.ldfdr=window.ldfdr||function(){(ldfdr._q=ldfdr._q||[]).push([].slice.call(arguments));}; 
              (function(d,s){ 
                fs=d.getElementsByTagName(s)[0]; 
                function ce(src){ 
                  var cs=d.createElement(s); 
                  cs.src=src; 
                  cs.async=1; 
                  fs.parentNode.insertBefore(cs,fs); 
                }; 
                ce('https://sc.lfeeder.com/lftracker_v1_'+ss+(ex?'_'+ex:'')+'.js'); 
              })(document,'script'); 
            })('p1e024Bo22QaGB6d');
          `}
        </Script>
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
