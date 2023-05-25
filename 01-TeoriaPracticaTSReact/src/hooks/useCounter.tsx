import { useState } from "react";

export const useCounter = (initial = 0) => {
  const [valor, setValor] = useState(initial);

  const acumular = (numero: number) => {
    setValor(valor + numero);
  };

  const disminuir = (numero: number) => {
    if (valor === 0) return;
    setValor(valor - numero);
  };

  return {
    valor,
    acumular,
    disminuir,
  };
};


// Los custom hooks son funicones creadas para crear hooks personalizados que pueden facilitar un codigo mas ordenado y limpio. En este ejemplo tenemos su sintaxis y uso. 