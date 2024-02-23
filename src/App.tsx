
import { Link, Route, Routes } from 'react-router-dom';
import PaginaReceitas from './pages/PaginaReceitas';
import PaginaDetalhesReceita from './pages/PaginaDetalheReceita';
import PaginaBusca from './pages/PaginaBusca';




function App() {

  return (
    <>
      <header>
        <div className="container">
          <div className="row">
            <Link to={"/"}>🏠</Link>
            <h1 className='tituloSite'>Receitas do Loro José</h1>
            <div className="shopping-cart">
              <Link to={"/pesquisar"}>🔎</Link>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <Routes>
          <Route path="/" element={<PaginaReceitas />} />
          <Route path=":id/receita" element={<PaginaDetalhesReceita />} />
          <Route path="pesquisar/:id/receita" element={<PaginaDetalhesReceita />} />
          <Route path="/pesquisar" element={<PaginaBusca/>} />
        </Routes>
      </div>
    </>

  );

}

export default App;
