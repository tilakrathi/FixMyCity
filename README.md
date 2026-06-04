# FixMyCity

A civic issue reporting platform built with React and Vite. Citizens can report problems like potholes, broken streetlights, garbage overflow, and other municipal issues. The app classifies complaints automatically using a keyword-based AI engine and assigns priority levels, so officials can act on the most urgent issues first.

---
## Live Demo

https://fixmycity-report-civic-issues.netlify.app/

## What it does

**For Citizens:**
- Report civic issues with a description, photo upload, and location
- The AI engine reads the description and suggests a category and priority automatically
- Dashboard to track the status of submitted complaints
- Browse all reported complaints in one place

**For Officials:**
- Admin dashboard to view and manage all incoming complaints
- Update complaint status (Pending, In Progress, Resolved)
- Filter by priority and category

**General:**
- Glassmorphism-based UI with responsive layout
- Works as a PWA — installable on mobile via "Add to Home Screen"
- All data stored locally using LocalForage (IndexedDB), no backend server needed to run it

---

## Tech Stack

| | |
|---|---|
| Frontend | React 18 + Vite |
| Routing | React Router DOM v6 |
| Styling | TailwindCSS 3 + Custom CSS |
| UI Components | MUI, FontAwesome, Lucide Icons |
| AI Engine | Custom keyword classifier (see `src/utils/AIEngine.js`) |
| Data | LocalForage (IndexedDB wrapper) |
| Auth | LocalStorage-based stub with Firebase-compatible interface |
| PWA | vite-plugin-pwa + Workbox |

---

## Project Structure

```
FixMyCity/
├── public/
├── doc/
├── src/
│   ├── assets/              # Logo, hero image
│   ├── components/          # Navbar, Footer, Cards, Modals, etc.
│   │   └── ui/              # Base components (GlassCard, Badges, Breadcrumb)
│   ├── pages/               # All route pages
│   │   ├── HomePage.jsx
│   │   ├── About.jsx
│   │   ├── CitizenLogin.jsx
│   │   ├── OfficialLogin.jsx
│   │   ├── CitizenDashboard.jsx
│   │   ├── OfficialDashboard.jsx
│   │   └── ReportComplaint.jsx
│   ├── utils/               # AI engine, data functions, helpers
│   ├── main.jsx             # Entry point and routes
│   └── index.css            # Global styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

---

## Getting Started

Make sure you have Node.js (v16+) installed.

```bash
git clone https://github.com/tilakrathi/FixMyCity.git
cd FixMyCity
npm install --legacy-peer-deps
npm run dev
```

Open `http://localhost:5173` in your browser.

To build for production:

```bash
npm run build
npm run preview
```

---

## Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/about` | About |
| `/citizen-login` | Citizen login and registration |
| `/official-login` | Official login |
| `/citizen-dashboard` | Citizen complaint dashboard |
| `/official-dashboard` | Admin complaint management |
| `/report` | Submit a new complaint |
| `/track-complaints` | View all reported complaints |

---

## How the AI Engine works

The classifier in `src/utils/AIEngine.js` matches keywords from the complaint description to predefined categories — Pothole, Garbage, Water Leakage, Streetlight, or Traffic Issue. It also assigns a priority (High, Medium, Low) based on severity keywords. If nothing matches, it defaults to "Others" with Low priority. There's also a simulated image analysis function that mimics AI-based severity detection.

---

## Data Layer

Everything runs on LocalForage (an IndexedDB wrapper). The functions in `src/utils/FirebaseFunctions.js` follow a Firebase-like interface, so switching to a real Firebase backend later just means swapping the function bodies — no UI changes needed.

---


## Sample Output Images

<img width="1890" height="909" alt="Screenshot 2026-03-29 193848" src="https://github.com/user-attachments/assets/e39e720c-4f80-4da6-95d7-354a7b6f600a" />
<img width="1901" height="908" alt="Screenshot 2026-03-29 194123" src="https://github.com/user-attachments/assets/dffb4395-d4a3-426b-b3cd-79c4df826736" />
<img width="1886" height="906" alt="Screenshot 2026-03-29 194211" src="https://github.com/user-attachments/assets/78ef9887-1f22-43e5-b910-cc6bdd89f3fe" />
<img width="1903" height="909" alt="Screenshot 2026-03-29 194414" src="https://github.com/user-attachments/assets/8c48efa9-b1c9-4a4d-be00-e221dee75fd0" />
<img width="1881" height="911" alt="Screenshot 2026-03-29 194944" src="https://github.com/user-attachments/assets/97d08e84-f512-41d1-b47c-bdafdbfd9557" />
<img width="1874" height="904" alt="Screenshot 2026-03-29 194958" src="https://github.com/user-attachments/assets/5830e80c-bfa7-42d8-b2da-2d7a1d4d61bc" />
<img width="1881" height="894" alt="Screenshot 2026-03-29 195051" src="https://github.com/user-attachments/assets/931f541d-aea8-4c9d-8dec-c342138dcc31" />
<img width="758" height="758" alt="Screenshot 2026-03-29 195118" src="https://github.com/user-attachments/assets/228c542b-d89a-4c1a-80fe-5d6d9535661f" />

---

## Author

Tilak G. Rathi
