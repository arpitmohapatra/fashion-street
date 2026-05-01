export const Chinos = ({ color }: { color: string }) => (
  <svg viewBox="0 0 200 260" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    {/* Waistband — matches x=44..156 */}
    <path d="M44 8 C62 12 138 12 156 8 L158 34 C140 38 60 38 42 34 Z" fill={color} stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M42 27 C60 30 140 30 158 27" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.6"/>
    {[52,70,100,130,148].map(x => <rect key={x} x={x-3} y="6" width="6" height="14" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1"/>)}
    {/* Left leg — slightly tapered (inner seam narrows to x=88 at hem) */}
    <path d="M42 34 C38 72 36 126 38 188 C38 214 40 236 42 252 L88 252 C88 236 88 214 86 188 C86 126 88 76 96 38 C78 38 58 38 42 34 Z" fill={color} stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round"/>
    {/* Right leg — slightly tapered (inner seam narrows to x=112 at hem) */}
    <path d="M158 34 C162 72 164 126 162 188 C162 214 160 236 158 252 L112 252 C112 236 114 214 114 188 C114 126 112 76 104 38 C122 38 142 38 158 34 Z" fill={color} stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round"/>
    {/* Fly */}
    <path d="M94 38 Q96 56 100 64 Q104 56 106 38" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    <circle cx="100" cy="48" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.2"/>
    {/* Slant pockets (chino style — angled cut) */}
    <path d="M50 38 C56 52 58 66 58 76" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M150 38 C144 52 142 66 142 76" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    {/* Back welt pocket hints */}
    <line x1="52" y1="60" x2="86" y2="60" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
    <line x1="114" y1="60" x2="148" y2="60" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
    {/* Hem */}
    <path d="M42 252 L88 252 M42 248 L88 248" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M112 252 L158 252 M112 248 L158 248" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    {/* Inseam */}
    <path d="M88 252 C90 210 96 158 100 76 C104 158 110 210 112 252" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.35"/>
  </svg>
);
