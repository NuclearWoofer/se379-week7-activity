import { createContext } from 'react'

export const themes = {
  light: {
    foreground: '#242526',
    background: '#fff',
    textColor: '#242526'
  },
  dark: {
    foreground: '#fff',
    background: '#242526',
    textColor: '#fff'

  },
};

// Let our context know what properties to expect
export const ThemeContext = createContext({
  theme: {}, 
});