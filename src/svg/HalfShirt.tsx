export const HalfShirt = ({ color }: { color: string }) => (
  <svg viewBox="0 0 200 240" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    {/* Short-sleeve button-down body */}
    <path
      d="M 80 22 C 62 22 44 36 38 58 C 28 70 10 96 8 108
         L 48 116 C 50 104 53 92 56 82
         L 58 88 C 56 136 44 188 44 222
         L 156 222 C 156 188 144 136 142 88
         L 144 82 C 147 92 150 104 152 116
         L 192 108 C 190 96 172 70 162 58
         C 156 36 138 22 120 22
         C 114 22 108 24 100 26
         C 92 24 86 22 80 22 Z"
      fill={color} stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round"
    />
    {/* Left collar tip — spread collar */}
    <path d="M 88 22 C 82 28 72 38 68 50 L 100 48 L 88 22 Z"
      fill={color} stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    {/* Right collar tip — mirror */}
    <path d="M 112 22 C 118 28 128 38 132 50 L 100 48 L 112 22 Z"
      fill={color} stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    {/* Button placket */}
    <line x1="100" y1="48" x2="100" y2="222" stroke="currentColor" strokeWidth="1"/>
    {/* Buttons */}
    {[64, 90, 116, 142, 168].map(y => (
      <circle key={y} cx="100" cy={y} r="2.5" fill="none" stroke="currentColor" strokeWidth="1.2"/>
    ))}
    {/* Sleeve hems */}
    <path d="M 8 108 C 10 118 24 122 48 116"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M 192 108 C 190 118 176 122 152 116"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
