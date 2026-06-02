import './globals.css'

export const metadata = {
  title: 'Missed Call AI — Stop Losing Jobs to Voicemail',
  description: 'Missed Call AI texts your customers back in 60 seconds — books the job, answers questions, keeps the lead warm. Built for HVAC, plumbing, roofing, and electrical businesses. $400/mo.',
  keywords: 'missed call AI, SMS follow up, HVAC leads, plumber leads, contractor automation, roofing leads, electrician leads',
  openGraph: {
    title: 'Missed Call AI — Stop Losing Jobs to Voicemail',
    description: 'Texts back in 60 seconds. Books the job. Keeps the lead warm. While you\'re on another call.',
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
