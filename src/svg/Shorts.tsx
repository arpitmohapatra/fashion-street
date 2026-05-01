export const Shorts = ({ color }: { color: string }) => (
  <svg viewBox="0 0 200 260" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <path d="M44 8 C62 12 138 12 156 8 L158 34 C140 38 60 38 42 34 Z" fill={color} stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M42 27 C60 30 140 30 158 27" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.6"/>
    {[52,70,100,130,148].map(x => <rect key={x} x={x-3} y="6" width="6" height="14" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1"/>)}
    <path d="M42 34 C38 64 36 96 38 134 Q46 160 68 166 Q84 170 96 164 L98 38 C80 38 60 38 42 34 Z" fill={color} stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round"/>
    <path d="M158 34 C162 64 164 96 162 134 Q154 160 132 166 Q116 170 104 164 L102 38 C120 38 140 38 158 34 Z" fill={color} stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round"/>
    <path d="M94 38 Q96 55 100 62 Q104 55 106 38" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    <circle cx="100" cy="48" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.2"/>
    <path d="M96 164 C98 178 100 182 102 164" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
    <path d="M38 134 Q46 164 96 164" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M162 134 Q154 164 104 164" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M50 38 C52 56 54 68 60 74" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M150 38 C148 56 146 68 140 74" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);
