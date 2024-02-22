import { Link, useParams } from "react-router-dom";
import data from "../data/data.json";



function PaginaDetalhesReceita() {
    const { id: idDaUrl } = useParams();


    const receita = data.recipes.filter(
        (receita) => receita.id.toString() === idDaUrl
    )[0];

        
    return (
      <>
        <section>
          <Link to={"/"}>‹ Todas as receitas</Link>
          <h1>{receita.title}</h1>
          <p></p>
          <div className="details">
          <p className="intro destaque">{receita.category}</p>
          {receita.vegetarian ? (
          <span className="intro destaque-verde">veg</span>
        ) : (
          null
        ) }
        {receita.glutenFree ? (
          <span className="intro">glutenFree</span>
        ) : (null)}
          </div>
        </section >
        <section className="grid-receitas">
        <div className="restaurant-box">
          <img src={receita.image} />
            <div className="details">
                <span className="small-details">🕝 {receita.prepTime} mins</span>
            </div>
            <p className="card-receita">Serve {receita.servings}</p>
        </div>
        <div>
            <h2>Ingredientes</h2>
            <ul>
              {receita.ingredients.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
        </div>
        </section>
        <section className="box-receitas">
          <h2>Modo de preparo</h2>
          <p className="descricao-receita">
            {receita.instructions}
          </p>
          {receita.videoUrl ? (
            <a href={receita.videoUrl} target="_blank" className="button-video">Assista o vídeo aqui</a>
          ) : 
          (null) }
        </section>
        
        </>
      );

}

export default PaginaDetalhesReceita;