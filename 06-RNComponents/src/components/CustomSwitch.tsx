import {Switch, Platform} from 'react-native';
import React, {useContext, useState} from 'react';
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface Props {
  isOn: boolean;
  onChange: (value: boolean) => void;
}

// Construit y Mejorar el Switch
export const CustomSwitch = ({isOn, onChange}: Props) => {
  const [isEnabled, setIsEnabled] = useState(isOn);
  const {theme} = useContext(ThemeContext);
  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    onChange(!isEnabled);
  };
  return (
    <Switch
      trackColor={{false: '#d9d9db', true: theme.colors.primary}}
      thumbColor={Platform.OS === 'android' ? theme.colors.primary : ''}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};
