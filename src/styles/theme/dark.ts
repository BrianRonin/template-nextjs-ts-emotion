import { DefaultTheme } from './default'

export const dark_theme = {
  ...DefaultTheme,
  name: 'dark',
  colors: {
    primary: '#ffffff',
    text: '#ffffff',
    secondary: '#dc143c',
    primaryBg: '#ffffff',
    bg: 'black',
    secondaryBg: 'cyan',
    mediumGray: '#464646',
    darkGray: '#bcbcbc',
    darkBg: '#dedede',
  },
} as typeof DefaultTheme
