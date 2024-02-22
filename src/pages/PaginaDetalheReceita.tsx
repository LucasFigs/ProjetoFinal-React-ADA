import { Link, useParams } from "react-router-dom";
import data from "../data/data.json"
import CaixaDetalhesReceita from "../components/CaixaDetalhesReceita/CaixaDetalhesReceita";

function PaginaDetalhesReceita() {
    const { id: idDaUrl } = useParams();


    const receita = data.recipes.filter(
        (receita) => receita.id.toString() === idDaUrl
    )[0];
        
    return (
        <section>
          <Link to={"/"}>‹ Todas as receitas</Link>
          <h1>{receita.title}</h1>
          <p></p>
          <p className="intro">{receita.category}</p>
          <div className="details">
          {receita.vegetarian ? (
          <span className="small-details">veg</span>
        ) : (
          null
        ) }
        {receita.glutenFree ? (
          <span className="small-details">glutenFree</span>
        ) : (null)}
        </div>
          <ul
            className="grid"
            role="list"
            style={{ "--max": "300px" } as React.CSSProperties}
          >
           <CaixaDetalhesReceita recipes={receita} />
          </ul>
        </section>
      );

}

export default PaginaDetalhesReceita;