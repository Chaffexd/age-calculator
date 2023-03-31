import React from 'react';

const CalculatorContext = React.createContext({
    enteredDay: "",
    enteredMonth: "",
    enteredYear: ""
});

export default CalculatorContext;