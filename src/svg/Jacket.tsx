export const Jacket = ({ color }: { color: string }) => (
  <svg viewBox="0 0 200 240" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M76 24 C60 26 42 44 32 62 C20 74 4 100 2 168 L42 174 C44 162 46 150 48 132 L54 86 C52 146 42 198 42 220 L158 220 C158 198 148 146 146 86 L152 132 C154 150 156 162 158 174 L198 168 C196 100 180 74 168 62 C158 44 140 26 124 24 L112 22 L100 34 L88 22 Z"
      fill={color} stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round"
    />
    <path d="M76 24 L88 22 L100 34 L112 22 L124 24 C120 32 114 38 110 42 L100 50 L90 42 C86 38 80 32 76 24 Z" fill={color} stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <line x1="100" y1="50" x2="100" y2="214" stroke="currentColor" strokeWidth="1.5"/>
    {[60,74,88,102,116,130,144,158,172,186,200].filter(y => y <= 214).map(y => (
      <g key={y}><line x1="96" y1={y} x2="99" y2={y} stroke="currentColor" strokeWidth="1" opacity="0.4"/><line x1="101" y1={y} x2="104" y2={y} stroke="currentColor" strokeWidth="1" opacity="0.4"/></g>
    ))}
    <rect x="97" y="56" width="6" height="5" rx="1" fill="none" stroke="currentColor" strokeWidth="1.2"/>
    <path d="M56 88 L92 88 L92 108 L56 108 Z" fill="none" stroke="currentColor" strokeWidth="1.2"/>
    <line x1="64" y1="88" x2="84" y2="88" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M42 220 L158 220 M42 226 L158 226" stroke="currentColor" strokeWidth="1.5"/>
    {[52,64,76,88,100,112,124,136,148].map(x => <line key={x} x1={x} y1="220" x2={x} y2="226" stroke="currentColor" strokeWidth="0.8" opacity="0.5"/>)}
    <path d="M2 168 L42 174 M3 174 L43 180" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M198 168 L158 174 M197 174 L157 180" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);
