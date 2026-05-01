export const Sweater = ({ color }: { color: string }) => (
  <svg viewBox="0 0 200 240" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M82 38 C68 40 50 56 40 74 C28 84 10 110 8 168 L46 174 C48 162 50 150 52 134 L58 88 C56 148 46 198 46 222 L154 222 C154 198 144 148 142 88 L148 134 C150 150 152 162 154 174 L192 168 C190 110 172 84 160 74 C150 56 132 40 118 38 C113 34 107 28 100 26 C93 28 87 34 82 38 Z"
      fill={color} stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round"
    />
    <path d="M82 38 C82 22 88 14 100 12 C112 14 118 22 118 38" fill={color} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M86 38 C86 26 92 18 100 16 C108 18 114 26 114 38" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    {[86,92,100,108,114].map(x => <line key={x} x1={x} y1="12" x2={x} y2="38" stroke="currentColor" strokeWidth="0.7" opacity="0.4"/>)}
    <path d="M46 222 L154 222 M46 228 L154 228" stroke="currentColor" strokeWidth="1.5"/>
    {[56,68,80,92,104,116,128,140,152].map(x => <line key={x} x1={x} y1="222" x2={x} y2="228" stroke="currentColor" strokeWidth="0.8" opacity="0.5"/>)}
    <path d="M8 168 L46 174 M9 175 L47 181" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
    <path d="M192 168 L154 174 M191 175 L153 181" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);
