import { useState } from 'react';

const useInput = (validateInput) => {
    const [enteredValue, setEnteredValue] = useState("");
    const [touched, setTouched] = useState(false);

    const inputIsValid = validateInput(enteredValue);
    const hasError = !inputIsValid && touched;

    const valueChangedHandler = (e) => {
        setEnteredValue(e.target.value);
    };

    const inputBlurHandler = () => {
        setTouched(true);
    };

    const resetInput = () => {
        setEnteredValue("");
        setTouched(false);
    };

    return {
        value: enteredValue,
        hasError,
        isValid: inputIsValid,
        valueChangedHandler,
        inputBlurHandler,
        resetInput
    };
};

export default useInput;