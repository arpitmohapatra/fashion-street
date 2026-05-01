export const MannequinSilhouette = () => (
  <svg viewBox="0 0 200 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    {/* head */}
    <ellipse cx="100" cy="28" rx="22" ry="26" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
    {/* neck */}
    <path d="M90 52 Q100 58 110 52 L110 68 Q100 72 90 68 Z" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
    {/* shoulders */}
    <path d="M50 80 Q70 68 90 68 Q100 72 110 68 Q130 68 150 80" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
    {/* torso */}
    <path d="M50 80 L45 200 Q100 215 155 200 L150 80" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
    {/* arms */}
    <path d="M50 80 L30 185" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
    <path d="M150 80 L170 185" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
    {/* hips */}
    <path d="M45 200 Q100 220 155 200 L158 240 Q100 255 42 240 Z" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
    {/* legs */}
    <path d="M42 240 L35 390" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
    <path d="M158 240 L165 390" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
    <path d="M100 255 L100 390" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
  </svg>
);
