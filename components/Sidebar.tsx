'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Menu,
  X,
  Home,
  Search,
  Trophy,
  Briefcase,
  FileText,
  TrendingUp,
  DollarSign,
  CreditCard,
  Headphones,
  HelpCircle,
} from 'lucide-react'

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const menuItems = [
    {
      section: 'GENERAL',
      items: [
        { name: 'Home', icon: Home, href: '/' },
        { name: 'Find Jobs', icon: Search, href: '/find-jobs' },
        { name: 'Leaderboard', icon: Trophy, href: '/leaderboard' },
      ],
    },
    {
      section: 'ACTIVITY',
      items: [
        { name: 'Available Jobs', icon: Briefcase, href: '/available-jobs' },
        { name: 'My Submissions', icon: FileText, href: '/my-submissions' },
        { name: 'My Campaigns', icon: TrendingUp, href: '/my-campaigns' },
        { name: 'Earnings', icon: DollarSign, href: '/earnings' },
        { name: 'Withdraw', icon: CreditCard, href: '/withdraw' },
      ],
    },
    {
      section: 'SUPPORT',
      items: [
        { name: 'Live Support', icon: Headphones, href: '/support' },
        { name: 'Help Center', icon: HelpCircle, href: '/help' },
      ],
    },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden bg-dark-card p-2 rounded-lg border border-dark-border"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed lg:relative w-64 h-screen bg-dark-sidebar border-r border-dark-border z-40 transform lg:transform-none transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-dark-border">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-8 h-8 bg-neon-green rounded-full flex items-center justify-center">
              <span className="text-dark-bg font-bold text-sm">S</span>
            </div>
            <h1 className="font-poppins font-bold text-lg">
              <span className="text-neon-green">Student</span>
              <br />
              <span className="text-sm text-gray-400">Micro Job</span>
            </h1>
          </div>
        </div>

        {/* Menu items */}
        <nav className="flex-1 overflow-y-auto p-4">
          {menuItems.map((section, idx) => (
            <div key={idx} className="mb-8">
              <h2 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 px-3">
                {section.section}
              </h2>
              <div className="space-y-2">
                {section.items.map((item) => {
                  const Icon = item.icon
                  const active = isActive(item.href)
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
                        active
                          ? 'bg-dark-card text-neon-green shadow-lg shadow-neon-green/20'
                          : 'text-gray-400 hover:text-white hover:bg-dark-card/50'
                      }`}
                    >
                      <Icon size={20} />
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  )
                })}
              </div>
            </div>
          ))}
        </nav>
      </div>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
