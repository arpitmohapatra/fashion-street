export const Skirt = ({ color }: { color: string }) => (
  <svg viewBox="0 0 200 260" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    {/* Waistband */}
    <path
      d="M58 8 C72 12 128 12 142 8 L144 30 C128 34 72 34 56 30 Z"
      fill={color}
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path d="M56 23 C72 26 128 26 144 23" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.6"/>
    {/* A-line skirt body */}
    <path
      d="M56 30 C42 60 28 110 18 180 C14 210 12 235 14 252 L186 252 C188 235 186 210 182 180 C172 110 158 60 144 30 C128 34 72 34 56 30 Z"
      fill={color}
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
      strokeLinecap="round"
    />
    {/* Side zip (left side) */}
    <line x1="56" y1="8" x2="56" y2="90" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    <rect x="52" y="34" width="8" height="5" rx="1" fill="none" stroke="currentColor" strokeWidth="1"/>
    {/* Flare seam lines — fabric panels */}
    <path d="M100 34 C98 100 96 170 94 252" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.3" strokeLinecap="round"/>
    <path d="M68 34 C58 110 46 180 32 252" fill="none" stroke="currentColor" strokeWidth="0.7" opacity="0.25" strokeLinecap="round"/>
    <path d="M132 34 C142 110 154 180 168 252" fill="none" stroke="currentColor" strokeWidth="0.7" opacity="0.25" strokeLinecap="round"/>
    {/* Hem */}
    <path d="M14 252 C80 258 120 258 186 252" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    {/* Subtle hem fold */}
    <path d="M15 246 C80 252 120 252 185 246" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
    {/* Belt loop at center back (visible if waistband) */}
    <rect x="97" y="6" width="6" height="14" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1"/>
  </svg>
);
