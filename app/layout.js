import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Expense Tracker | Save your money',
  description: 'Expense Tracker is a simple app to track your expenses and save your money.',
  icons: {
    icon: '/logo.svg'
  }
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
