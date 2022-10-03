import React from 'react';

const defaultValue = 'yellow';
export const ButtonContext = React.createContext(defaultValue);

export const ButtonContextProvider = ButtonContext.Provider;
export const ButtonContextConsumer = ButtonContext.Consumer;




