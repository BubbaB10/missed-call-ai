import './globals.css'

export const metadata = {
  title: 'Missed Call AI — Never Lose Another Customer',
  description: 'We text your missed calls back in 60 seconds. They book. You get paid. $400/mo for HVAC, plumbing, roofing, and electrical businesses.',
  keywords: 'missed call AI, SMS follow up, HVAC leads, plumber leads, contractor automation',
  openGraph: {
    title: 'Missed Call AI — Never Lose Another Customer',
    description: 'We text your missed calls back in 60 seconds. They book. You get paid.',
    type: 'website',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
