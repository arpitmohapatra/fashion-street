import { NavLink } from 'react-router-dom';
import { Layers, Archive, PlusCircle, BookOpen, Settings } from 'lucide-react';

const tabs = [
  { to: '/',        icon: Layers,     label: 'Outfit'  },
  { to: '/closet',  icon: Archive,    label: 'Closet'  },
  { to: '/add',     icon: PlusCircle, label: 'Add'     },
  { to: '/outfits', icon: BookOpen,   label: 'Saved'   },
  { to: '/settings',icon: Settings,   label: 'Settings'},
];

export const TabBar = () => (
  <nav className="shrink-0 border-t border-zinc-200 dark:border-zinc-800 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-sm safe-bottom">
    <div className="flex">
      {tabs.map(({ to, icon: Icon, label }) => (
        <NavLink
          key={to}
          to={to}
          end={to === '/'}
          className={({ isActive }) =>
            `flex-1 flex flex-col items-center justify-center gap-0.5 py-2 text-[10px] font-medium transition-colors ${
              isActive
                ? 'text-indigo-600 dark:text-indigo-400'
                : 'text-zinc-500 dark:text-zinc-500'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5]' : ''}`} />
              {label}
            </>
          )}
        </NavLink>
      ))}
    </div>
  </nav>
);
