import { Routes, Route } from 'react-router-dom';
import { TabBar }         from './components/TabBar';
import { Sidebar }        from './components/Sidebar';
import { InstallPrompt }  from './components/InstallPrompt';
import { OutfitPage }     from './pages/OutfitPage';
import { ClosetPage }     from './pages/ClosetPage';
import { AddGarmentPage } from './pages/AddGarmentPage';
import { EditGarmentPage }from './pages/EditGarmentPage';
import { OutfitsPage }    from './pages/OutfitsPage';
import { SettingsPage }   from './pages/SettingsPage';

export default function App() {
  return (
    <div className="flex h-full overflow-hidden bg-zinc-50 dark:bg-zinc-950">
      <Sidebar />
      <div className="flex flex-col flex-1 min-w-0 h-full overflow-hidden">
        <main className="flex-1 min-h-0 overflow-hidden">
          <Routes>
            <Route path="/"         element={<OutfitPage />} />
            <Route path="/closet"   element={<ClosetPage />} />
            <Route path="/add"      element={<AddGarmentPage />} />
            <Route path="/edit/:id" element={<EditGarmentPage />} />
            <Route path="/outfits"  element={<OutfitsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </main>
        <div className="md:hidden">
          <TabBar />
        </div>
        <InstallPrompt />
      </div>
    </div>
  );
}
