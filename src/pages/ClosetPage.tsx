import { useState } from 'react';
import { useAllGarments } from '../hooks/useGarments';
import { GarmentCard } from '../components/GarmentCard';
import { EmptyState } from '../components/EmptyState';
import type { Occasion, Slot } from '../db/types';
import { OCCASION_COLORS } from '../utils/palette';

const OCCASIONS: Occasion[] = ['casual', 'work', 'formal', 'sport', 'party', 'lounge'];
const SLOTS: Slot[] = ['top', 'outer', 'bottom'];

export const ClosetPage = () => {
  const garments = useAllGarments() ?? [];
  const [slotFilter, setSlotFilter] = useState<Slot | null>(null);
  const [occasionFilter, setOccasionFilter] = useState<Occasion | null>(null);
  const [search, setSearch] = useState('');

  const filtered = garments.filter(g => {
    if (slotFilter && g.slot !== slotFilter) return false;
    if (occasionFilter && !g.occasions.includes(occasionFilter)) return false;
    if (search && !(g.label ?? g.type).toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="flex flex-col h-full overflow-hidden">
      {/* Header + filters */}
      <div className="safe-top shrink-0 px-4 md:px-6 pt-4 pb-3 space-y-3 border-b border-zinc-100 dark:border-zinc-800/60 bg-white dark:bg-zinc-950">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">My Closet</h1>
          <span className="text-xs text-zinc-400">{garments.length} items</span>
        </div>
        <input
          type="search"
          placeholder="Search..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full h-9 px-3 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-sm placeholder:text-zinc-400 outline-none"
        />
        {/* Slot filter */}
        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          {([null, ...SLOTS] as (Slot | null)[]).map(s => (
            <button
              key={s ?? 'all'}
              onClick={() => setSlotFilter(s)}
              className={`shrink-0 px-3 py-1 rounded-full text-xs font-medium border capitalize transition-colors ${
                slotFilter === s
                  ? 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 border-transparent'
                  : 'border-zinc-300 dark:border-zinc-600 text-zinc-600 dark:text-zinc-400'
              }`}
            >
              {s ?? 'All'}
            </button>
          ))}
        </div>
        {/* Occasion filter */}
        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          {([null, ...OCCASIONS] as (Occasion | null)[]).map(o => (
            <button
              key={o ?? 'all'}
              onClick={() => setOccasionFilter(o)}
              className={`shrink-0 px-3 py-1 rounded-full text-xs font-medium border capitalize transition-colors ${
                occasionFilter === o
                  ? o ? 'text-white border-transparent' : 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 border-transparent'
                  : 'border-zinc-300 dark:border-zinc-600 text-zinc-600 dark:text-zinc-400'
              }`}
              style={occasionFilter === o && o ? { background: OCCASION_COLORS[o] } : undefined}
            >
              {o ?? 'All'}
            </button>
          ))}
        </div>
      </div>

      {/* Scrollable grid */}
      <div className="flex-1 min-h-0 overflow-y-auto px-4 md:px-6 py-4">
        {filtered.length === 0 ? (
          <EmptyState message={garments.length === 0 ? 'Your closet is empty' : 'No items match filters'} />
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            {filtered.map(g => <GarmentCard key={g.id} garment={g} />)}
          </div>
        )}
      </div>
    </div>
  );
};
