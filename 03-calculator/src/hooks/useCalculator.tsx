// import {View, Text} from 'react-native';
import {useRef, useState} from 'react';

enum Operators {
  addition,
  subtraction,
  multiplication,
  division,
}

export const useCalculator = () => {
  const [previousNumber, setPreviousNumber] = useState('0');
  const [number, setNumber] = useState('0');

  const lastOperation = useRef<Operators>();

  const clean = () => {
    setNumber('0');
    setPreviousNumber('0');
  };

  const touchedNumber = (numberText: string) => {
    // No aceptar doble punto.
    if (number.includes('.') && numberText === '.') {
      return;
    }

    if (number.startsWith('0') || number.startsWith('-0')) {
      // Punto decimal
      if (numberText === '.') {
        setNumber(number + numberText);

        // Evaluar si es otro cero, y hay un punto
      } else if (numberText === '0' && number.includes('.')) {
        setNumber(number + numberText);

        // Evaluar si es diferente de cero y no tiene un punto
      } else if (numberText !== '0' && !number.includes('.')) {
        setNumber(numberText);

        // Evitar 0000.0
      } else if (numberText === '0' && !number.includes('.')) {
        setNumber(number);
      } else {
        setNumber(number + numberText);
      }
    } else {
      setNumber(number + numberText);
    }
  };
  const positiveNegative = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };

  const btnDelete = () => {
    if (number.length === 1 || (number.length === 2 && number.includes('-'))) {
      return setNumber('0');
    }

    setNumber(number.slice(0, -1));
  };

  const changeNumberToPrevious = () => {
    if (number.endsWith('.')) {
      setPreviousNumber(number.slice(0, -1));
    } else {
      setPreviousNumber(number);
    }

    setNumber('0');
  };

  const btnDivition = () => {
    changeNumberToPrevious();
    lastOperation.current = Operators.division;
  };

  const btnMultiplication = () => {
    changeNumberToPrevious();
    lastOperation.current = Operators.multiplication;
  };

  const btnSubtration = () => {
    changeNumberToPrevious();
    lastOperation.current = Operators.subtraction;
  };

  const btnAddition = () => {
    changeNumberToPrevious();
    lastOperation.current = Operators.addition;
  };

  const calculate = () => {
    const number1 = Number(number);
    const number2 = Number(previousNumber);

    switch (lastOperation.current) {
      case Operators.addition:
        setNumber(`${number2 + number1}`);
        break;
      case Operators.subtraction:
        setNumber(`${number2 - number1}`);
        break;
      case Operators.multiplication:
        setNumber(`${number2 * number1}`);
        break;
      case Operators.division:
        number1 !== 0 && setNumber(`${number2 / number1}`);
        break;

      default:
        break;
    }

    setPreviousNumber('0');
  };
  return {
    clean,
    touchedNumber,
    positiveNegative,
    btnDelete,
    btnDivition,
    btnMultiplication,
    btnSubtration,
    btnAddition,
    calculate,
    previousNumber,
    number,
  };
};
