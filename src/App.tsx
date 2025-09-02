import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Main } from './pages/MainPage/Main.tsx';
import { LocationsPage } from './pages/LocationsPage/LocationsPage.tsx';
import { EpisodesPage } from './pages/EpisodesPage/EpisodesPage.tsx';
import { CatsPage } from './pages/CatsPage/CatsPage.tsx';

function App() {
  return (
    <Routes>
      <Route path="/characters" element={<Main />} />
      <Route path="/locations" element={<LocationsPage />} />
      <Route path="/episodes" element={<EpisodesPage />} />
      <Route path="/cats" element={<CatsPage />} />
      <Route path="/" element={<Main />} />
      <Route path="*" element={<Main />} />
    </Routes>
  );
}

export default App;
