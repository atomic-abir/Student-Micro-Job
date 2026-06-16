'use client'

import { ArrowRight, Star } from 'lucide-react'
import Image from 'next/image'

export default function ProfileCard() {
  return (
    <div className="bg-dark-card border border-dark-border rounded-2xl p-6 shadow-lg">
      {/* Avatar */}
      <div className="flex flex-col items-center mb-6">
        <div className="w-20 h-20 bg-gradient-to-br from-neon-green to-accent-yellow rounded-full overflow-hidden mb-4">
          <Image
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Student"
            alt="User avatar"
            width={80}
            height={80}
          />
        </div>
        <h2 className="text-xl font-bold">student_user</h2>
        <p className="text-sm text-gray-400 mt-1">member since June 2026</p>
      </div>

      {/* Approval Rate Badge */}
      <div className="bg-neon-green/10 border border-neon-green/30 rounded-lg p-3 mb-6 text-center">
        <div className="flex items-center justify-center gap-1 mb-1">
          <Star size={14} className="text-accent-yellow" />
          <p className="text-xs text-gray-400">Approval Rate</p>
        </div>
        <p className="text-lg font-bold text-neon-green">N/A</p>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-neon-green/10 to-accent-yellow/10 border border-neon-green/20 rounded-lg p-4 mb-6">
        <div className="space-y-3">
          <div className="flex items-start gap-2">
            <div className="w-5 h-5 rounded-full bg-neon-green/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <div className="w-2 h-2 bg-neon-green rounded-full"></div>
            </div>
            <p className="text-sm text-gray-300">
              Complete your student profile to get started
            </p>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-5 h-5 rounded-full bg-neon-green/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <div className="w-2 h-2 bg-neon-green rounded-full"></div>
            </div>
            <p className="text-sm text-gray-300">
              Add your skills and payment method to start earning
            </p>
          </div>
        </div>
        <button className="w-full mt-4 bg-neon-green hover:bg-neon-green-dark text-dark-bg font-bold py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors">
          Get Started
          <ArrowRight size={16} />
        </button>
      </div>

      {/* Stats */}
      <div className="space-y-3 pt-4 border-t border-dark-border">
        <div className="flex justify-between items-center py-2">
          <span className="text-sm text-gray-400">Completed Jobs</span>
          <span className="text-lg font-bold text-neon-green">0</span>
        </div>
        <div className="flex justify-between items-center py-2">
          <span className="text-sm text-gray-400">Skills Added</span>
          <span className="text-lg font-bold text-neon-green">0</span>
        </div>
        <div className="flex justify-between items-center py-2">
          <span className="text-sm text-gray-400">Active Campaigns</span>
          <span className="text-lg font-bold text-neon-green">0</span>
        </div>
      </div>
    </div>
  )
}
