# Backend Integration Guide

This document explains how to integrate the Student Micro Job frontend with your existing backend API.

## Quick Start

1. Update `.env.local` with your backend API URL
2. Replace mock data in components with API calls
3. Test integration endpoints

## API Configuration

### Environment Variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
NEXT_PUBLIC_AUTH_API=/api/auth
NEXT_PUBLIC_JOBS_API=/api/jobs
NEXT_PUBLIC_USERS_API=/api/users
NEXT_PUBLIC_EARNINGS_API=/api/earnings
```

## Component Integration Examples

### 1. Fetch User Profile Data

Replace mock data in `components/ProfileCard.tsx`:

```tsx
'use client'

import { useEffect, useState } from 'react'

export default function ProfileCard() {
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${process.env.NEXT_PUBLIC_USERS_API}/profile`)
        const data = await res.json()
        setProfile(data)
      } catch (error) {
        console.error('Error fetching profile:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProfile()
  }, [])

  if (loading) return <div>Loading...</div>
  if (!profile) return <div>Error loading profile</div>

  return (
    // JSX with real data
  )
}
```

### 2. Fetch Jobs List

Replace mock data in `components/DashboardHome.tsx`:

```tsx
useEffect(() => {
  const fetchJobs = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${process.env.NEXT_PUBLIC_JOBS_API}`)
      const data = await res.json()
      setJobs(data)
    } catch (error) {
      console.error('Error fetching jobs:', error)
    }
  }

  fetchJobs()
}, [])
```

### 3. Fetch Earnings

Replace mock data in `components/EarningsCard.tsx`:

```tsx
useEffect(() => {
  const fetchEarnings = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${process.env.NEXT_PUBLIC_EARNINGS_API}`)
      const data = await res.json()
      setEarnings(data)
    } catch (error) {
      console.error('Error fetching earnings:', error)
    }
  }

  fetchEarnings()
}, [])
```

## Expected API Response Formats

### User Profile Endpoint
`GET /api/users/profile`

```json
{
  "id": "user_123",
  "username": "student_user",
  "email": "student@example.com",
  "avatar": "https://...",
  "joinDate": "2026-06-01",
  "stats": {
    "completedJobs": 5,
    "skillsAdded": 3,
    "activeCampaigns": 2,
    "approvalRate": 95
  }
}
```

### Jobs List Endpoint
`GET /api/jobs`

```json
{
  "jobs": [
    {
      "id": "job_123",
      "title": "Watch Video",
      "reward": 0.03,
      "category": "YouTube",
      "description": "Watch full video and complete survey",
      "status": "Available",
      "image": "https://...",
      "completions": 1475,
      "totalAvailable": 2411
    }
  ],
  "totalCount": 50,
  "page": 1
}
```

### Earnings Endpoint
`GET /api/earnings`

```json
{
  "totalEarnings": 12.50,
  "pendingEarnings": 2.30,
  "withdrawalHistory": [
    {
      "id": "withdraw_123",
      "amount": 10.00,
      "date": "2026-06-15",
      "status": "Completed"
    }
  ]
}
```

### Latest Jobs Endpoint
`GET /api/jobs/latest`

```json
{
  "jobs": [
    {
      "id": "job_1",
      "title": "Watch full video",
      "category": "Video",
      "reward": 0.03,
      "status": "Available"
    }
  ]
}
```

## Authentication

If your backend requires authentication, add an auth context:

```tsx
// lib/auth-context.tsx
'use client'

import { createContext, useContext, useState } from 'react'

interface AuthContext {
  token: string | null
  login: (email: string, password: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContext | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<string | null>(null)

  const login = async (email: string, password: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
    const data = await res.json()
    setToken(data.token)
    localStorage.setItem('token', data.token)
  }

  const logout = () => {
    setToken(null)
    localStorage.removeItem('token')
  }

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
```

## CORS Configuration

If experiencing CORS errors, ensure your backend includes:

```
Access-Control-Allow-Origin: http://localhost:3000
Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS
Access-Control-Allow-Headers: Content-Type, Authorization
```

## Data Transformation Utilities

Create helper functions to transform API responses:

```tsx
// lib/api-helpers.ts
export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount)
}

export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
```

## Error Handling

Wrap API calls in try-catch blocks and show user-friendly error messages:

```tsx
const [error, setError] = useState<string | null>(null)

useEffect(() => {
  const fetchData = async () => {
    try {
      setError(null)
      const res = await fetch(apiUrl)
      if (!res.ok) throw new Error('Failed to fetch')
      const data = await res.json()
      setData(data)
    } catch (err) {
      setError('Failed to load data. Please try again.')
      console.error(err)
    }
  }

  fetchData()
}, [])

return error ? <div className="text-red-500">{error}</div> : <Content />
```

## Testing

Test integration with your backend:

```bash
# Start your backend server
npm run dev:backend

# In another terminal, start the frontend
npm run dev

# Visit http://localhost:3000
```

## Common Issues

### Issue: 404 errors on API routes
- **Solution**: Verify API endpoints in `.env.local` match your backend routes
- Check that the backend server is running

### Issue: CORS errors
- **Solution**: Configure CORS headers in your backend
- For development, you can use a proxy in `next.config.js`

### Issue: Auth token not persisting
- **Solution**: Use httpOnly cookies instead of localStorage
- Update AuthProvider to handle token refresh

### Issue: Images not loading
- **Solution**: Ensure image URLs are complete (http:// or https://)
- Add image domain to `next.config.js`:

```js
module.exports = {
  images: {
    domains: ['example.com', 'api.example.com'],
  },
}
```

## Performance Optimization

1. **Cache API responses**: Use React Query or SWR
2. **Lazy load images**: Use Next.js Image component
3. **Memoize components**: Use React.memo for heavy components
4. **Pagination**: Implement on LatestJobsTable for large datasets

## Next Steps

1. Identify all mock data in components
2. Create API integration functions in `lib/api.ts`
3. Update components to use real data
4. Test each page thoroughly
5. Set up error boundaries for better error handling
6. Add loading states for better UX

---

For questions or issues, refer to the main README.md or contact the development team.
