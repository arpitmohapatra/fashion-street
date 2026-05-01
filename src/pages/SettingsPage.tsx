import { useRef } from 'react';
import { Moon, Sun, Monitor, Download, Upload, Trash2, Smartphone } from 'lucide-react';
import { useDarkMode } from '../hooks/useDarkMode';
import { useInstallPrompt } from '../hooks/useInstallPrompt';
import { exportData, importData, clearAllData } from '../db/queries';

export const SettingsPage = () => {
  const { theme, setTheme } = useDarkMode();
  const { isIOS, isStandalone } = useInstallPrompt();
  const importRef = useRef<HTMLInputElement>(null);

  const handleExport = async () => {
    const data = await exportData();
    const blob = new Blob([data], { type: 'application/json' });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href     = url;
    a.download = `closet-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const text = await file.text();
      await importData(text);
      alert('Import successful!');
    } catch {
      alert('Import failed — invalid file.');
    }
    e.target.value = '';
  };

  const handleWipe = async () => {
    if (!confirm('This will delete all garments and saved outfits. Continue?')) return;
    await clearAllData();
    alert('All data cleared.');
  };

  const themes = [
    { value: 'light', icon: Sun,     label: 'Light'  },
    { value: 'dark',  icon: Moon,    label: 'Dark'   },
    { value: 'system',icon: Monitor, label: 'System' },
  ] as const;

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="safe-top shrink-0 px-4 md:px-6 pt-4 pb-3 border-b border-zinc-100 dark:border-zinc-800/60 bg-white dark:bg-zinc-950">
        <h1 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">Settings</h1>
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto px-4 md:px-6 py-6">
        {/* Constrain content width for readability on wide screens */}
        <div className="max-w-lg mx-auto space-y-8">

          {/* Theme */}
          <section className="space-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Appearance</h2>
            <div className="flex gap-2">
              {themes.map(({ value, icon: Icon, label }) => (
                <button
                  key={value}
                  onClick={() => setTheme(value)}
                  className={`flex-1 flex flex-col items-center gap-1.5 py-3 rounded-xl border-2 text-xs font-medium transition-colors ${
                    theme === value
                      ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400'
                      : 'border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {label}
                </button>
              ))}
            </div>
          </section>

          {/* Backup */}
          <section className="space-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Backup & Restore</h2>
            <div className="space-y-2">
              <button
                onClick={handleExport}
                className="w-full flex items-center gap-3 p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800/80 transition-colors"
              >
                <Download className="w-5 h-5 text-zinc-500" />
                <span>Export closet JSON</span>
              </button>
              <button
                onClick={() => importRef.current?.click()}
                className="w-full flex items-center gap-3 p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800/80 transition-colors"
              >
                <Upload className="w-5 h-5 text-zinc-500" />
                <span>Import from JSON</span>
              </button>
              <input ref={importRef} type="file" accept=".json" onChange={handleImport} className="hidden" />
            </div>
          </section>

          {/* iOS install help */}
          {isIOS && !isStandalone && (
            <section className="space-y-3">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Install</h2>
              <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 space-y-2">
                <div className="flex items-center gap-2 text-sm font-semibold text-blue-700 dark:text-blue-300">
                  <Smartphone className="w-4 h-4" /> Add to Home Screen
                </div>
                <p className="text-xs text-blue-600 dark:text-blue-400">
                  In Safari, tap the Share icon → scroll down → tap <strong>Add to Home Screen</strong>.
                </p>
              </div>
            </section>
          )}

          {/* Danger zone */}
          <section className="space-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-red-500">Danger Zone</h2>
            <button
              onClick={handleWipe}
              className="w-full flex items-center gap-3 p-4 rounded-2xl bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/60 transition-colors"
            >
              <Trash2 className="w-5 h-5" />
              <span>Wipe all data</span>
            </button>
          </section>

          <p className="text-center text-[10px] text-zinc-400">Fashion Street · All data stored locally on device</p>
        </div>
      </div>
    </div>
  );
};
