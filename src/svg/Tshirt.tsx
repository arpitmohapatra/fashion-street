export const Tshirt = ({ color }: { color: string }) => (
  <svg viewBox="0 0 200 240" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M82 28 C72 28 57 38 46 56 C36 64 20 82 14 102 L50 110 C53 102 57 90 62 84 C60 136 46 190 44 222 L156 222 C154 190 140 136 138 84 C143 90 147 102 150 110 L186 102 C180 82 164 64 154 56 C143 38 128 28 118 28 C112 26 107 36 100 42 C93 36 88 26 82 28 Z"
      fill={color} stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round"
    />
    <path d="M82 28 C88 35 93 40 100 42 C107 40 112 35 118 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M14 102 C16 110 24 114 50 110" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M186 102 C184 110 176 114 150 110" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
