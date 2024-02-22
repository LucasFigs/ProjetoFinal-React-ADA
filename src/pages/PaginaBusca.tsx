import { useState } from 'react';
import '../App.scss';
import CaixaReceita, { Receita } from '../components/CaixaReceita/CaixaReceita';;
import data from "../data/data.json";



function PaginaBusca() {
    const [busca, definirBusca] = useState("");

    function buscar({ title, category, ingredients }: Receita) {
        return (
            valorAtendeABusca(title) ||
            valorAtendeABusca(category) ||
            valorAtendeABusca(ingredients.toString())
        );
    }


    function valorAtendeABusca (valor:string) {
        return valor.toLocaleLowerCase().includes(busca.toLowerCase());
    }

    const listaReceitas = data.recipes.filter(buscar);

    return(
        <>
      <section>
      <h2>Receitas</h2>
        <input
        type='text'
        placeholder='Pesquisar pelo nome da receita, categoria ou ingrediente'
        id='search'
        value={busca}
        onChange={(e) => definirBusca(e.target.value)}
        />
        <label htmlFor='search'>🔎</label>
        
        <ul className="grid" role="list">
          {listaReceitas.map((receita) => (
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


export default PaginaBusca;