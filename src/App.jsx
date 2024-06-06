import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CataloguePage from 'pages/CataloguePage';
import FavouriteAdPage from 'pages/FavouriteAdPage';

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="catalogue" element={<CataloguePage />} />
        <Route path="catalogue/:blogId" element={<FavouriteAdPage />} />

        <Route path="*" element={<Navigate to={'/'} />} />
      </Routes>
    </>
  );
}

export default App;
