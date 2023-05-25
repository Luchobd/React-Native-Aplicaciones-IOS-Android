import { useCounter } from "../hooks/useCounter";

export const ContadorConHook = () => {

  const {valor, acumular, disminuir} = useCounter();

  return (
    <>
      <h3>
        Contador con hook: <small>{valor}</small>
      </h3>
      <button className="btn btn-primary" onClick={() => acumular(1)}>
        +1
      </button>
      &nbsp;
      <button className="btn btn-primary" onClick={() => disminuir(1)}>
        -1
      </button>
    </>
  );
};

/*
<TIPADO> => cuando se encuentra entre las flechas de forma de tipado, se conoce como un valor generico. Eso quiere decir que se pueden configurar o utilizar para el tipado de ciertas funciones y hooks.
*/
