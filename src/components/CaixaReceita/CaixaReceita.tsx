import { Link } from "react-router-dom";


export interface Receita {
    id: number;
    title: string;
    category: string;
    image: string;
    ingredients: string[];
    prepTime: string;
    servings: string;
    vegetarian: boolean;
    glutenFree: boolean;

}
interface CaixaReceitaProps {
    receita: Receita
}

function CaixaReceita(props: CaixaReceitaProps) {
    const {
        receita: { id, title, category, image, ingredients, prepTime, servings, vegetarian, glutenFree },
    } = props;

    return (
        <li className="restaurant-box">
      <Link to={`${id}/receita`}>
        <img src={image} />
        <h2>📍 {title}</h2>
        <div className="details">
          <span className="small-details">{category}</span>
          {vegetarian ? (
          <span className="small-details">veg</span>
        ) : (
          null
        ) }
        {glutenFree ? (
          <span className="small-details">glutenFree</span>
        ) : (null)}
        </div>
        <div className="details">
          <span className="small-details">🕝 {prepTime} mins</span>
        </div>
        <p>{servings}</p>

      </Link>
    </li>
    );
    
}

export default CaixaReceita;