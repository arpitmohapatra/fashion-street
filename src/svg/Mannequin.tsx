// Visible brown store mannequin — viewBox "0 -62 200 522"
// Head in -62..0 zone, body in 0..460.
export const Mannequin = () => (
  <svg
    viewBox="0 -62 200 522"
    className="w-full h-full"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Head */}
    <ellipse cx="100" cy="-31" rx="22" ry="31" fill="#8B5E3C"/>

    {/* Neck */}
    <path d="M91 -2 C90 6 90 14 91 20 Q96 25 100 26 Q104 25 109 20 C110 14 110 6 109 -2 Q104 -6 100 -6 Q96 -6 91 -2 Z" fill="#8B5E3C"/>

    {/* Body: torso + arms + legs */}
    <path
      d="M 90 20
C 86 28 74 42 58 54
C 44 62 24 80 22 108
L 22 152
C 22 164 28 170 40 168
L 46 166
C 46 184 44 200 44 220
C 44 234 42 248 40 264
L 36 456
Q 58 463 84 459
L 94 272
L 106 272
L 116 459
Q 142 463 164 456
L 160 264
C 158 248 156 234 156 220
C 156 200 154 184 154 166
L 160 168
C 172 170 178 164 178 152
L 178 108
C 178 80 156 62 142 54
C 126 42 114 28 110 20
C 106 16 103 14 100 14
C 97 14 94 16 90 20
Z"
      fill="#8B5E3C"
    />

    {/* Chest highlight */}
    <path d="M44 70 C60 64 140 64 156 70 L154 166 C140 170 60 170 46 166 Z" fill="rgba(255,210,175,0.1)"/>

    {/* Knee dimples */}
    <ellipse cx="65" cy="348" rx="10" ry="5" fill="rgba(0,0,0,0.07)"/>
    <ellipse cx="135" cy="348" rx="10" ry="5" fill="rgba(0,0,0,0.07)"/>
  </svg>
);
