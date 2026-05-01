export const Coat = ({ color }: { color: string }) => (
  <svg viewBox="0 0 200 240" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 60 C106 50 114 36 126 26 C142 24 162 40 172 62 C184 76 198 108 198 184 L156 184 C156 172 154 156 152 138 L146 92 C148 154 160 202 162 232 L100 232 Z" fill={color} stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round"/>
    <path d="M100 60 C94 50 86 36 74 26 C58 24 38 40 28 62 C16 76 2 108 2 184 L44 184 C44 172 46 156 48 138 L54 92 C52 154 40 202 38 232 L100 232 Z" fill={color} stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round"/>
    <line x1="100" y1="60" x2="100" y2="232" stroke="currentColor" strokeWidth="1"/>
    <path d="M74 26 C68 36 64 46 66 58 L100 60 C96 48 90 36 84 26 Z" fill={color} stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M126 26 C132 36 136 46 134 58 L100 60 C104 48 110 36 116 26 Z" fill={color} stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M66 58 L76 48" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M134 58 L124 48" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    {[98,122,146,170].map(y => <circle key={y} cx="100" cy={y} r="5" fill="none" stroke="currentColor" strokeWidth="1.5"/>)}
    <path d="M44 158 L90 158 L90 192 Q67 197 44 192 Z" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
    <path d="M110 158 L156 158 L156 192 Q133 197 110 192 Z" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
    <path d="M2 184 L44 184 M198 184 L156 184" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
    <path d="M3 190 L45 190 M197 190 L155 190" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
