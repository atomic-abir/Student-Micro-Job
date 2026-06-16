'use client'

import { HelpCircle, Bell, RefreshCw } from 'lucide-react'
import Image from 'next/image'

export default function TopNavbar() {
  return (
    <div className="bg-dark-card border-b border-dark-border px-6 py-4">
      <div className="flex items-center justify-end gap-4">
        {/* ALPHA Badge */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-3 py-1 rounded-full text-xs font-bold hidden sm:inline-block">
          ALPHA
        </div>

        {/* Help Button */}
        <button className="p-2 hover:bg-dark-border rounded-lg transition-colors">
          <HelpCircle size={20} className="text-gray-400" />
        </button>

        {/* Wallet Pill */}
        <div className="bg-neon-green/10 border border-neon-green/30 px-4 py-2 rounded-full flex items-center gap-2">
          <span className="text-xs font-semibold text-neon-green">$0.00</span>
        </div>

        {/* Notification Bell */}
        <button className="p-2 hover:bg-dark-border rounded-lg transition-colors relative">
          <Bell size={20} className="text-gray-400" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-neon-green rounded-full"></span>
        </button>

        {/* Refresh Button */}
        <button className="p-2 hover:bg-dark-border rounded-lg transition-colors">
          <RefreshCw size={20} className="text-gray-400" />
        </button>

        {/* User Avatar */}
        <div className="flex items-center gap-3 ml-2">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold">Abir Mahmud</p>
            <p className="text-xs text-gray-500">Student</p>
          </div>
          <div className="w-10 h-10 bg-gradient-to-br from-neon-green to-accent-yellow rounded-full overflow-hidden flex items-center justify-center">
            <Image
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Abir"
              alt="User avatar"
              width={40}
              height={40}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
