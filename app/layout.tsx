import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'Brain Birds - Test your memory. Flip, match, win.',
  description: 'A simple memory game to challenge your brain—flip cards, find pairs, and beat your best score.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Fonts */}
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>

        {/* Farcaster Mini App Metadata */}
        <meta
          name="fc:miniapp"
          content='{
            "version": "1",
            "imageUrl": "https://birdbrains-five.vercel.app/og-image.png",
            "button": {
              "title": "Test your memory",
              "action": {
                "type": "launch_miniapp",
                "name": "Brain Birds",
                "url": "https://birdbrains-five.vercel.app/",
                "splashImageUrl": "https://birdbrains-five.vercel.app/icon.png",
                "splashBackgroundColor": "#000000"
              }
            }
          }'
        />
        <meta
          name="fc:frame"
          content='{
            "version": "1",
            "imageUrl": "https://birdbrains-five.vercel.app/og-image.png",
            "button": {
              "title": "Test your memory",
              "action": {
                "type": "launch_frame",
                "name": "Brain Birds",
                "url": "https://birdbrains-five.vercel.app/",
                "splashImageUrl": "https://birdbrains-five.vercel.app/icon.png",
                "splashBackgroundColor": "#000000"
              }
            }
          }'
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
