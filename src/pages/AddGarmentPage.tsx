import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { addGarment } from '../db/queries';
import { slotOf, GARMENT_LABELS, TOPS, OUTERS, BOTTOMS } from '../utils/slotOf';
import type { GarmentType, Occasion, Weather, Fabric } from '../db/types';
import { ColorPicker } from '../components/ColorPicker';
import { GARMENT_SVG } from '../svg/registry';
import { OCCASION_COLORS } from '../utils/palette';

const OCCASIONS: Occasion[] = ['casual', 'work', 'formal', 'sport', 'party', 'lounge'];
const WEATHERS: Weather[]   = ['cold', 'mild', 'warm', 'hot'];
const FABRICS: Fabric[]     = ['cotton', 'wool', 'denim', 'linen', 'synthetic', 'silk', 'fleece'];

const TypeButton = ({ type, selected, onClick }: { type: GarmentType; selected: boolean; onClick: () => void }) => {
  const SVG = GARMENT_SVG[type];
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex flex-col items-center gap-1 p-2 rounded-xl border-2 transition-colors ${
        selected
          ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-950'
          : 'border-zinc-200 dark:border-zinc-700'
      }`}
    >
      <div className="w-10 h-10" style={{ color: '#71717a' }}>
        <SVG color="#a1a1aa" />
      </div>
      <span className="text-[9px] font-medium text-center leading-tight text-zinc-600 dark:text-zinc-400">
        {GARMENT_LABELS[type]}
      </span>
    </button>
  );
};

export const AddGarmentPage = () => {
  const navigate = useNavigate();
  const [type, setType] = useState<GarmentType>('tshirt');
  const [color, setColor] = useState('#3b82f6');
  const [occasions, setOccasions] = useState<Occasion[]>(['casual']);
  const [weather, setWeather] = useState<Weather[]>([]);
  const [fabric, setFabric] = useState<Fabric | ''>('');
  const [label, setLabel] = useState('');
  const [saving, setSaving] = useState(false);

  const toggleOccasion = (o: Occasion) =>
    setOccasions(prev => prev.includes(o) ? prev.filter(x => x !== o) : [...prev, o]);
  const toggleWeather = (w: Weather) =>
    setWeather(prev => prev.includes(w) ? prev.filter(x => x !== w) : [...prev, w]);

  const handleSave = async () => {
    if (occasions.length === 0) { alert('Pick at least one occasion'); return; }
    setSaving(true);
    await addGarment({
      id: nanoid(),
      slot: slotOf(type),
      type,
      color,
      occasions,
      weather: weather.length ? weather : undefined,
      fabric: fabric || undefined,
      label: label.trim() || undefined,
      createdAt: Date.now(),
    });
    navigate(-1);
  };

  const PreviewSVG = GARMENT_SVG[type];

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="safe-top shrink-0 px-4 md:px-6 pt-4 pb-3 border-b border-zinc-100 dark:border-zinc-800/60 bg-white dark:bg-zinc-950">
        <h1 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">Add Garment</h1>
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto px-4 md:px-6 pb-6">
        <div className="max-w-2xl mx-auto pt-6 space-y-6">
        {/* preview */}
        <div className="flex justify-center">
          <div className="w-28 h-28" style={{ color: '#71717a' }}>
            <PreviewSVG color={color} />
          </div>
        </div>

        {/* type selection */}
        <section className="space-y-2">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Tops</h2>
          <div className="grid grid-cols-4 gap-2">
            {TOPS.map(t => <TypeButton key={t} type={t} selected={type === t} onClick={() => setType(t)} />)}
          </div>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 pt-1">Outer</h2>
          <div className="grid grid-cols-4 gap-2">
            {OUTERS.map(t => <TypeButton key={t} type={t} selected={type === t} onClick={() => setType(t)} />)}
          </div>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 pt-1">Bottoms</h2>
          <div className="grid grid-cols-4 gap-2">
            {BOTTOMS.map(t => <TypeButton key={t} type={t} selected={type === t} onClick={() => setType(t)} />)}
          </div>
        </section>

        {/* color */}
        <section className="space-y-2">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Color</h2>
          <ColorPicker value={color} onChange={setColor} />
        </section>

        {/* occasions */}
        <section className="space-y-2">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Occasion <span className="text-red-500">*</span></h2>
          <div className="flex flex-wrap gap-2">
            {OCCASIONS.map(o => (
              <button
                key={o}
                type="button"
                onClick={() => toggleOccasion(o)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium border capitalize transition-colors ${
                  occasions.includes(o) ? 'text-white border-transparent' : 'border-zinc-300 dark:border-zinc-600 text-zinc-600 dark:text-zinc-400'
                }`}
                style={occasions.includes(o) ? { background: OCCASION_COLORS[o] } : undefined}
              >
                {o}
              </button>
            ))}
          </div>
        </section>

        {/* weather */}
        <section className="space-y-2">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Weather <span className="text-zinc-400 font-normal normal-case">(optional)</span></h2>
          <div className="flex gap-2">
            {WEATHERS.map(w => (
              <button
                key={w}
                type="button"
                onClick={() => toggleWeather(w)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium border capitalize transition-colors ${
                  weather.includes(w)
                    ? 'bg-sky-500 text-white border-transparent'
                    : 'border-zinc-300 dark:border-zinc-600 text-zinc-600 dark:text-zinc-400'
                }`}
              >
                {w}
              </button>
            ))}
          </div>
        </section>

        {/* fabric */}
        <section className="space-y-2">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Fabric <span className="text-zinc-400 font-normal normal-case">(optional)</span></h2>
          <div className="flex flex-wrap gap-2">
            {FABRICS.map(f => (
              <button
                key={f}
                type="button"
                onClick={() => setFabric(fabric === f ? '' : f)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium border capitalize transition-colors ${
                  fabric === f
                    ? 'bg-amber-500 text-white border-transparent'
                    : 'border-zinc-300 dark:border-zinc-600 text-zinc-600 dark:text-zinc-400'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </section>

        {/* label */}
        <section className="space-y-2">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Label <span className="text-zinc-400 font-normal normal-case">(optional)</span></h2>
          <input
            type="text"
            placeholder="e.g. Navy Oxford"
            value={label}
            onChange={e => setLabel(e.target.value)}
            className="w-full h-10 px-3 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-sm placeholder:text-zinc-400 outline-none"
          />
        </section>

        {/* save */}
        <button
          onClick={handleSave}
          disabled={saving}
          className="w-full py-3.5 rounded-2xl bg-indigo-600 text-white font-semibold text-sm disabled:opacity-50 active:scale-95 transition-transform"
        >
          {saving ? 'Saving…' : 'Add to Closet'}
        </button>
        </div>
      </div>
    </div>
  );
};
