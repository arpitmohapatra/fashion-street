export const Pants = ({ color }: { color: string }) => (
  <svg viewBox="0 0 200 260" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <path d="M44 8 C62 12 138 12 156 8 L158 34 C140 38 60 38 42 34 Z" fill={color} stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M42 27 C60 30 140 30 158 27" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.6"/>
    {[52,70,100,130,148].map(x => <rect key={x} x={x-3} y="6" width="6" height="14" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1"/>)}
    <path d="M42 34 C38 72 36 126 38 188 C38 214 40 236 42 252 L90 252 C90 236 90 214 88 188 C88 126 90 76 96 38 C78 38 58 38 42 34 Z" fill={color} stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round"/>
    <path d="M158 34 C162 72 164 126 162 188 C162 214 160 236 158 252 L110 252 C110 236 112 214 112 188 C112 126 110 76 104 38 C122 38 142 38 158 34 Z" fill={color} stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round"/>
    <path d="M94 38 Q96 56 100 64 Q104 56 106 38" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    <circle cx="100" cy="48" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.2"/>
    <path d="M50 38 C52 64 56 80 62 88" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M150 38 C148 64 144 80 138 88" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    <line x1="63" y1="82" x2="42" y2="250" stroke="currentColor" strokeWidth="0.8" opacity="0.3" strokeLinecap="round"/>
    <line x1="137" y1="82" x2="158" y2="250" stroke="currentColor" strokeWidth="0.8" opacity="0.3" strokeLinecap="round"/>
    <path d="M42 252 L90 252 M42 248 L90 248" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M110 252 L158 252 M110 248 L158 248" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M90 252 C92 210 96 158 100 76 C104 158 108 210 110 252" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.35"/>
  </svg>
);
