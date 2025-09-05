import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const Main = lazy(() => import('./pages/MainPage/Main.tsx'));
const LocationsPage = lazy(
  () => import('./pages/LocationsPage/LocationsPage.tsx')
);
const EpisodesPage = lazy(
  () => import('./pages/EpisodesPage/EpisodesPage.tsx')
);
const CatsPage = lazy(() => import('./pages/CatsPage/CatsPage.tsx'));

function App() {
  return (
    <Suspense fallback={<div>LOADING</div>}>
      <Routes>
        <Route path="/characters" element={<Main />} />
        <Route path="/locations" element={<LocationsPage />} />
        <Route path="/episodes" element={<EpisodesPage />} />
        <Route path="/cats" element={<CatsPage />} />
        <Route path="/" element={<Main />} />
        <Route path="*" element={<Main />} />
      </Routes>
    </Suspense>
  );
}

export default App;
