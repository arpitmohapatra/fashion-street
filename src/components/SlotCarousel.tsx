import { useRef } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import type { Garment } from '../db/types';
import { GARMENT_SVG } from '../svg/registry';
import { GARMENT_LABELS } from '../utils/slotOf';

interface Props {
  items: Garment[];
  index: number;
  onNext: () => void;
  onPrev: () => void;
  allowNone?: boolean; // outer slot: index 0 = "no outer"
  label: string;
}

export const SlotCarousel = ({ items, index, onNext, onPrev, allowNone, label }: Props) => {
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-120, 0, 120], [0.4, 1, 0.4]);
  const constraintsRef = useRef(null);

  const effectiveItems = allowNone ? [null, ...items] : items;
  const current = effectiveItems[index];
  const isEmpty = !allowNone && items.length === 0;

  const handleDragEnd = (_: unknown, info: { offset: { x: number }; velocity: { x: number } }) => {
    const threshold = 60;
    const vel = info.velocity.x;
    const off = info.offset.x;

    if (off < -threshold || vel < -300) {
      onNext();
    } else if (off > threshold || vel > 300) {
      onPrev();
    }
    animate(x, 0, { type: 'spring', stiffness: 400, damping: 30 });
  };

  const GarmentComponent = current ? GARMENT_SVG[current.type] : null;

  return (
    <div className="relative flex flex-col items-center select-none" ref={constraintsRef}>
      <span className="text-[10px] font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-1">
        {label}
      </span>

      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.3}
        style={{ x, opacity }}
        onDragEnd={handleDragEnd}
        className="cursor-grab active:cursor-grabbing touch-pan-y"
      >
        <div className="w-44 h-44 flex items-center justify-center">
          {isEmpty ? (
            <div className="w-full h-full flex items-center justify-center rounded-2xl border-2 border-dashed border-zinc-300 dark:border-zinc-700">
              <span className="text-xs text-zinc-400">Empty</span>
            </div>
          ) : current === null ? (
            <div className="w-full h-full flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-zinc-300 dark:border-zinc-700 gap-2">
              <span className="text-2xl">✕</span>
              <span className="text-xs text-zinc-400">No outer layer</span>
            </div>
          ) : (
            <div className="w-full h-full drop-shadow-sm" style={{ color: '#3f3f46' }}>
              {GarmentComponent && <GarmentComponent color={current.color} />}
            </div>
          )}
        </div>
      </motion.div>

      {current && current !== null && (
        <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-1 font-medium">
          {current.label || GARMENT_LABELS[current.type]}
          <span
            className="inline-block w-2.5 h-2.5 rounded-full ml-1.5 align-middle border border-zinc-300 dark:border-zinc-600"
            style={{ background: current.color }}
          />
        </p>
      )}

      {effectiveItems.length > 1 && (
        <div className="flex gap-1 mt-1.5">
          {effectiveItems.map((_, i) => (
            <div
              key={i}
              className={`rounded-full transition-all ${
                i === index
                  ? 'w-3 h-1.5 bg-indigo-500'
                  : 'w-1.5 h-1.5 bg-zinc-300 dark:bg-zinc-600'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
