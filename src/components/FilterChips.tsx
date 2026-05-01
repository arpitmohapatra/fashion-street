import type { Occasion } from '../db/types';
import { OCCASION_COLORS } from '../utils/palette';

const OCCASIONS: Occasion[] = ['casual', 'work', 'formal', 'sport', 'party', 'lounge'];

interface Props {
  value: Occasion | null;
  onChange: (o: Occasion | null) => void;
}

export const FilterChips = ({ value, onChange }: Props) => (
  <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide px-4">
    <button
      onClick={() => onChange(null)}
      className={`shrink-0 px-3 py-1 rounded-full text-xs font-medium border transition-colors ${
        value === null
          ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 border-transparent'
          : 'border-zinc-300 dark:border-zinc-600 text-zinc-600 dark:text-zinc-400'
      }`}
    >
      All
    </button>
    {OCCASIONS.map(o => (
      <button
        key={o}
        onClick={() => onChange(value === o ? null : o)}
        className={`shrink-0 px-3 py-1 rounded-full text-xs font-medium border transition-colors capitalize ${
          value === o
            ? 'text-white border-transparent'
            : 'border-zinc-300 dark:border-zinc-600 text-zinc-600 dark:text-zinc-400'
        }`}
        style={value === o ? { background: OCCASION_COLORS[o] } : undefined}
      >
        {o}
      </button>
    ))}
  </div>
);
