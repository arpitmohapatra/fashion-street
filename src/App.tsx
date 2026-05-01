import { Routes, Route } from 'react-router-dom';
import { TabBar } from './components/TabBar';
import { InstallPrompt } from './components/InstallPrompt';
import { OutfitPage }       from './pages/OutfitPage';
import { ClosetPage }       from './pages/ClosetPage';
import { AddGarmentPage }   from './pages/AddGarmentPage';
import { EditGarmentPage }  from './pages/EditGarmentPage';
import { OutfitsPage }      from './pages/OutfitsPage';
import { SettingsPage }     from './pages/SettingsPage';

export default function App() {
  return (
    <div className="flex flex-col h-full max-w-md mx-auto">
      <main className="flex-1 overflow-hidden">
        <Routes>
          <Route path="/"         element={<OutfitPage />} />
          <Route path="/closet"   element={<ClosetPage />} />
          <Route path="/add"      element={<AddGarmentPage />} />
          <Route path="/edit/:id" element={<EditGarmentPage />} />
          <Route path="/outfits"  element={<OutfitsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </main>
      <TabBar />
      <InstallPrompt />
    </div>
  );
}
