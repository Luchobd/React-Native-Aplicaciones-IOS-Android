import {View, Text} from 'react-native';
import React from 'react';
import {styles} from '../theme/app.Theme';
import {ButtonCalc} from '../components/ButtonCalc';
import {useCalculator} from '../hooks/useCalculator';

export const CalculadoraScreen = () => {
  // Custom Hook.
  const {
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
  } = useCalculator();

  return (
    <View style={styles.calculatorContainer}>
      {previousNumber !== '0' && (
        <Text style={styles.smallResult}>{previousNumber}</Text>
      )}

      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>

      {/* Button Rows */}
      <View style={styles.row}>
        <ButtonCalc text="C" color="#9b9b9b" action={clean} />
        <ButtonCalc text="+/-" color="#9b9b9b" action={positiveNegative} />
        <ButtonCalc text="del" color="#9b9b9b" action={btnDelete} />
        <ButtonCalc text="/" color="#ff9427" action={btnDivition} />
      </View>

      {/* Button Rows */}
      <View style={styles.row}>
        <ButtonCalc text="7" action={touchedNumber} />
        <ButtonCalc text="8" action={touchedNumber} />
        <ButtonCalc text="9" action={touchedNumber} />
        <ButtonCalc text="X" color="#ff9427" action={btnMultiplication} />
      </View>

      {/* Button Rows */}
      <View style={styles.row}>
        <ButtonCalc text="4" action={touchedNumber} />
        <ButtonCalc text="5" action={touchedNumber} />
        <ButtonCalc text="6" action={touchedNumber} />
        <ButtonCalc text="-" color="#ff9427" action={btnSubtration} />
      </View>

      {/* Button Rows */}
      <View style={styles.row}>
        <ButtonCalc text="1" action={touchedNumber} />
        <ButtonCalc text="2" action={touchedNumber} />
        <ButtonCalc text="3" action={touchedNumber} />
        <ButtonCalc text="+" color="#ff9427" action={btnAddition} />
      </View>

      {/* Button Rows */}
      <View style={styles.row}>
        <ButtonCalc text="0" action={touchedNumber} widthBool />
        <ButtonCalc text="." action={touchedNumber} />
        <ButtonCalc text="=" color="#ff9427" action={calculate} />
      </View>
    </View>
  );
};

// numberOfLines={1} adjustsFontSizeToFit => esta combinación es para poder hacer mas pequeño mientas se aumentan los numbers en la pantalla.
