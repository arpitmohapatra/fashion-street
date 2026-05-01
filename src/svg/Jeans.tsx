export const Jeans = ({ color }: { color: string }) => (
  <svg viewBox="0 0 200 260" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    {/* Waistband */}
    <path d="M44 8 C62 12 138 12 156 8 L158 34 C140 38 60 38 42 34 Z"
      fill={color} stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    {/* Waistband topstitch lines */}
    <path d="M44 26 C62 29 138 29 156 26" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.5"/>
    <path d="M44 19 C62 21 138 21 156 19" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.3"/>
    {/* Belt loops — 5 positions, straddling waistband edge */}
    {[52, 72, 100, 128, 148].map(x => (
      <rect key={x} x={x - 3} y="3" width="6" height="18" rx="1.5"
        fill="none" stroke="currentColor" strokeWidth="1.4"/>
    ))}
    {/* Left leg */}
    <path d="M42 34 C38 72 36 126 38 188 C38 214 40 236 42 252
             L90 252 C90 236 90 214 88 188 C88 126 90 76 96 38
             C78 38 58 38 42 34 Z"
      fill={color} stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round"/>
    {/* Right leg */}
    <path d="M158 34 C162 72 164 126 162 188 C162 214 160 236 158 252
             L110 252 C110 236 112 214 112 188 C112 126 110 76 104 38
             C122 38 142 38 158 34 Z"
      fill={color} stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round"/>
    {/* Top button */}
    <circle cx="100" cy="22" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.5"/>
    {/* Fly closure */}
    <path d="M95 38 Q97 56 100 65 Q103 56 105 38"
      fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="100" cy="50" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.2"/>
    {/* Left front pocket arc */}
    <path d="M50 38 C54 60 58 76 66 84"
      fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    {/* Right front pocket arc */}
    <path d="M150 38 C146 60 142 76 134 84"
      fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    {/* Coin pocket — right side, above fly */}
    <path d="M108 38 C118 36 126 38 126 48 C122 56 112 55 108 48 Z"
      fill="none" stroke="currentColor" strokeWidth="1" opacity="0.7"/>
    {/* Rivets at pocket stress points */}
    {[[50, 38], [66, 84], [134, 84], [150, 38]].map(([x, y]) => (
      <circle key={`${x}-${y}`} cx={x} cy={y} r="1.8" fill="currentColor" opacity="0.5"/>
    ))}
    {/* Topstitching dashes on legs */}
    <line x1="62" y1="82" x2="42" y2="250" stroke="currentColor" strokeWidth="0.8"
      opacity="0.3" strokeLinecap="round" strokeDasharray="4 3"/>
    <line x1="138" y1="82" x2="158" y2="250" stroke="currentColor" strokeWidth="0.8"
      opacity="0.3" strokeLinecap="round" strokeDasharray="4 3"/>
    {/* Inseam */}
    <path d="M90 252 C92 210 96 158 100 78 C104 158 108 210 110 252"
      fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.35"/>
    {/* Hem double-stitch */}
    <path d="M42 252 L90 252 M42 248 L90 248" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M110 252 L158 252 M110 248 L158 248" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
