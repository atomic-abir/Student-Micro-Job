import type { Metadata } from 'next'
import './globals.css'
import Sidebar from '@/components/Sidebar'
import TopNavbar from '@/components/TopNavbar'

export const metadata: Metadata = {
  title: 'Student Micro Job',
  description: 'Earn money by completing micro jobs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-dark-bg text-white">
        <div className="flex h-screen overflow-hidden">
          {/* Sidebar */}
          <Sidebar />

          {/* Main content */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Top Navbar */}
            <TopNavbar />

            {/* Page content */}
            <main className="flex-1 overflow-auto bg-dark-bg">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}
