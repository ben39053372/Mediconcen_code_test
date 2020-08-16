import {DefaultTheme} from 'react-native-paper'
export default {
  ...DefaultTheme,
  dark: false,
  roundness: 8,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FF8000',
    accent: '#03dac4',
    background: '#f6f6f6',
    surface: '#FFF',
    error: '#B00020',
    onBackground: '#000000',
    onSurface: '#000000',
  },
  animation: {
    scale: 1.0,
  },
};