import Image from "next/image";

async function getPokemon(name: string) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);
  const data = await res.json();
  return data;
}

export default async function PokemonPage({ params }: any) {
  const pokemon = await getPokemon(params.name);
  return (
    <div>
      <Image src={pokemon.sprites.front_default} alt={pokemon.name} />
    </div>
  );
}
