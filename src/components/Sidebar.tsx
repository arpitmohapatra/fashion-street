import { NavLink } from 'react-router-dom';
import { Layers, Archive, PlusCircle, BookOpen, Settings } from 'lucide-react';

const tabs = [
  { to: '/',         icon: Layers,     label: 'Outfit'   },
  { to: '/closet',   icon: Archive,    label: 'Closet'   },
  { to: '/add',      icon: PlusCircle, label: 'Add Item' },
  { to: '/outfits',  icon: BookOpen,   label: 'Saved'    },
  { to: '/settings', icon: Settings,   label: 'Settings' },
];

export const Sidebar = () => (
  <aside className="hidden md:flex flex-col w-52 shrink-0 h-full border-r border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
    <div className="px-5 pt-6 pb-5 border-b border-zinc-100 dark:border-zinc-800">
      <p className="text-sm font-bold tracking-tight text-zinc-900 dark:text-zinc-100">Fashion Street</p>
      <p className="text-xs text-zinc-400 mt-0.5">My Closet</p>
    </div>
    <nav className="flex-1 p-3 space-y-0.5 overflow-y-auto">
      {tabs.map(({ to, icon: Icon, label }) => (
        <NavLink
          key={to}
          to={to}
          end={to === '/'}
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
              isActive
                ? 'bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400'
                : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-zinc-100'
            }`
          }
        >
          <Icon className="w-4 h-4 shrink-0" />
          {label}
        </NavLink>
      ))}
    </nav>
  </aside>
);
