interface CaixaDetalhesReceitaProps {
    recipes: {
    id: number;
    title: string;
    category: string;
    image: string;
    ingredients: string[];
    instructions: string[];
    prepTime: string;
    servings: string;
    vegetarian: boolean;
    glutenFree: boolean;
}
}

export default function CaixaDetalhesReceita(props: CaixaDetalhesReceitaProps) {
    const {
        recipes: {id, title, category, image, ingredients, instructions, prepTime, servings, vegetarian, glutenFree }
    } = props;


    return (
        <li className="restaurant-box">
        <img src={image} />
        <div className="details">
          <span className="small-details">🕝 {prepTime} mins</span>
        </div>
        <p>{servings}</p>
    </li>
    )
}