import { ShirtIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Props {
  slot?: string;
  message?: string;
}

export const EmptyState = ({ slot, message }: Props) => (
  <div className="flex flex-col items-center justify-center gap-3 py-10 text-center px-6">
    <div className="w-16 h-16 rounded-2xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
      <ShirtIcon className="w-8 h-8 text-zinc-400" />
    </div>
    <p className="text-sm text-zinc-500 dark:text-zinc-400">
      {message ?? `No ${slot ?? 'items'} yet`}
    </p>
    <Link
      to="/add"
      className="mt-1 text-sm font-medium text-indigo-600 dark:text-indigo-400"
    >
      Add one
    </Link>
  </div>
);
