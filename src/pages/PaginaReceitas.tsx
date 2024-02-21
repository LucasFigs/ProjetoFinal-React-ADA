import '../App.scss';
import CaixaReceita from '../components/CaixaReceita/CaixaReceita';;
import data from "../data/data.json";



function PaginaReceitas() {

    return(
        <>
      <section>
        <h2>Receitas</h2>
        <ul className="grid" role="list">
          {data.recipes.map((receita) => (
            <CaixaReceita
              key={receita.id}
              receita={receita}
            />
          ))}
        </ul>
      </section>
      </>
    )
}


export default PaginaReceitas;