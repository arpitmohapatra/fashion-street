export const Hoodie = ({ color }: { color: string }) => (
  <svg viewBox="0 0 200 240" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    {/* Hood outer — arcs above neckline, stays within viewBox */}
    <path
      d="M 72 28 C 62 20 54 8 56 4 C 60 0 76 0 100 2
         C 124 0 140 0 144 4 C 146 8 138 20 128 28
         C 118 26 110 24 100 24 C 90 24 82 26 72 28 Z"
      fill={color} stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"
    />
    {/* Hood face opening — inner curve */}
    <path d="M 76 10 C 82 14 90 18 100 20 C 110 18 118 14 124 10"
      fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    {/* Hood seam across top */}
    <path d="M 72 28 C 82 30 90 32 100 32 C 110 32 118 30 128 28"
      fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.6"/>
    {/* Main body — long sleeves */}
    <path
      d="M 72 28 C 56 30 38 46 28 64 C 16 76 2 100 2 168
         L 42 174 C 44 162 46 148 48 132 L 54 88
         C 52 148 42 198 42 218 L 158 218
         C 158 198 148 148 146 88 L 152 132
         C 154 148 156 162 158 174 L 198 168
         C 198 100 184 76 172 64 C 162 46 144 30 128 28
         C 118 26 110 24 100 24 C 90 24 82 26 72 28 Z"
      fill={color} stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round"
    />
    {/* Drawstring cord */}
    <path d="M 90 32 C 88 44 86 54 84 58" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M 110 32 C 112 44 114 54 116 58" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    {/* Center zip (optional detail line) */}
    <line x1="100" y1="32" x2="100" y2="172" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2" opacity="0.3"/>
    {/* Kangaroo pocket */}
    <path d="M 60 158 C 66 150 82 145 100 145 C 118 145 134 150 140 158 L 138 182 C 132 188 118 190 100 190 C 82 190 68 188 62 182 Z"
      fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
    <line x1="100" y1="145" x2="100" y2="190" stroke="currentColor" strokeWidth="1.2"/>
    {/* Hem ribbing */}
    <path d="M 42 218 L 158 218 M 42 224 L 158 224" stroke="currentColor" strokeWidth="1.5"/>
    {[56,68,80,92,104,116,128,140,152].map(x => (
      <line key={x} x1={x} y1="218" x2={x} y2="224" stroke="currentColor" strokeWidth="0.8" opacity="0.5"/>
    ))}
    {/* Sleeve cuff ribbing */}
    <path d="M 2 168 L 42 174 M 3 174 L 43 180" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M 198 168 L 158 174 M 197 174 L 157 180" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
