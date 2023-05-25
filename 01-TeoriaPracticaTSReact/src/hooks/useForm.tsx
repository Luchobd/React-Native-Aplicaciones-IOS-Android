import { useState } from "react";

export const useForm = <T extends object>(formulario: T) => {
  const [state, setState] = useState(formulario);

  const onChange = (value: string, campo: keyof T) => {
    setState({
      ...state,
      [campo]: value,
    });
  };

  return {
    ...state,
    formulario: state,
    onChange,
  };
};

// Creacion de un custom hook generico. Es un estandar que al primer valor generico se le coloque la letra T