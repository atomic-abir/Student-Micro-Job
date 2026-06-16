'use client'

import { LucideIcon } from 'lucide-react'

interface JobCardProps {
  title: string
  reward: string
  jobType: string
  icon: LucideIcon
  gradient?: string
  image?: string
}

export default function JobCard({
  title,
  reward,
  jobType,
  icon: Icon,
  gradient = 'from-neon-green/20 to-accent-yellow/20',
  image,
}: JobCardProps) {
  return (
    <div className="bg-dark-card border border-dark-border rounded-2xl overflow-hidden shadow-lg hover:shadow-neon-green/20 transition-all hover:border-neon-green/50 flex-shrink-0 w-72">
      {/* Image/Gradient */}
      <div
        className={`h-40 bg-gradient-to-br ${gradient} relative overflow-hidden`}
      >
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Icon size={60} className="text-neon-green/30" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-bold text-lg mb-3 text-white line-clamp-2">
          {title}
        </h3>

        <div className="space-y-3">
          {/* Reward */}
          <div className="flex items-center justify-between">
            <span className="text-gray-400 text-sm">Reward</span>
            <span className="text-xl font-bold text-neon-green">{reward}</span>
          </div>

          {/* Job Type */}
          <div className="bg-dark-bg rounded-lg px-3 py-2 inline-block">
            <span className="text-xs font-semibold text-gray-300">{jobType}</span>
          </div>

          {/* CTA Button */}
          <button className="w-full mt-4 bg-neon-green hover:bg-neon-green-dark text-dark-bg font-bold py-2 px-3 rounded-lg transition-colors text-sm">
            Start Now
          </button>
        </div>
      </div>
    </div>
  )
}
