/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react';

// Hook para manejar el debouncing de los inputs. Realiza una espera antes de que se envíe el input.
export const useDebouncedValue = (input: string = '', time: number = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(input);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(input);
    }, time);

    return () => {
      clearTimeout(timeout); // limpiar el timeout
    };
  }, [input]);

  return debouncedValue;
};
