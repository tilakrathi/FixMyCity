export default function FixMyCityLogo({ className = "h-12 w-auto" }) {
  return (
    <svg viewBox="0 0 512 512" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id="cityClip">
          <path d="M 0 0 L 512 0 L 512 370 Q 256 310 0 380 Z" />
        </clipPath>
      </defs>

      <g transform="translate(0, 10)">
        {/* LAYER 1: HAMMER (DIAGONAL, TOP-LEFT TO BOTTOM-RIGHT, DARK GRAY '#4b5563') */}
        <g transform="translate(230, 220) rotate(-35)">
          {/* Handle */}
          <rect x="-25" y="-10" width="50" height="230" rx="10" fill="#4b5563" />
          
          {/* Head Base */}
          <rect x="-65" y="-70" width="130" height="60" rx="15" fill="#4b5563" />
          
          {/* Striking Face (Left) */}
          <path d="M -65 -65 L -100 -65 C -120 -65 -125 -50 -125 -40 C -125 -30 -120 -15 -100 -15 L -65 -15 Z" fill="#4b5563" />
          
          {/* Claw (Right) */}
          <path d="M 65 -70 C 120 -70 160 -40 180 30 C 150 10 110 -10 65 -25 Z" fill="#4b5563" />
          
          {/* Optional: subtle handle grip lines or detail to match image feel without gradient */}
          <rect x="-25" y="50" width="50" height="3" fill="#374151" opacity="0.3" />
          <rect x="-25" y="70" width="50" height="3" fill="#374151" opacity="0.3" />
          <rect x="-25" y="90" width="50" height="3" fill="#374151" opacity="0.3" />
        </g>

        {/* LAYER 2: CITY SKYLINE (FOREGROUND, DARKER GRAY '#1f2937') */}
        <g clipPath="url(#cityClip)">
          
          {/* White outline block to create depth/separation from hammer handle */}
          <g transform="translate(130, 150)" fill="#ffffff" stroke="#ffffff" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round">
            <rect x="0" y="110" width="45" height="150" />
            <rect x="35" y="60" width="50" height="200" />
            <rect x="75" y="0" width="60" height="260" />
            <rect x="102" y="-50" width="6" height="50" />
            <rect x="125" y="70" width="55" height="190" />
            <rect x="170" y="125" width="45" height="135" />
          </g>

          {/* Actual Buildings */}
          <g transform="translate(130, 150)" fill="#1f2937">
            {/* Building 1 (Far Left) */}
            <rect x="0" y="110" width="45" height="150" />
            
            {/* Building 2 (Left Mid) */}
            <rect x="35" y="60" width="50" height="200" />
            {/* Windows for B2 */}
            <g fill="#ffffff" fillOpacity="0.8">
              <rect x="47" y="80" width="10" height="14" />
              <rect x="63" y="80" width="10" height="14" />
              <rect x="47" y="105" width="10" height="14" />
              <rect x="63" y="105" width="10" height="14" />
              <rect x="47" y="130" width="10" height="14" />
              <rect x="63" y="130" width="10" height="14" />
            </g>

            {/* Building 3 (Center, Tallest, Overlapping handle) */}
            <rect x="75" y="0" width="60" height="260" />
            {/* Spire */}
            <rect x="102" y="-50" width="6" height="50" />
            {/* Windows for B3 */}
            <g fill="#ffffff" fillOpacity="0.8">
              <rect x="90" y="25" width="14" height="20" />
              <rect x="110" y="25" width="14" height="20" />
              <rect x="90" y="60" width="14" height="20" />
              <rect x="110" y="60" width="14" height="20" />
              <rect x="90" y="95" width="14" height="20" />
              <rect x="110" y="95" width="14" height="20" />
              <rect x="90" y="130" width="14" height="20" />
              <rect x="110" y="130" width="14" height="20" />
            </g>

            {/* Building 4 (Right Mid) */}
            <rect x="125" y="70" width="55" height="190" />
            {/* Windows for B4 */}
            <g fill="#ffffff" fillOpacity="0.8">
              <rect x="140" y="90" width="10" height="14" />
              <rect x="156" y="90" width="10" height="14" />
              <rect x="140" y="115" width="10" height="14" />
              <rect x="156" y="115" width="10" height="14" />
              <rect x="140" y="140" width="10" height="14" />
              <rect x="156" y="140" width="10" height="14" />
            </g>

            {/* Building 5 (Far Right) */}
            <rect x="170" y="125" width="45" height="135" />
          </g>
        </g>

        {/* LAYER 3: ROAD SWOOP (BASE, BLUE '#2563eb') */}
        {/* Creates a thick arc from left, tapering sharp on the right under the buildings */}
        <path d="M 60 410 Q 220 330 450 375 Q 240 375 60 410 Z" fill="#2563eb" />
      </g>
    </svg>
  );
}