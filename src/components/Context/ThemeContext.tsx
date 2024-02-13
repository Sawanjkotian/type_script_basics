import { createContext } from 'react';
import { theme } from './theme';

type ThemeContextProvidersProp = {
    children:React.ReactNode
}

export const ThemeContext = createContext(theme)

export const ThemeContextProvider =({children}: ThemeContextProvidersProp)=>{
    return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}