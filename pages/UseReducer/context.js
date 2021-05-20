import React, {createContext, useState} from 'react';

export const ThemeContext = createContext()

const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState({
        isLightTheme: false,
        light: {
            backgroundColor: 'rgb(240,240,240)',
            color: 'black'
        },
        dark: {
            backgroundColor: 'black',
            color: 'white'
        }
    })

    //Context data
    const themeContextData = {theme}

    return (
        <ThemeContextProvider value={themeContextData}>
            {children}
        </ThemeContextProvider>
    )
}

