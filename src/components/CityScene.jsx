import React from "react";

const CityScene = () => {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg bg-gradient-to-b from-blue-50 to-gray-200">
      
      {/* City Skyline Background */}
      <svg
        className="absolute top-[30px] left-0 w-full opacity-90"
        viewBox="0 0 300 100"
        preserveAspectRatio="xMidYMax meet"
      >
        <rect x="20" y="40" width="30" height="60" rx="2" fill="#94a3b8" />
        <rect x="55" y="10" width="40" height="90" rx="2" fill="#475569" />
        <rect x="100" y="50" width="35" height="50" rx="2" fill="#cbd5e1" />
        <rect x="140" y="0" width="45" height="100" rx="2" fill="#334155" />
        <rect x="190" y="30" width="50" height="70" rx="2" fill="#64748b" />
        <rect x="245" y="45" width="40" height="55" rx="2" fill="#94a3b8" />
      </svg>

      {/* Trapezoid Perspective Road */}
      <div 
        className="absolute bottom-0 left-0 w-full h-[80px]"
        style={{
          background: "linear-gradient(to top, #475569, #94a3b8)",
          clipPath: "polygon(40% 0, 60% 0, 100% 100%, 0% 100%)",
        }}
      >
        {/* Dashed Lane Divider */}
        <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full flex flex-col justify-between items-center py-1 opacity-70">
            <div className="w-[2px] h-3 bg-white" />
            <div className="w-[2px] h-3 bg-white" />
            <div className="w-[2px] h-3 bg-white" />
            <div className="w-[2px] h-3 bg-white" />
        </div>
      </div>

      {/* Subtle vehicle indicators */}
      <div className="vehicle-marker vehicle--1 w-2 h-3 rounded-sm" />
      <div className="vehicle-marker vehicle--2 w-2 h-3 rounded-sm" />
      <div className="vehicle-marker vehicle--3 w-2 h-3 rounded-sm" />

    </div>
  );
};

export default CityScene;
