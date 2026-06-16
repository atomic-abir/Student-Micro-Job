'use client'

import { LucideIcon } from 'lucide-react'

interface StatCardProps {
  title: string
  value: string | number
  icon: LucideIcon
  color?: 'green' | 'yellow' | 'blue'
}

export default function StatCard({
  title,
  value,
  icon: Icon,
  color = 'green',
}: StatCardProps) {
  const colorClasses = {
    green: 'bg-neon-green/10 text-neon-green border-neon-green/20',
    yellow: 'bg-accent-yellow/10 text-accent-yellow border-accent-yellow/20',
    blue: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  }

  return (
    <div className="bg-dark-card border border-dark-border rounded-2xl p-6 shadow-lg hover:shadow-xl hover:shadow-neon-green/10 transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <p className="text-gray-400 text-sm font-medium">{title}</p>
        <div className={`p-3 rounded-lg border ${colorClasses[color]}`}>
          <Icon size={20} />
        </div>
      </div>
      <h3 className="text-3xl font-bold">{value}</h3>
    </div>
  )
}
