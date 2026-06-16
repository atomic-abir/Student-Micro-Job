'use client'

interface JobRow {
  id: string
  title: string
  category: string
  reward: string
  status: 'Available' | 'In Progress' | 'Completed'
}

interface LatestJobsTableProps {
  jobs?: JobRow[]
}

export default function LatestJobsTable({
  jobs = [
    {
      id: '1',
      title: 'Watch full video',
      category: 'Video',
      reward: '$0.03',
      status: 'Available',
    },
    {
      id: '2',
      title: 'Like Facebook page',
      category: 'Social',
      reward: '$0.05',
      status: 'Available',
    },
    {
      id: '3',
      title: 'Visit website for 30 seconds',
      category: 'Website',
      reward: '$0.04',
      status: 'Available',
    },
    {
      id: '4',
      title: 'Submit short feedback',
      category: 'Survey',
      reward: '$0.10',
      status: 'Available',
    },
  ],
}: LatestJobsTableProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Available':
        return 'text-neon-green bg-neon-green/10'
      case 'In Progress':
        return 'text-accent-yellow bg-accent-yellow/10'
      case 'Completed':
        return 'text-gray-400 bg-gray-400/10'
      default:
        return 'text-gray-400 bg-gray-400/10'
    }
  }

  return (
    <div className="bg-dark-card border border-dark-border rounded-2xl overflow-hidden shadow-lg">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-dark-border bg-dark-bg/50">
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">
                Job Title
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">
                Category
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">
                Reward
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">
                Status
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr
                key={job.id}
                className="border-b border-dark-border hover:bg-dark-bg/50 transition-colors"
              >
                <td className="px-6 py-4 text-sm font-medium text-white">
                  {job.title}
                </td>
                <td className="px-6 py-4 text-sm text-gray-400">{job.category}</td>
                <td className="px-6 py-4 text-sm font-bold text-neon-green">
                  {job.reward}
                </td>
                <td className="px-6 py-4 text-sm">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                      job.status
                    )}`}
                  >
                    {job.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm">
                  <button className="bg-neon-green hover:bg-neon-green-dark text-dark-bg font-bold py-2 px-4 rounded-lg transition-colors text-xs">
                    Start
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
