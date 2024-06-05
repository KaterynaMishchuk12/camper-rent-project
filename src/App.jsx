import { Navigate, Route, Routes } from 'react-router-dom';
import { MainPage, BlogListPage, BlogPage } from './pages';

function App() {
  return (
    <>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="blog" element={<BlogListPage />} />
        <Route path="blog/:blogId" element={<BlogPage />} />

        <Route path="*" element={<Navigate to={'/'} />} />
      </Routes>
    </>
  );
}

export default App;
