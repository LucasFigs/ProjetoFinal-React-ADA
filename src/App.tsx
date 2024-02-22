
import { Link, Route, Routes } from 'react-router-dom';
import PaginaReceitas from './pages/PaginaReceitas';
import PaginaDetalhesReceita from './pages/PaginaDetalheReceita';




function App() {

  return (
    <>
      <header>
        <div className="container">
          <div className="row">
            <Link to={"/"}>🏠</Link>
            <div className="shopping-cart">
              <Link to={"/"}>🔎</Link>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <Routes>
          <Route path="/" element={<PaginaReceitas />} />
          <Route path="/:id/receita" element={<PaginaDetalhesReceita />} />
        </Routes>
      </div>
    </>

  );

}

export default App;
