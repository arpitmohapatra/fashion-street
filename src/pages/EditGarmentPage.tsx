import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { updateGarment } from '../db/queries';
import { useGarment } from '../hooks/useGarments';
import { GARMENT_LABELS, TOPS, OUTERS, BOTTOMS, slotOf } from '../utils/slotOf';
import type { GarmentType, Occasion, Weather, Fabric } from '../db/types';
import { ColorPicker } from '../components/ColorPicker';
import { GARMENT_SVG } from '../svg/registry';
import { OCCASION_COLORS } from '../utils/palette';

const RenderSVG = ({ type, color }: { type: GarmentType; color: string }) => {
  const SVG = GARMENT_SVG[type];
  return <SVG color={color} />;
};

const OCCASIONS: Occasion[] = ['casual', 'work', 'formal', 'sport', 'party', 'lounge'];
const WEATHERS: Weather[]   = ['cold', 'mild', 'warm', 'hot'];
const FABRICS: Fabric[]     = ['cotton', 'wool', 'denim', 'linen', 'synthetic', 'silk', 'fleece'];

export const EditGarmentPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const garment = useGarment(id);

  const [type, setType]         = useState<GarmentType>('tshirt');
  const [color, setColor]       = useState('#3b82f6');
  const [occasions, setOccasions] = useState<Occasion[]>(['casual']);
  const [weather, setWeather]   = useState<Weather[]>([]);
  const [fabric, setFabric]     = useState<Fabric | ''>('');
  const [label, setLabel]       = useState('');
  const [saving, setSaving]     = useState(false);

  useEffect(() => {
    if (!garment) return;
    setType(garment.type);
    setColor(garment.color);
    setOccasions(garment.occasions);
    setWeather(garment.weather ?? []);
    setFabric(garment.fabric ?? '');
    setLabel(garment.label ?? '');
  }, [garment]);

  const toggleOccasion = (o: Occasion) =>
    setOccasions(prev => prev.includes(o) ? prev.filter(x => x !== o) : [...prev, o]);
  const toggleWeather = (w: Weather) =>
    setWeather(prev => prev.includes(w) ? prev.filter(x => x !== w) : [...prev, w]);

  const handleSave = async () => {
    if (!id || occasions.length === 0) return;
    setSaving(true);
    await updateGarment(id, {
      type,
      slot: slotOf(type),
      color,
      occasions,
      weather: weather.length ? weather : undefined,
      fabric: fabric || undefined,
      label: label.trim() || undefined,
    });
    navigate(-1);
  };

  if (!garment) return <div className="flex-1 flex items-center justify-center text-sm text-zinc-500">Loading…</div>;

  const PreviewSVG = GARMENT_SVG[type];
  const allTypes: GarmentType[] = [...TOPS, ...OUTERS, ...BOTTOMS];

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="safe-top shrink-0 px-4 pt-4 pb-2">
        <h1 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">Edit Garment</h1>
      </div>

      <div className="flex-1 overflow-y-auto px-4 pb-6 space-y-6">
        <div className="flex justify-center">
          <div className="w-28 h-28" style={{ color: '#71717a' }}>
            <PreviewSVG color={color} />
          </div>
        </div>

        <section className="space-y-2">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Type</h2>
          <div className="grid grid-cols-4 gap-2">
            {allTypes.map(t => (
              <button
                key={t}
                type="button"
                onClick={() => setType(t)}
                className={`flex flex-col items-center gap-1 p-2 rounded-xl border-2 transition-colors ${
                  type === t ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-950' : 'border-zinc-200 dark:border-zinc-700'
                }`}
              >
                <div className="w-8 h-8"><RenderSVG type={t} color="#a1a1aa" /></div>
                <span className="text-[9px] font-medium text-center">{GARMENT_LABELS[t]}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="space-y-2">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Color</h2>
          <ColorPicker value={color} onChange={setColor} />
        </section>

        <section className="space-y-2">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Occasion</h2>
          <div className="flex flex-wrap gap-2">
            {OCCASIONS.map(o => (
              <button key={o} type="button" onClick={() => toggleOccasion(o)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium border capitalize transition-colors ${
                  occasions.includes(o) ? 'text-white border-transparent' : 'border-zinc-300 dark:border-zinc-600 text-zinc-600 dark:text-zinc-400'
                }`}
                style={occasions.includes(o) ? { background: OCCASION_COLORS[o] } : undefined}
              >{o}</button>
            ))}
          </div>
        </section>

        <section className="space-y-2">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Weather</h2>
          <div className="flex gap-2">
            {WEATHERS.map(w => (
              <button key={w} type="button" onClick={() => toggleWeather(w)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium border capitalize transition-colors ${
                  weather.includes(w) ? 'bg-sky-500 text-white border-transparent' : 'border-zinc-300 dark:border-zinc-600 text-zinc-600 dark:text-zinc-400'
                }`}
              >{w}</button>
            ))}
          </div>
        </section>

        <section className="space-y-2">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Fabric</h2>
          <div className="flex flex-wrap gap-2">
            {FABRICS.map(f => (
              <button key={f} type="button" onClick={() => setFabric(fabric === f ? '' : f)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium border capitalize transition-colors ${
                  fabric === f ? 'bg-amber-500 text-white border-transparent' : 'border-zinc-300 dark:border-zinc-600 text-zinc-600 dark:text-zinc-400'
                }`}
              >{f}</button>
            ))}
          </div>
        </section>

        <section className="space-y-2">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Label</h2>
          <input type="text" value={label} onChange={e => setLabel(e.target.value)}
            className="w-full h-10 px-3 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-sm placeholder:text-zinc-400 outline-none"
          />
        </section>

        <button onClick={handleSave} disabled={saving}
          className="w-full py-3.5 rounded-2xl bg-indigo-600 text-white font-semibold text-sm disabled:opacity-50"
        >
          {saving ? 'Saving…' : 'Save Changes'}
        </button>
      </div>
    </div>
  );
};
