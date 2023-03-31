import React, { useReducer } from 'react'

const initialInputState = {
    value: "",
    isTouched: false
};

const inputStateReducer = (state, action) => {
    if(action.type === "INPUT") {
        return { value: action.value, isTouched: state.isTouched };
    };

    if(action.type === "BLUR") {
        return { isTouched: true, value: state.value }
    };

    if(action.type === "RESET") {
        return { isTouched: false, value: "" }
    };

    return inputStateReducer;
};

const useForm = (validateValue) => {
    const [inputState, dispatch] = useReducer(inputStateReducer, initialInputState);
    
    const valueIsValid = validateValue(inputState.value);
    const hasError = !valueIsValid && inputState.isTouched;

    const valueChangedHandler = (event) => {
        dispatch({ type: "INPUT", value: event.target.value });
    };

    const inputBlurHandler = (event) => {
        dispatch({ type: "BLUR"});
    };

    const reset = () => {
        dispatch({ type: "RESET" });
    };

    return {
        value: inputState.value,
        hasError,
        isValid: valueIsValid,
        valueChangedHandler,
        inputBlurHandler,
        reset
    };
};

export default useForm;