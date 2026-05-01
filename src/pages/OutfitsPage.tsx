import { useNavigate } from 'react-router-dom';
import { Trash2 } from 'lucide-react';
import { useAllOutfits, useGarment } from '../hooks/useGarments';
import { deleteOutfit } from '../db/queries';
import { useOutfitStore } from '../store/outfit';
import { GARMENT_SVG } from '../svg/registry';
import { EmptyState } from '../components/EmptyState';
import type { Outfit } from '../db/types';
import { OCCASION_COLORS } from '../utils/palette';

const OutfitRow = ({ outfit }: { outfit: Outfit }) => {
  const navigate = useNavigate();
  const { loadOutfit } = useOutfitStore();
  const top    = useGarment(outfit.topId);
  const outer  = useGarment(outfit.outerId);
  const bottom = useGarment(outfit.bottomId);

  const loadAndNavigate = () => {
    loadOutfit(outfit.topId, outfit.outerId, outfit.bottomId);
    navigate('/');
  };

  const items = [
    top    ? { g: top,    label: 'Top'    } : null,
    outer  ? { g: outer,  label: 'Outer'  } : null,
    bottom ? { g: bottom, label: 'Bottom' } : null,
  ].filter(Boolean) as { g: NonNullable<typeof top>; label: string }[];

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-3">
      <div className="flex items-center gap-3">
        {items.map(({ g }) => {
          const SVG = GARMENT_SVG[g.type];
          return (
            <div key={g.id} className="w-12 h-12 shrink-0" style={{ color: '#71717a' }}>
              <SVG color={g.color} />
            </div>
          );
        })}
        {items.length === 0 && <p className="text-xs text-zinc-400">Empty outfit</p>}
      </div>

      {outfit.occasion && (
        <span
          className="mt-2 inline-block px-2 py-0.5 rounded-full text-[10px] font-medium text-white capitalize"
          style={{ background: OCCASION_COLORS[outfit.occasion] }}
        >
          {outfit.occasion}
        </span>
      )}

      <p className="text-[10px] text-zinc-400 mt-1">
        {new Date(outfit.createdAt).toLocaleDateString()}
      </p>

      <div className="flex gap-2 mt-3">
        <button
          onClick={loadAndNavigate}
          className="flex-1 py-2 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 text-xs font-semibold"
        >
          Wear this
        </button>
        <button
          onClick={() => deleteOutfit(outfit.id)}
          className="p-2 rounded-xl bg-red-50 dark:bg-red-950 text-red-500"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export const OutfitsPage = () => {
  const outfits = useAllOutfits() ?? [];

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="safe-top shrink-0 px-4 md:px-6 pt-4 pb-3 border-b border-zinc-100 dark:border-zinc-800/60 bg-white dark:bg-zinc-950">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">Saved Looks</h1>
          {outfits.length > 0 && (
            <span className="text-xs text-zinc-400">{outfits.length} saved</span>
          )}
        </div>
      </div>
      <div className="flex-1 min-h-0 overflow-y-auto px-4 md:px-6 py-4">
        {outfits.length === 0 ? (
          <EmptyState message="No saved looks yet. Assemble an outfit and tap Save." />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {outfits.map(o => <OutfitRow key={o.id} outfit={o} />)}
          </div>
        )}
      </div>
    </div>
  );
};
