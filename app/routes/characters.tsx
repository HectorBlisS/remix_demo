import { Link, Outlet, useLoaderData } from '@remix-run/react';
import { useEffect } from 'react';

// export const meta = ({ data }) => {
//   return {
//     title: data.results[0].name,
//   };
// };

// esto corre en el servidor!!!!
export const loader = async () => {
  const data = await (
    await fetch('https://rickandmortyapi.com/api/character')
  ).json();
  return data;
};

// Si corre en el cliente, pero se entrega desinflado
export default function Chars() {
  const data = useLoaderData();

  // lo que sea que pongas aquí, correrá en el navegador solamente
  useEffect(() => {}, []);

  const handleClick = () => {
    console.log(document.querySelector('a'));
  };

  return (
    <>
      <h2 onClick={handleClick}>Hola blissmo</h2>
      {data.results.map((char) => (
        <Link
          prefetch='intent'
          style={{
            display: 'block',
          }}
          to={`${char.id}`}
        >
          {char.name}
        </Link>
      ))}
      <Outlet />
    </>
  );
}

//== cliente recibe HTML
