import React from 'react';

export const CalculatorContext = React.createContext({
    dayInput: "",
    monthInput: "",
    yearInput: ""
});

export const CalculatorContextProvider = ({ children, value }) => {
    return <CalculatorContext.Provider value={value}>{children}</CalculatorContext.Provider>;
};