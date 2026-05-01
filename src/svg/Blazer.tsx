export const Blazer = ({ color }: { color: string }) => (
  <svg viewBox="0 0 200 240" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 52 C104 44 112 34 122 26 C136 26 154 42 164 62 C174 74 192 102 194 174 L154 176 C154 164 152 150 150 134 L144 90 C146 150 156 198 158 224 L100 224 Z" fill={color} stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round"/>
    <path d="M100 52 C96 44 88 34 78 26 C64 26 46 42 36 62 C26 74 8 102 6 174 L46 176 C46 164 48 150 50 134 L56 90 C54 150 44 198 42 224 L100 224 Z" fill={color} stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round"/>
    <line x1="100" y1="52" x2="100" y2="224" stroke="currentColor" strokeWidth="1"/>
    <path d="M78 26 C76 32 74 40 76 50 L100 52 C98 42 92 34 88 26 Z" fill={color} stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M122 26 C124 32 126 40 124 50 L100 52 C102 42 108 34 112 26 Z" fill={color} stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M76 50 L84 42" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M124 50 L116 42" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    <circle cx="100" cy="110" r="4.5" fill="none" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="100" cy="132" r="4.5" fill="none" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="48" y1="150" x2="90" y2="150" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M110 142 L152 142 L152 154 Q131 158 110 154 Z" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
    <path d="M60 90 L84 90 L82 108 L60 108 Z" fill="none" stroke="currentColor" strokeWidth="1.2"/>
    {[157,165,173].map(y => <circle key={y} cx="50" cy={y} r="2" fill="none" stroke="currentColor" strokeWidth="1"/>)}
    {[157,165,173].map(y => <circle key={y} cx="150" cy={y} r="2" fill="none" stroke="currentColor" strokeWidth="1"/>)}
    <path d="M6 174 L46 176" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M194 174 L154 176" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);
