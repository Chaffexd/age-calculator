import React, { useState } from 'react';
import CalculatorContext from '../../context/context';
import useForm from '../../hooks/use-form';
import Result from '../Result/Result';

import classes from './Age.module.css';
import SubmitIcon from './SubmitIcon';

// const isNotEmpty = value => value.trim() !== "" && value.length === 2;
const isNotEmptyYear = value => value.trim() !== "" && value.length === 4;

const isNotEmpty = value => {
    const trimmedValue = value.trim();
  
    if (trimmedValue === "") {
      return "This field is required";
    }
  
    if (isNaN(trimmedValue)) {
      return "Input must be a number";
    }
  
    const numericValue = parseInt(trimmedValue, 10);
  
    if (numericValue < 0) {
      return "Input can't be negative";
    }
  
    if (numericValue > 31) {
      return "Input can't be more than 31";
    }
  
    if (trimmedValue.length > 2) {
      return "Input must be 2 characters";
    }
    return "";
};

const Age = () => {
    const [submittedValue, setSubmittedValues] = useState();

    const { 
        value: enteredDay,
        hasError: dayInputError,
        isValid: enteredDayIsValid,
        valueChangedHandler: dayChangedHandler,
        inputBlurHandler: dayBlurHandler,
        resetInput: resetDayInput 
    } = useForm(isNotEmpty);
    console.log(dayInputError)

    const { 
        value: enteredMonth,
        hasError: monthInputError,
        isValid: enteredMonthIsValid,
        valueChangedHandler: monthChangedHandler,
        inputBlurHandler: monthBlurHandler,
        resetInput: resetMonthInput 
    } = useForm(isNotEmpty);

    const { 
        value: enteredYear,
        hasError: yearInputError,
        isValid: enteredYearIsValid,
        valueChangedHandler: yearChangedHandler,
        inputBlurHandler: yearBlurHandler,
        resetInput: resetYearInput 
    } = useForm(isNotEmptyYear);

    let formIsValid = false;

    if(enteredDayIsValid && enteredMonthIsValid && enteredYearIsValid) {
        formIsValid = true;
    }

    const submitFormHandler = (e) => {
        e.preventDefault();

        console.log(enteredDay, enteredMonth, enteredYear)

        if(!enteredDayIsValid || !enteredMonthIsValid || !enteredYearIsValid) {
            return;
        }

        const values = {
            dayInput: enteredDay,
            monthInput: enteredMonth,
            yearInput: enteredYear
        };

        resetDayInput();
        resetMonthInput();
        resetYearInput();

        setSubmittedValues(values);
    };
    const dayInputClasses = dayInputError ? `${classes.input} ${classes.invalid}` : `${classes.input}`;
    const dayTextClasses = dayInputError ? `${classes.input} ${classes.invalidText}` : `${classes.input}`;

    const monthInputClasses = monthInputError ? `${classes.input} ${classes.invalid}` : `${classes.input}`;
    const monthTextClasses = monthInputError ? `${classes.input} ${classes.invalidText}` : `${classes.input}`;

    const yearInputClasses = yearInputError ? `${classes.input} ${classes.invalid}` : `${classes.input}`;
    const yearTextClasses = yearInputError ? `${classes.input} ${classes.invalidText}` : `${classes.input}`;

    return (
        <CalculatorContext.Provider value={submittedValue}>
            <form onSubmit={submitFormHandler}>
                <div className="">
                    <label htmlFor="day" className={dayTextClasses}>Day</label>
                    <input 
                        id="day" 
                        type="number" 
                        placeholder="DD"
                        value={enteredDay}
                        onChange={dayChangedHandler}
                        onBlur={dayBlurHandler}
                        className={dayInputClasses}
                    />
                    {dayInputError && <p className={dayTextClasses}>{dayInputError}</p>}
                </div>
                <div>
                    <label htmlFor="month" className={monthTextClasses}>Month</label>
                    <input 
                        id="month" 
                        type="number" 
                        placeholder="MM"
                        value={enteredMonth}
                        onChange={monthChangedHandler}
                        onBlur={monthBlurHandler}
                        className={monthInputClasses}
                    />
                    {monthInputError && <p className={monthTextClasses}>This field is required</p>}
                </div>
                <div>
                    <label htmlFor="year" className={yearTextClasses}>Year</label>
                    <input 
                        id="year" 
                        type="number" 
                        placeholder="YYYY"
                        value={enteredYear}
                        onChange={yearChangedHandler}
                        onBlur={yearBlurHandler}
                        className={yearInputClasses}
                    />
                    {yearInputError && <p className={yearTextClasses}>This field is required</p>}
                </div>
                <SubmitIcon formIsValid={!formIsValid} />
            </form>
            <Result />
        </CalculatorContext.Provider>
    );
};

export default Age;