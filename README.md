# FixMyCity – AI-Powered Civic Reporting

FixMyCity is a modern, responsive platform that enables citizens to seamlessly report municipal issues (e.g., potholes, streetlight outages, illegal dumping). Unlike traditional civic apps, FixMyCity leverages an **AI Engine** to instantly classify reports and estimate priority, routing the issue exactly where it needs to go on an interactive map.

![FixMyCity Intro](/public/logo.svg)

## Features

- **Reimagined Modern UX (Glassmorphism):** Completely overhauled following modern SaaS design principles. Includes Framer-Motion animations, glowing gradient buttons, and floating glass components.
- **Smart AI Auto-Categorization:** Uses a local heuristic AIEngine to read the user's issue description and instantly recommend a category and priority.
- **Role-Based Views:** 
  - **Citizen Module:** Features a simplified report dashboard, interactive Live Map (`react-leaflet`), and PWA compatibility.
  - **Admin / Official Dashboard:** Revamped with `Recharts` to provide actionable analytics on incoming reports, categorized by Priority and Status.
- **Local Data Persistence:** Fully operates via IndexedDB / `localforage` for quick setups, mimicking a backend database.

## Architecture & Tech Stack

- **Frontend Core:** React + Vite
- **Styling:** TailwindCSS + Custom Inter Font + Global CSS (SaaS UI)
- **Animation Engine:** Framer Motion
- **Analytics & Vis:** Recharts (Admin), React-Leaflet (Maps)
- **Data Persistence:** LocalForage (Mocked Backend functions available in `FirebaseFunctions.js`)
- **Icons:** Lucide-React & FontAwesome

## Getting Started

1. **Clone & Install**
   ```bash
   git clone <repo-url>
   cd fixmycity
   npm install --legacy-peer-deps
   ```

2. **Run Locally**
   ```bash
   npm run dev
   ```
3. Open `http://localhost:5173`. 

*(PWA is fully supported. View it on mobile through your browser and select "Add to Home Screen".)*

## Deployment Structure

1. **Frontend Hosting:** Designed seamlessly for **Vercel** or **Netlify**.
   - Simply connect your GitHub repository to Vercel. 
   - Vercel automatically detects the Vite framework. Build command: `npm run build`. Let it handle the rest.
2. **Backend Transition:** 
   - The current setup uses a robust `localforage` mock in `/utils/FirebaseFunctions.js`. To switch to production Firebase, simply restore `onSnapshot` / `addDoc` functions inside that file and add your `Firebase.js` configuration object. No UI rewrites needed.
