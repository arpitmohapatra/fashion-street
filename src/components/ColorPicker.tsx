import { SWATCHES } from '../utils/palette';

interface Props {
  value: string;
  onChange: (color: string) => void;
}

export const ColorPicker = ({ value, onChange }: Props) => (
  <div className="space-y-3">
    <div className="grid grid-cols-11 gap-1.5">
      {SWATCHES.map(s => (
        <button
          key={s}
          type="button"
          onClick={() => onChange(s)}
          className="aspect-square rounded-full border-2 transition-transform active:scale-90"
          style={{
            background: s,
            borderColor: value === s ? '#6366f1' : 'transparent',
            boxShadow: value === s ? '0 0 0 2px #6366f1' : 'inset 0 0 0 1px rgba(0,0,0,0.15)',
          }}
          aria-label={s}
        />
      ))}
    </div>
    <div className="flex items-center gap-3">
      <label className="text-xs text-zinc-500 dark:text-zinc-400 shrink-0">Custom</label>
      <input
        type="color"
        value={value}
        onChange={e => onChange(e.target.value)}
        className="h-9 w-14 cursor-pointer rounded border border-zinc-300 dark:border-zinc-600 bg-transparent"
      />
      <span className="text-xs font-mono text-zinc-600 dark:text-zinc-400">{value}</span>
    </div>
  </div>
);
