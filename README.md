# Student Micro Job - Frontend UI

A modern, dark-themed dashboard UI for the Student Micro Job platform. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Dark premium dashboard theme with neon green accents
- 📱 Fully responsive design (desktop, tablet, mobile)
- 🧩 Reusable component architecture
- ✨ Smooth animations and transitions
- 🎯 Modern UI/UX with proper spacing and typography
- 📊 Job cards, earnings tracking, and statistics
- 🔄 Side-by-side job browsing
- 📋 Latest jobs table view

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Icon library
- **React 18** - UI library

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
/app
  - layout.tsx          # Root layout with sidebar and navbar
  - page.tsx            # Home page
  - globals.css         # Global styles
  - [route]/page.tsx    # Other route pages

/components
  - Sidebar.tsx         # Navigation sidebar
  - TopNavbar.tsx       # Top navigation bar
  - DashboardHome.tsx   # Home page content
  - ProfileCard.tsx     # User profile card
  - EarningsCard.tsx    # Earnings display
  - StatCard.tsx        # Statistics card
  - JobCard.tsx         # Job card component
  - LatestJobsTable.tsx # Jobs table view
```

## Design System

### Colors
- **Dark Background**: `#0f0f0f`
- **Dark Sidebar**: `#1a1a1a`
- **Dark Card**: `#1e1e1e`
- **Dark Border**: `#2a2a2a`
- **Neon Green (Primary)**: `#39ff14`
- **Neon Green Dark**: `#2dd00d`
- **Accent Yellow**: `#ffd700`

### Typography
- **Font Family**: Inter (body), Poppins (headings)
- **Font Sizes**: Scale from xs (0.75rem) to 3xl (1.875rem)

### Spacing & Shadows
- Rounded corners for modern look
- Soft shadows for depth
- Smooth hover effects
- Subtle gradients on cards

## Component Usage

### Sidebar
Automatically shows mobile menu on small screens. Active menu items highlight with neon green.

### StatCard
```tsx
<StatCard
  title="Total Views"
  value="123"
  icon={Eye}
  color="green" // 'green', 'yellow', or 'blue'
/>
```

### JobCard
```tsx
<JobCard
  title="Watch Video"
  reward="$0.03"
  jobType="YouTube Task"
  icon={Play}
  gradient="from-red-500/20 to-red-400/20"
/>
```

## Customization

All colors are defined in `tailwind.config.js`. To change the theme:

1. Modify color values in `tailwind.config.js`
2. Update `app/globals.css` for any custom styles
3. Clear `.next` folder and rebuild: `npm run build`

## Building for Production

```bash
npm run build
npm start
```

## Notes

- The UI is designed as a self-contained frontend module
- Backend integration should connect to existing API endpoints
- All components use mock data for demonstration
- Replace mock data with actual API calls when integrating backend
- Mobile sidebar automatically collapses on small screens
- All interactive elements have hover states and transitions

## Support

For issues or feature requests, contact the development team.

---

**Status**: ✨ Production Ready  
**Version**: 1.0.0  
**Last Updated**: June 2026
