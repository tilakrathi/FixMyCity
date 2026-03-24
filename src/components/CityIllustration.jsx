import React from "react";

const CityIllustration = () => {
  return (
    <svg viewBox="0 0 600 400" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      {/* Sky gradient */}
      <defs>
        <linearGradient id="sky" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#dbeafe" />
          <stop offset="100%" stopColor="#eff6ff" />
        </linearGradient>
        <linearGradient id="road" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#64748b" />
          <stop offset="100%" stopColor="#94a3b8" />
        </linearGradient>
      </defs>

      {/* Sky */}
      <rect width="600" height="400" fill="url(#sky)" rx="12" />

      {/* Sun */}
      <circle cx="480" cy="80" r="35" fill="#fbbf24" opacity="0.6" />

      {/* Buildings - back row */}
      <rect x="40" y="140" width="50" height="160" rx="3" fill="#94a3b8" />
      <rect x="45" y="150" width="10" height="12" rx="1" fill="#cbd5e1" />
      <rect x="61" y="150" width="10" height="12" rx="1" fill="#cbd5e1" />
      <rect x="45" y="170" width="10" height="12" rx="1" fill="#cbd5e1" />
      <rect x="61" y="170" width="10" height="12" rx="1" fill="#cbd5e1" />
      <rect x="45" y="190" width="10" height="12" rx="1" fill="#e2e8f0" />
      <rect x="61" y="190" width="10" height="12" rx="1" fill="#e2e8f0" />

      <rect x="100" y="100" width="60" height="200" rx="3" fill="#64748b" />
      <rect x="108" y="112" width="12" height="14" rx="1" fill="#94a3b8" />
      <rect x="126" y="112" width="12" height="14" rx="1" fill="#94a3b8" />
      <rect x="108" y="134" width="12" height="14" rx="1" fill="#94a3b8" />
      <rect x="126" y="134" width="12" height="14" rx="1" fill="#94a3b8" />
      <rect x="108" y="156" width="12" height="14" rx="1" fill="#94a3b8" />
      <rect x="126" y="156" width="12" height="14" rx="1" fill="#94a3b8" />

      <rect x="170" y="160" width="45" height="140" rx="3" fill="#475569" />
      <rect x="178" y="172" width="8" height="10" rx="1" fill="#94a3b8" />
      <rect x="192" y="172" width="8" height="10" rx="1" fill="#94a3b8" />
      <rect x="178" y="190" width="8" height="10" rx="1" fill="#94a3b8" />
      <rect x="192" y="190" width="8" height="10" rx="1" fill="#94a3b8" />

      <rect x="230" y="120" width="70" height="180" rx="3" fill="#334155" />
      <rect x="240" y="132" width="14" height="16" rx="1" fill="#64748b" />
      <rect x="260" y="132" width="14" height="16" rx="1" fill="#64748b" />
      <rect x="280" y="132" width="14" height="16" rx="1" fill="#64748b" />
      <rect x="240" y="156" width="14" height="16" rx="1" fill="#64748b" />
      <rect x="260" y="156" width="14" height="16" rx="1" fill="#64748b" />
      <rect x="280" y="156" width="14" height="16" rx="1" fill="#64748b" />
      <rect x="240" y="180" width="14" height="16" rx="1" fill="#64748b" />
      <rect x="260" y="180" width="14" height="16" rx="1" fill="#64748b" />

      <rect x="310" y="170" width="40" height="130" rx="3" fill="#94a3b8" />
      <rect x="360" y="130" width="55" height="170" rx="3" fill="#64748b" />
      <rect x="425" y="180" width="40" height="120" rx="3" fill="#475569" />
      <rect x="475" y="150" width="65" height="150" rx="3" fill="#334155" />

      {/* Road */}
      <rect x="0" y="300" width="600" height="60" fill="url(#road)" />
      {/* Road markings */}
      <rect x="40" y="328" width="40" height="4" rx="2" fill="#fbbf24" />
      <rect x="120" y="328" width="40" height="4" rx="2" fill="#fbbf24" />
      <rect x="200" y="328" width="40" height="4" rx="2" fill="#fbbf24" />
      <rect x="280" y="328" width="40" height="4" rx="2" fill="#fbbf24" />
      <rect x="360" y="328" width="40" height="4" rx="2" fill="#fbbf24" />
      <rect x="440" y="328" width="40" height="4" rx="2" fill="#fbbf24" />
      <rect x="520" y="328" width="40" height="4" rx="2" fill="#fbbf24" />

      {/* Sidewalk */}
      <rect x="0" y="295" width="600" height="6" fill="#e2e8f0" />
      <rect x="0" y="360" width="600" height="5" fill="#cbd5e1" />

      {/* Issue markers */}
      {/* Marker 1 - pothole */}
      <circle cx="130" cy="280" r="8" fill="#ef4444" opacity="0.9" />
      <circle cx="130" cy="280" r="4" fill="white" />
      {/* Marker 2 - streetlight */}
      <circle cx="320" cy="280" r="8" fill="#f59e0b" opacity="0.9" />
      <circle cx="320" cy="280" r="4" fill="white" />
      {/* Marker 3 - resolved */}
      <circle cx="470" cy="280" r="8" fill="#10b981" opacity="0.9" />
      <circle cx="470" cy="280" r="4" fill="white" />

      {/* Trees */}
      <circle cx="80" cy="278" r="14" fill="#86efac" opacity="0.7" />
      <rect x="78" y="285" width="4" height="10" fill="#65a30d" />
      <circle cx="400" cy="278" r="12" fill="#86efac" opacity="0.7" />
      <rect x="398" y="284" width="4" height="10" fill="#65a30d" />

      {/* Ground */}
      <rect x="0" y="365" width="600" height="35" fill="#d1d5db" rx="0" />
    </svg>
  );
};

export default CityIllustration;
