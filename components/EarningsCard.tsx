'use client'

import { TrendingUp } from 'lucide-react'

export default function EarningsCard() {
  return (
    <div className="bg-gradient-to-br from-neon-green/5 to-accent-yellow/5 border border-neon-green/20 rounded-2xl p-8 shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Total Earnings</h2>
        <div className="bg-neon-green/20 p-3 rounded-lg">
          <TrendingUp size={24} className="text-neon-green" />
        </div>
      </div>

      {/* Main Amount */}
      <div className="mb-8">
        <p className="text-gray-400 text-sm mb-2">Current Balance</p>
        <h3 className="text-5xl font-bold text-neon-green">$0.00</h3>
      </div>

      {/* Pending Earnings */}
      <div className="bg-dark-card/50 rounded-lg p-4 mb-6">
        <div className="flex justify-between items-center">
          <span className="text-gray-400 text-sm">Pending Earnings</span>
          <span className="text-lg font-bold text-accent-yellow">$0.00</span>
        </div>
      </div>

      {/* CTA Button */}
      <button className="w-full bg-neon-green hover:bg-neon-green-dark text-dark-bg font-bold py-3 px-4 rounded-lg transition-colors">
        Browse Jobs
      </button>
    </div>
  )
}
