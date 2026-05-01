export const Polo = ({ color }: { color: string }) => (
  <svg viewBox="0 0 200 240" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    {/* Main body — same silhouette as tshirt, neckline accommodates collar */}
    <path
      d="M 82 28 C 58 26 24 44 12 90
         L 50 100 C 52 92 55 84 58 78
         L 60 88 C 58 132 46 186 46 222
         L 154 222 C 152 186 142 132 140 88
         L 142 78 C 145 84 148 92 150 100
         L 188 90 C 176 44 142 26 118 28
         C 112 26 106 24 100 24
         C 94 24 88 26 82 28 Z"
      fill={color} stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round"
    />
    {/* Collar wing — left: sweeps up to collar top, fans back down to placket */}
    <path
      d="M 82 28 C 80 20 76 12 80 8
         C 84 4 92 4 100 8
         L 100 50
         C 95 44 88 36 82 28 Z"
      fill={color} stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"
    />
    {/* Collar wing — right: mirror */}
    <path
      d="M 118 28 C 120 20 124 12 120 8
         C 116 4 108 4 100 8
         L 100 50
         C 105 44 112 36 118 28 Z"
      fill={color} stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"
    />
    {/* Collar fold crease — left wing */}
    <path d="M 80 8 C 82 16 84 24 86 34"
      fill="none" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" opacity="0.45"/>
    {/* Collar fold crease — right wing */}
    <path d="M 120 8 C 118 16 116 24 114 34"
      fill="none" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" opacity="0.45"/>
    {/* Placket */}
    <line x1="100" y1="50" x2="100" y2="88" stroke="currentColor" strokeWidth="1.2"/>
    {/* Buttons */}
    <circle cx="100" cy="58" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.2"/>
    <circle cx="100" cy="74" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.2"/>
    {/* Sleeve hems */}
    <path d="M 12 90 C 14 100 26 104 50 100"
      fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M 188 90 C 186 100 174 104 150 100"
      fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
