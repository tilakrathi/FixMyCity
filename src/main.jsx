import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import ReportedComplaints from "./components/ReportedComplaints";
import "./index.css";
import CitizenDashboard from "./pages/CitizenDashboard";
import CitizenLogin from "./pages/CitizenLogin";
import HomePage from "./pages/HomePage";
import OfficialDashboard from "./pages/OfficialDashboard";
import OfficialLogin from "./pages/OfficialLogin";
import ReportComplaint from "./pages/ReportComplaint";
import About from "./pages/About";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/citizen-login" element={<CitizenLogin />} />
        <Route path="/official-login" element={<OfficialLogin />} />
        <Route path="/citizen-dashboard" element={<CitizenDashboard />} />
        <Route path="/official-dashboard" element={<OfficialDashboard />} />
        <Route path="/report" element={<ReportComplaint />} />
        <Route
          path="/track-complaints"
          element={
            <>
              <Navbar />
              <ReportedComplaints />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
