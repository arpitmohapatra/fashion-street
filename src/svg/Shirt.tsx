export const Shirt = ({ color }: { color: string }) => (
  <svg viewBox="0 0 200 240" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    {/* Long-sleeve body */}
    <path
      d="M 80 22 C 62 22 44 38 38 58 C 28 70 8 96 6 164
         L 46 170 C 48 156 50 142 52 128 L 58 84
         C 56 140 44 190 44 222 L 156 222
         C 156 190 144 140 142 84 L 148 128
         C 150 142 152 156 154 170 L 194 164
         C 192 96 172 70 162 58 C 156 38 138 22 120 22
         C 114 22 108 24 100 26
         C 92 24 86 22 80 22 Z"
      fill={color} stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round"
    />
    {/* Left collar tip — prominent spread collar */}
    <path d="M 88 22 C 80 28 70 40 66 52 L 100 50 L 88 22 Z"
      fill={color} stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    {/* Right collar tip — mirror */}
    <path d="M 112 22 C 120 28 130 40 134 52 L 100 50 L 112 22 Z"
      fill={color} stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    {/* Button placket */}
    <line x1="100" y1="50" x2="100" y2="222" stroke="currentColor" strokeWidth="1"/>
    {/* Buttons */}
    {[66, 90, 114, 138, 162, 186].map(y => (
      <circle key={y} cx="100" cy={y} r="2.5" fill="none" stroke="currentColor" strokeWidth="1.2"/>
    ))}
    {/* Sleeve cuffs */}
    <path d="M 6 164 L 46 170" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
    <path d="M 194 164 L 154 170" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
    {/* Cuff buttons */}
    <circle cx="26" cy="167" r="2" fill="none" stroke="currentColor" strokeWidth="1.2"/>
    <circle cx="174" cy="167" r="2" fill="none" stroke="currentColor" strokeWidth="1.2"/>
  </svg>
);
