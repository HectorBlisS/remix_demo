import { Link, useLoaderData } from '@remix-run/react';

export const loader = async ({ params }) => {
  const char = await await fetch(
    'https://rickandmortyapi.com/api/character/' + params.id
  );
  return char;
};

export default function Char() {
  const char = useLoaderData();
  return (
    <>
      <img src={char.image} />
      <h2>Detail de {char.name}</h2>
      <Link to='/characters'>
        <button>Volver</button>
      </Link>
      <Link to='edit'>
        <button>Edit</button>
      </Link>
    </>
  );
}
