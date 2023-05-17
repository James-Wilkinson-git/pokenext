import Link from "next/link";
import styles from "./page.module.scss";

async function getPokemons() {
  //This will cache by deafult because of Next add cache: no-store to fetch to refetch each load
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=150");
  const data = await res.json();
  return data?.results;
}

export default async function PokemonsPage() {
  const pokemon = await getPokemons();
  return (
    <div>
      <h1> First 150 Pokemon</h1>
      <div className={styles.pokeList}>
        {pokemon?.map((pokemon: any) => {
          return (
            <div className={styles.pokemonEntry} key={pokemon.name}>
              <Link href={`pokemon/${pokemon.name}`}>{pokemon.name}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
