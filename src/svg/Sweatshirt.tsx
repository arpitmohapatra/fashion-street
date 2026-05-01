export const Sweatshirt = ({ color }: { color: string }) => (
  <svg viewBox="0 0 200 240" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M80 26 C66 26 48 42 38 60 C26 72 8 96 6 164 L44 170 C46 158 48 146 50 130 L56 86 C54 144 44 196 44 218 L156 218 C156 196 146 144 144 86 L150 130 C152 146 154 158 156 170 L194 164 C192 96 174 72 162 60 C152 42 134 26 120 26 C112 24 108 34 100 40 C92 34 88 24 80 26 Z"
      fill={color} stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round"
    />
    <path d="M80 26 C86 34 93 40 100 40 C107 40 114 34 120 26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M44 218 L156 218 M44 224 L156 224" stroke="currentColor" strokeWidth="1.5"/>
    {[56,68,80,92,104,116,128,140,152].map(x => <line key={x} x1={x} y1="218" x2={x} y2="224" stroke="currentColor" strokeWidth="0.8" opacity="0.5"/>)}
    <path d="M6 164 L44 170 M7 170 L45 176" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M194 164 L156 170 M193 170 L155 176" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
