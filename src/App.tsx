
import { Route, Routes } from 'react-router-dom';
import PaginaReceitas from './pages/PaginaReceitas';




function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<PaginaReceitas />} />
      </Routes>
    </>
  );

}

export default App;
