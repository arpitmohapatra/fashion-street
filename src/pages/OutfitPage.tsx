import { useState, useEffect } from 'react';
import { Shuffle, Save, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, useMotionValue, animate } from 'framer-motion';
import { nanoid } from 'nanoid';
import { useOutfitStore } from '../store/outfit';
import { useGarmentsBySlot } from '../hooks/useGarments';
import { FilterChips } from '../components/FilterChips';
import { addOutfit } from '../db/queries';
import { GARMENT_SVG } from '../svg/registry';
import { Mannequin } from '../svg/Mannequin';
import { GARMENT_LABELS } from '../utils/slotOf';
import type { Garment, GarmentType, Occasion } from '../db/types';

// Resolves dynamic component safely
const GarmentSVG = ({ type, color }: { type: GarmentType; color: string }) => {
  const SVG = GARMENT_SVG[type];
  return <SVG color={color} />;
};

// Outfit coordinate constants
// Top SVG:    viewBox 200×240, rendered at w=160px → h=192px
// Bottom SVG: viewBox 200×260, rendered at w=160px → h=208px
// Mannequin:  viewBox "0 -62 200 522" → fills 160px wide × 418px tall
const W = 160;
const HEAD_H = 50;          // px, extra space above outfit for mannequin head
const TOP_H = 192;          // 160 * 240/200
const BOT_H = 208;          // 160 * 260/200
const BOT_TOP = HEAD_H + 160;  // 210px = head offset + (top height − overlap)
const TOTAL_H = HEAD_H + TOP_H + (BOT_H - 32);  // 418px

interface SlotControlProps {
  items: Garment[];
  index: number;
  onNext: () => void;
  onPrev: () => void;
  allowNone?: boolean;
}

const SlotControl = ({ items, index, onNext, onPrev, allowNone }: SlotControlProps) => {
  const x = useMotionValue(0);
  const effectiveItems: (Garment | null)[] = allowNone ? [null, ...items] : items;
  const current = effectiveItems[index] ?? null;

  const handleDragEnd = (_: unknown, info: { offset: { x: number }; velocity: { x: number } }) => {
    if (info.offset.x < -50 || info.velocity.x < -250) onNext();
    else if (info.offset.x > 50 || info.velocity.x > 250) onPrev();
    animate(x, 0, { type: 'spring', stiffness: 500, damping: 35 });
  };

  const isEmpty = !allowNone && items.length === 0;

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={onPrev}
        className="shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 active:scale-90 transition-transform"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.25}
        style={{ x }}
        onDragEnd={handleDragEnd}
        className="flex-1 cursor-grab active:cursor-grabbing touch-pan-y"
      >
        <div className="flex items-center gap-3 py-1">
          <div
            className="w-10 h-10 shrink-0 rounded-xl border border-zinc-200 dark:border-zinc-700 flex items-center justify-center p-1 bg-zinc-50 dark:bg-zinc-900"
            style={{ color: '#71717a' }}
          >
            {isEmpty ? (
              <span className="text-[9px] text-zinc-400 text-center leading-tight">No items</span>
            ) : current === null ? (
              <span className="text-base leading-none text-zinc-400">—</span>
            ) : (
              <GarmentSVG type={current.type} color={current.color} />
            )}
          </div>

          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-zinc-800 dark:text-zinc-100 truncate leading-tight">
              {isEmpty ? 'Add items first'
                : current === null ? 'No outer layer'
                : (current.label || GARMENT_LABELS[current.type])}
            </p>
            {effectiveItems.length > 1 && (
              <div className="flex gap-1 mt-1">
                {effectiveItems.slice(0, 10).map((_, i) => (
                  <div
                    key={i}
                    className={`rounded-full transition-all duration-200 ${
                      i === index ? 'w-3 h-1.5 bg-indigo-500' : 'w-1.5 h-1.5 bg-zinc-300 dark:bg-zinc-600'
                    }`}
                  />
                ))}
                {effectiveItems.length > 10 && (
                  <span className="text-[9px] text-zinc-400 self-center">+{effectiveItems.length - 10}</span>
                )}
              </div>
            )}
          </div>

          {current && (
            <div
              className="w-4 h-4 shrink-0 rounded-full border border-zinc-300 dark:border-zinc-600"
              style={{ background: current.color }}
            />
          )}
        </div>
      </motion.div>

      <button
        onClick={onNext}
        className="shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 active:scale-90 transition-transform"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
};

export const OutfitPage = () => {
  const [upperTab, setUpperTab] = useState<'top' | 'outer'>('top');
  const [saved, setSaved] = useState(false);

  const {
    occasionFilter, setOccasionFilter,
    topIdx, outerIdx, bottomIdx,
    nextTop, prevTop, nextOuter, prevOuter, nextBottom, prevBottom,
    tops, outers, bottoms,
    setTops, setOuters, setBottoms,
    shuffle,
  } = useOutfitStore();

  const liveTops    = useGarmentsBySlot('top',    occasionFilter);
  const liveOuters  = useGarmentsBySlot('outer',  occasionFilter);
  const liveBottoms = useGarmentsBySlot('bottom', occasionFilter);

  useEffect(() => { if (liveTops)    setTops(liveTops);    }, [liveTops]);
  useEffect(() => { if (liveOuters)  setOuters(liveOuters);  }, [liveOuters]);
  useEffect(() => { if (liveBottoms) setBottoms(liveBottoms); }, [liveBottoms]);

  const currentTop    = tops[topIdx] ?? null;
  const currentOuter  = outerIdx > 0 ? (outers[outerIdx - 1] ?? null) : null;
  const currentBottom = bottoms[bottomIdx] ?? null;

  const saveOutfit = async () => {
    if (!currentTop && !currentBottom) return;
    await addOutfit({
      id: nanoid(),
      topId:    currentTop?.id,
      outerId:  currentOuter?.id,
      bottomId: currentBottom?.id,
      occasion: occasionFilter ?? undefined,
      createdAt: Date.now(),
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 1500);
  };

  return (
    <div className="flex flex-col h-full overflow-hidden">
      {/* Occasion filter */}
      <div className="safe-top pt-3 pb-2 shrink-0">
        <FilterChips
          value={occasionFilter}
          onChange={(o: Occasion | null) => setOccasionFilter(o)}
        />
      </div>

      {/* ── Outfit canvas: mannequin + garments ── */}
      <div className="flex-1 flex items-center justify-center overflow-hidden py-2">
        <div className="relative shrink-0" style={{ width: W, height: TOTAL_H }}>
          {/* Mannequin */}
          <div className="absolute inset-0 z-0">
            <Mannequin />
          </div>
          {/* Top garment */}
          {currentTop && (
            <div className="absolute z-10" style={{ top: HEAD_H, left: 0, width: W, height: TOP_H, color: '#52525b' }}>
              <GarmentSVG type={currentTop.type} color={currentTop.color} />
            </div>
          )}
          {/* Outer */}
          {currentOuter && (
            <div className="absolute z-20" style={{ top: HEAD_H, left: 0, width: W, height: TOP_H, color: '#52525b' }}>
              <GarmentSVG type={currentOuter.type} color={currentOuter.color} />
            </div>
          )}
          {/* Bottom */}
          {currentBottom && (
            <div className="absolute z-10" style={{ top: BOT_TOP, left: 0, width: W, height: BOT_H, color: '#52525b' }}>
              <GarmentSVG type={currentBottom.type} color={currentBottom.color} />
            </div>
          )}
        </div>
      </div>

      {/* ── Controls ── */}
      <div className="shrink-0 px-4 pb-2 space-y-3">
        {/* Upper body: Top | Outer tabs */}
        <div>
          <div className="flex p-1 bg-zinc-100 dark:bg-zinc-800 rounded-xl gap-1 mb-2">
            <button
              onClick={() => setUpperTab('top')}
              className={`flex-1 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                upperTab === 'top'
                  ? 'bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 shadow-sm'
                  : 'text-zinc-500 dark:text-zinc-400'
              }`}
            >
              Top
            </button>
            <button
              onClick={() => setUpperTab('outer')}
              className={`flex-1 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                upperTab === 'outer'
                  ? 'bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 shadow-sm'
                  : 'text-zinc-500 dark:text-zinc-400'
              }`}
            >
              {currentOuter
                ? `Outer · ${currentOuter.label || GARMENT_LABELS[currentOuter.type]}`
                : 'Outer'}
            </button>
          </div>

          {upperTab === 'top' ? (
            <SlotControl items={tops} index={topIdx} onNext={nextTop} onPrev={prevTop} />
          ) : (
            <SlotControl items={outers} index={outerIdx} onNext={nextOuter} onPrev={prevOuter} allowNone />
          )}
        </div>

        <div className="border-t border-zinc-200 dark:border-zinc-800" />

        {/* Bottom */}
        <SlotControl items={bottoms} index={bottomIdx} onNext={nextBottom} onPrev={prevBottom} />
      </div>

      {/* ── Actions ── */}
      <div className="shrink-0 px-4 pb-4 pt-2 flex gap-3">
        <button
          onClick={shuffle}
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl bg-zinc-100 dark:bg-zinc-800 text-sm font-semibold text-zinc-700 dark:text-zinc-300 active:scale-95 transition-transform"
        >
          <Shuffle className="w-4 h-4" /> Shuffle
        </button>
        <button
          onClick={saveOutfit}
          disabled={!currentTop && !currentBottom}
          className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl text-white text-sm font-semibold disabled:opacity-40 active:scale-95 transition-all ${
            saved ? 'bg-green-600' : 'bg-indigo-600'
          }`}
        >
          <Save className="w-4 h-4" />
          {saved ? 'Saved!' : 'Save Look'}
        </button>
      </div>
    </div>
  );
};
