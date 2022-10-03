import React from 'react'
import { ButtonContextProvider } from './myContext';
import Toolbar from './Toolbar';

export const themes = {
    light: {
      foreground: '#000000',
      background: '#eeeeee',
    },
    dark: {
      foreground: '#ffffff',
      background: 'pink',
    },
  };

const App = () => {

    const theme = themes.dark.background;

    console.log(theme);

    return (
        <div>
            <h1>Context API</h1>
            <ButtonContextProvider value={theme}>
            <Toolbar/>
            </ButtonContextProvider>
        </div>
    )
}

export default App
