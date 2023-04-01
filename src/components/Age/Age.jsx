import React, { useContext } from 'react';
import { CalculatorContext } from '../../context/context';
import useForm from '../../hooks/use-form';

import classes from './Age.module.css';
import SubmitIcon from './SubmitIcon';

const isNotEmpty = value => value.trim() !== "" && value.length === 2;
const isNotEmptyYear = value => value.trim() !== "" && value.length === 4;

const Age = () => {
    const { dayInput, monthInput, yearInput } = useContext(CalculatorContext)

    const { 
        value: enteredDay,
        hasError: dayInputError,
        isValid: enteredDayIsValid,
        valueChangedHandler: dayChangedHandler,
        inputBlurHandler: dayBlurHandler,
        reset: resetDayInput 
    } = useForm(isNotEmpty);

    const { 
        value: enteredMonth,
        hasError: monthInputError,
        isValid: enteredMonthIsValid,
        valueChangedHandler: monthChangedHandler,
        inputBlurHandler: monthBlurHandler,
        reset: resetMonthInput 
    } = useForm(isNotEmpty);

    const { 
        value: enteredYear,
        hasError: yearInputError,
        isValid: enteredYearIsValid,
        valueChangedHandler: yearChangedHandler,
        inputBlurHandler: yearBlurHandler,
        reset: resetYearInput 
    } = useForm(isNotEmptyYear);

    let formIsValid = false;

    if(enteredDayIsValid && enteredMonthIsValid && enteredYearIsValid) {
        formIsValid = true;
    }

    const submitFormHandler = (e) => {
        e.preventDefault();

        console.log(enteredDay, enteredMonth, enteredYear)

        if(!enteredDayIsValid && !enteredMonthIsValid && !enteredYearIsValid) {
            return;
        }

        resetDayInput();
        resetMonthInput();
        resetYearInput();
    };

    const dayInputClasses = dayInputError ? `${classes.input} ${classes.invalid}` : `${classes.input}`;
    const dayTextClasses = dayInputError ? `${classes.input} ${classes.invalidText}` : `${classes.input}`;

    const monthInputClasses = dayInputError ? `${classes.input} ${classes.invalid}` : `${classes.input}`;
    const monthTextClasses = dayInputError ? `${classes.input} ${classes.invalidText}` : `${classes.input}`;

    const yearInputClasses = dayInputError ? `${classes.input} ${classes.invalid}` : `${classes.input}`;
    const yearTextClasses = dayInputError ? `${classes.input} ${classes.invalidText}` : `${classes.input}`;

    return (
        <CalculatorContext.Provider value={{
            dayInput: enteredDay,
            monthInput: enteredMonth,
            yearInput: enteredYear
        }}>
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
                {dayInputError && <p className={dayTextClasses}>This field is required</p>}
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
                <label htmlFor="year" className={yearTextClasses}>Day</label>
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
        </CalculatorContext.Provider>
    );
};

export default Age;