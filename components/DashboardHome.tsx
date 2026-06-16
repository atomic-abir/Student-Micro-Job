'use client'

import { Eye, Send, TrendingUp, User, ArrowRight } from 'lucide-react'
import ProfileCard from './ProfileCard'
import EarningsCard from './EarningsCard'
import StatCard from './StatCard'
import JobCard from './JobCard'
import LatestJobsTable from './LatestJobsTable'
import {
  Play,
  Heart,
  Globe,
  MessageSquare,
  Share2,
} from 'lucide-react'

const mockJobs = [
  {
    title: 'Watch Video',
    reward: '$0.03',
    jobType: 'YouTube Task',
    icon: Play,
    gradient: 'from-red-500/20 to-red-400/20',
  },
  {
    title: 'Follow Page',
    reward: '$0.05',
    jobType: 'Social Task',
    icon: User,
    gradient: 'from-blue-500/20 to-blue-400/20',
  },
  {
    title: 'Like Post',
    reward: '$0.02',
    jobType: 'Instagram Task',
    icon: Heart,
    gradient: 'from-pink-500/20 to-pink-400/20',
  },
  {
    title: 'Visit Website',
    reward: '$0.04',
    jobType: 'Traffic Task',
    icon: Globe,
    gradient: 'from-cyan-500/20 to-cyan-400/20',
  },
  {
    title: 'Submit Review',
    reward: '$0.10',
    jobType: 'Feedback Task',
    icon: MessageSquare,
    gradient: 'from-purple-500/20 to-purple-400/20',
  },
]

export default function DashboardHome() {
  return (
    <div className="min-h-screen bg-dark-bg p-4 sm:p-6 lg:p-8">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-4xl sm:text-5xl font-bold font-poppins">
          Welcome Back, <span className="text-neon-green">Student</span>
        </h1>
        <p className="text-gray-400 mt-2">Ready to earn today?</p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        {/* Left Column - Profile Card */}
        <div className="lg:col-span-1">
          <ProfileCard />
        </div>

        {/* Right Column - Earnings & Stats */}
        <div className="lg:col-span-2 space-y-6">
          {/* Earnings Card */}
          <EarningsCard />

          {/* Stat Cards Grid */}
          <div className="grid grid-cols-2 gap-4">
            <StatCard
              title="Total Views"
              value="0"
              icon={Eye}
              color="green"
            />
            <StatCard
              title="Submissions"
              value="0"
              icon={Send}
              color="yellow"
            />
          </div>
        </div>
      </div>

      {/* Active Micro Jobs Section */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold font-poppins">
            Active Micro Jobs
          </h2>
          <a
            href="/find-jobs"
            className="flex items-center gap-2 text-neon-green hover:text-neon-green-dark font-semibold transition-colors"
          >
            View All
            <ArrowRight size={18} />
          </a>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="overflow-x-auto pb-4 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div className="flex gap-6">
            {mockJobs.map((job, idx) => (
              <JobCard
                key={idx}
                title={job.title}
                reward={job.reward}
                jobType={job.jobType}
                icon={job.icon}
                gradient={job.gradient}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Latest Jobs Table Section */}
      <div>
        <h2 className="text-2xl font-bold font-poppins mb-6">
          Latest Student Jobs
        </h2>
        <LatestJobsTable />
      </div>
    </div>
  )
}
