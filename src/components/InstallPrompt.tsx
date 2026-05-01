import { useState, useEffect } from 'react';
import { X, Share, PlusSquare, Download } from 'lucide-react';
import { useInstallPrompt } from '../hooks/useInstallPrompt';

const IOS_KEY = 'installPromptDismissedAt';
const IOS_COOLDOWN_MS = 14 * 24 * 60 * 60 * 1000;

export const InstallPrompt = () => {
  const { prompt, install, installed, isIOS, isStandalone } = useInstallPrompt();
  const [iosDismissed, setIosDismissed] = useState(true);

  useEffect(() => {
    if (!isIOS || isStandalone) return;
    const last = localStorage.getItem(IOS_KEY);
    if (!last || Date.now() - Number(last) > IOS_COOLDOWN_MS) {
      setIosDismissed(false);
    }
  }, [isIOS, isStandalone]);

  const dismissIOS = () => {
    localStorage.setItem(IOS_KEY, String(Date.now()));
    setIosDismissed(true);
  };

  if (installed || isStandalone) return null;

  // Android / Chrome install banner
  if (prompt) {
    return (
      <div className="fixed bottom-20 left-4 right-4 z-50 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-2xl p-4 flex items-center gap-3 shadow-xl">
        <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center shrink-0">
          <Download className="w-5 h-5 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold">Install Fashion Street</p>
          <p className="text-xs opacity-70">Add to your home screen for the best experience</p>
        </div>
        <button onClick={install} className="shrink-0 px-3 py-1.5 bg-indigo-600 text-white text-xs font-semibold rounded-lg">
          Install
        </button>
      </div>
    );
  }

  // iOS instructions modal
  if (isIOS && !iosDismissed) {
    return (
      <div className="fixed inset-0 z-50 flex items-end p-4 bg-black/40">
        <div className="w-full bg-white dark:bg-zinc-900 rounded-2xl p-5 space-y-4 shadow-2xl">
          <div className="flex items-center justify-between">
            <p className="font-semibold text-sm">Install Fashion Street</p>
            <button onClick={dismissIOS} className="w-7 h-7 flex items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800">
              <X className="w-4 h-4" />
            </button>
          </div>
          <ol className="space-y-3">
            <li className="flex items-center gap-3 text-sm">
              <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center shrink-0">
                <Share className="w-4 h-4 text-blue-600 dark:text-blue-300" />
              </div>
              Tap the <strong>Share</strong> button in Safari
            </li>
            <li className="flex items-center gap-3 text-sm">
              <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center shrink-0">
                <PlusSquare className="w-4 h-4 text-blue-600 dark:text-blue-300" />
              </div>
              Scroll down and tap <strong>Add to Home Screen</strong>
            </li>
          </ol>
          <button onClick={dismissIOS} className="w-full py-2.5 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-sm font-semibold rounded-xl">
            Got it
          </button>
        </div>
      </div>
    );
  }

  return null;
};
