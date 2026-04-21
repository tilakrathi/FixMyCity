# 🏙️ FixMyCity — AI-Powered Civic Issue Reporting Platform

FixMyCity is a modern, responsive web application that empowers citizens to report municipal issues such as potholes, garbage overflow, streetlight outages, water leakage, and traffic problems. It uses a built-in **AI Engine** to automatically classify and prioritize complaints, streamlining the process for both citizens and municipal officials.

---

## ✨ Features

### 🧑‍💻 Citizen Module
- **Report Complaints** — Submit civic issues with descriptions, image uploads, and location tagging
- **AI Auto-Categorization** — The built-in heuristic AI engine reads your description and automatically suggests a category (Pothole, Garbage, Water Leakage, Streetlight, Traffic Issue) and priority level (High / Medium / Low)
- **AI Image Analysis** — Simulated image severity detection for uploaded photos
- **Citizen Dashboard** — View and track all your submitted complaints with status updates
- **Track Complaints** — Browse all reported complaints in one place

### 🏛️ Official / Admin Module
- **Official Dashboard** — Municipal officials can view, manage, and update the status of all incoming complaints
- **Status Management** — Update complaint status (Pending → In Progress → Resolved)
- **Priority Filtering** — Sort and filter complaints by priority and category

### 🎨 Design & UX
- **Glassmorphism UI** — Modern glass-card components with gradient buttons and smooth animations
- **Responsive Design** — Fully responsive layout that works on desktop, tablet, and mobile
- **PWA Support** — Installable as a Progressive Web App on mobile devices ("Add to Home Screen")
- **Custom Logo & Branding** — FixMyCity branded logo and assets throughout

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | React 18 + Vite |
| **Routing** | React Router DOM v6 |
| **Styling** | TailwindCSS 3 + Custom CSS |
| **UI Libraries** | MUI (Material UI) + FontAwesome + Lucide Icons |
| **AI Engine** | Custom heuristic keyword-based classifier (`src/utils/AIEngine.js`) |
| **Data Layer** | LocalForage (IndexedDB) — mimics a backend database locally |
| **Auth** | LocalStorage-based auth stub (Firebase-compatible interface) |
| **Image Upload** | react-images-uploading |
| **Notifications** | React Toastify |
| **PWA** | vite-plugin-pwa + Workbox |

---

## 📁 Project Structure

```
FixMyCity/
├── public/                     # Static public assets
├── doc/                        # Documentation
├── src/
│   ├── assets/                 # Images (logo, hero image)
│   ├── components/             # Reusable UI components
│   │   ├── ui/                 # Base UI components (GlassCard, Badges, Breadcrumb, etc.)
│   │   ├── Navbar.jsx          # Navigation bar
│   │   ├── Footer.jsx          # Footer
│   │   ├── FixMyCityLogo.jsx   # SVG logo component
│   │   ├── ComplaintsCard.jsx  # Complaint display card
│   │   ├── ComplaintDetailModal.jsx  # Detailed complaint view
│   │   ├── CityScene.jsx      # City illustration animation
│   │   ├── SpinnerModal.jsx    # Loading spinner
│   │   └── ...
│   ├── pages/                  # Application pages
│   │   ├── HomePage.jsx        # Landing page
│   │   ├── About.jsx           # About page
│   │   ├── CitizenLogin.jsx    # Citizen login/register
│   │   ├── OfficialLogin.jsx   # Official login
│   │   ├── CitizenDashboard.jsx    # Citizen complaint dashboard
│   │   ├── OfficialDashboard.jsx   # Admin complaint management
│   │   └── ReportComplaint.jsx     # Complaint submission form
│   ├── utils/                  # Utility modules
│   │   ├── AIEngine.js         # AI classification engine
│   │   ├── Firebase.js         # Auth stub (LocalStorage-based)
│   │   ├── FirebaseFunctions.js # Data CRUD operations (LocalForage)
│   │   ├── MiscFunctions.js    # Helper functions
│   │   ├── cn.js               # Class name utility
│   │   └── enums.js            # Constants and enums
│   ├── main.jsx                # App entry point with routes
│   └── index.css               # Global styles
├── index.html                  # HTML entry point
├── package.json                # Dependencies and scripts
├── vite.config.js              # Vite + PWA configuration
├── tailwind.config.js          # TailwindCSS configuration
├── postcss.config.js           # PostCSS configuration
└── .gitignore                  # Git ignore rules
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/tilakrathi/FixMyCity.git
   cd FixMyCity
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
npm run preview
```

---

## 📱 Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | HomePage | Landing page with hero section and city animation |
| `/about` | About | About the platform |
| `/citizen-login` | CitizenLogin | Citizen login / registration |
| `/official-login` | OfficialLogin | Municipal official login |
| `/citizen-dashboard` | CitizenDashboard | View and track submitted complaints |
| `/official-dashboard` | OfficialDashboard | Admin panel to manage all complaints |
| `/report` | ReportComplaint | Submit a new civic complaint |
| `/track-complaints` | ReportedComplaints | Browse all reported complaints |

---

## 🤖 AI Engine

The AI Engine (`src/utils/AIEngine.js`) provides three capabilities:

1. **Issue Classification** — Analyzes complaint descriptions using keyword matching to categorize into: Pothole, Garbage, Water Leakage, Streetlight, Traffic Issue, or Others
2. **Priority Assignment** — Automatically assigns High, Medium, or Low priority based on issue severity keywords
3. **Image Analysis** — Simulated AI-based severity detection for uploaded images

---

## 🗂️ Data Layer

FixMyCity uses **LocalForage** (IndexedDB wrapper) as its data layer, providing persistent local storage that mimics a backend database. The data functions in `src/utils/FirebaseFunctions.js` follow a Firebase-compatible interface, making it easy to switch to a real Firebase backend by simply updating the function implementations.

---

## 📦 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to [Vercel](https://vercel.com)
2. Vercel auto-detects the Vite framework
3. Build command: `npm run build`
4. Output directory: `dist`

### Netlify
1. Connect your GitHub repository to [Netlify](https://netlify.com)
2. Build command: `npm run build`
3. Publish directory: `dist`

---

## 🔄 Switching to Firebase Backend

The current setup uses LocalForage for local data persistence. To switch to a production Firebase backend:

1. Add your Firebase config to `src/utils/Firebase.js`
2. Update `src/utils/FirebaseFunctions.js` to use Firestore's `onSnapshot`, `addDoc`, `updateDoc` etc.
3. No UI changes needed — the interface layer is already abstracted

---

## 👤 Author

**Tilak Rathi**

---

## 📄 License

This project is open source and available for educational and personal use.
