import { useState } from "react";

export const Contador = () => {
  const [valor, setValor] = useState(0);

  const acumular = (numero: number) => {
    setValor(valor + numero);
  };

  const disminuir = (numero: number) => {
    if (valor === 0) return;
    setValor(valor - numero);
  };

  return (
    <>
      <h3>
        Contador: <small>{valor}</small>
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
