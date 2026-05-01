import { useNavigate } from 'react-router-dom';
import { Pencil, Trash2 } from 'lucide-react';
import type { Garment } from '../db/types';
import { GARMENT_SVG } from '../svg/registry';
import { GARMENT_LABELS } from '../utils/slotOf';
import { deleteGarment } from '../db/queries';
import { OCCASION_COLORS } from '../utils/palette';

interface Props { garment: Garment }

export const GarmentCard = ({ garment }: Props) => {
  const navigate = useNavigate();
  const GarmentSVG = GARMENT_SVG[garment.type];

  const handleDelete = async () => {
    if (confirm(`Delete ${garment.label || GARMENT_LABELS[garment.type]}?`)) {
      await deleteGarment(garment.id);
    }
  };

  return (
    <div className="relative bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden">
      <div className="p-3 flex items-center justify-center" style={{ color: '#71717a' }}>
        <div className="w-24 h-24">
          <GarmentSVG color={garment.color} />
        </div>
      </div>

      <div className="px-3 pb-3 space-y-2">
        <div className="flex items-center justify-between gap-1">
          <p className="text-xs font-semibold text-zinc-800 dark:text-zinc-100 truncate">
            {garment.label || GARMENT_LABELS[garment.type]}
          </p>
          <div
            className="w-3.5 h-3.5 rounded-full shrink-0 border border-zinc-300 dark:border-zinc-600"
            style={{ background: garment.color }}
          />
        </div>

        <div className="flex flex-wrap gap-1">
          {garment.occasions.map(o => (
            <span
              key={o}
              className="px-1.5 py-0.5 rounded-full text-[10px] font-medium text-white capitalize"
              style={{ background: OCCASION_COLORS[o] }}
            >
              {o}
            </span>
          ))}
        </div>

        <div className="flex gap-1.5 pt-1">
          <button
            onClick={() => navigate(`/edit/${garment.id}`)}
            className="flex-1 flex items-center justify-center gap-1 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-xs font-medium text-zinc-600 dark:text-zinc-400"
          >
            <Pencil className="w-3 h-3" /> Edit
          </button>
          <button
            onClick={handleDelete}
            className="flex-1 flex items-center justify-center gap-1 py-1.5 rounded-lg bg-red-50 dark:bg-red-950 text-xs font-medium text-red-600 dark:text-red-400"
          >
            <Trash2 className="w-3 h-3" /> Delete
          </button>
        </div>
      </div>
    </div>
  );
};
