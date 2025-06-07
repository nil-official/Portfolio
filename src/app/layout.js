import { Poppins } from 'next/font/google'
import { Analytics } from "@vercel/analytics/next"
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

export const metadata = {
  title: 'Niladri Chakraborty | Full Stack Engineer',
  description: 'Professional portfolio for a full stack web developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.className} bg-gray-900 text-gray-100`}>
        <Analytics />
        {children}
      </body>
    </html>
  )
}