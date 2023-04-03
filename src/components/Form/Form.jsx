import React, { useState } from 'react';
import CalculatorContext from '../../context/context';
import SubmitIcon from './SubmitIcon';
import Result from '../Result/Result';
import classes from './Form.module.css';

const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

const todaysDate = `${day}/${month}/${year}`;
console.log(todaysDate)

const Form = () => {
    const [submittedValues, setSubmittedValues] = useState("");
    const [dayInput, setDayInput] = useState("");
    const [monthInput, setMonthInput] = useState("");
    const [yearInput, setYearInput] = useState("");

    const [dayErrorMsg, setDayErrorMsg] = useState("");
    const [dayError, setDayError] = useState(false);

    const [monthErrorMsg, setMonthErrorMsg] = useState("");
    const [monthError, setMonthError] = useState(false);

    const [yearErrorMsg, setYearErrorMsg] = useState("");
    const [yearError, setYearError] = useState(false);

    const [todayErrorMsg, setTodayErrorMsg] = useState("");
    const [todayError, setTodayError] = useState(false);

    const handleDayInput = (e) => {
        setDayInput(e.target.value);
    };
    const handleMonthInput = (e) => {
        setMonthInput(e.target.value);
    };
    const handleYearInput = (e) => {
        setYearInput(e.target.value);
    };

    const submitFormHandler = (e) => {
        e.preventDefault();

        if(dayInput.trim() === "" || monthInput.trim() === "" || yearInput.trim() === "") {
            setDayError(true);
            setMonthError(true);
            setYearError(true);
            setDayErrorMsg("This field is required.")
            setMonthErrorMsg("This field is required.");
            setYearErrorMsg("This field is required.");
            return;
        }
        if(dayInput < 1 || dayInput > 31 || dayInput.length > 2) {
            setDayError(true);
            setDayErrorMsg("Must be a valid day.");
            return;
        }
        if(monthInput < 1 || monthInput > 12 || monthInput.length > 2) {
            setMonthError(true);
            setMonthErrorMsg("Must be a valid month.");
            return;
        }
        if(yearInput.length > 4 || yearInput.length < 4) {
            setYearError(true);
            setYearErrorMsg("Must be a valid year");
            return;
        }
        if(yearInput > year) {
            setYearError(true);
            setYearErrorMsg("Must be in the past");
            return;
        }
        if(dayInput == day && monthInput == month && yearInput == year) {
            setTodayError(true);
            setTodayErrorMsg("Congrats! You're 0.");
            return;
        }
        if(dayInput > day && monthInput > month && yearInput > year) {
            setDayError(true);
            setMonthError(true);
            setYearError(true);
            setDayErrorMsg("Date cannot be in the future");
            setMonthErrorMsg("Date cannot be in the future");
            setYearErrorMsg("Date cannot be in the future");
            return;
        }
        // Input from user
        console.log(dayInput, monthInput, yearInput);
        // Todays date
        console.log(day, month, year);

        // Adding to context
        const values = {
            enteredDay: dayInput,
            enteredMonth: monthInput,
            enteredYear: yearInput
        };

        // Reset form
        setSubmittedValues(values);
        setDayInput("");
        setMonthInput("");
        setYearInput("");
        setDayError(false);
        setMonthError(false);
        setYearError(false);
    };

    // CSS classes
    const invalidDayBox = `${dayError ? `${classes.invalidInput}` : ``}`;
    const invalidHeader = `${dayError ? `${classes.invalidText}` : ``}`;

    const invalidMonthyBox = `${monthError ? `${classes.invalidInput}` : ``}`;
    const invalidMonthHeader = `${monthError ? `${classes.invalidText}` : ``}`;

    const invalidYearBox = `${yearError ? `${classes.invalidInput}` : ``}`;
    const invalidYearHeader = `${yearError ? `${classes.invalidText}` : ``}`;

    return (
        <CalculatorContext.Provider value={submittedValues}>
            <form onSubmit={submitFormHandler}>
                <div className={classes.inputContainer}>
                    <label htmlFor="day" className={invalidHeader}>DAY</label>
                    <input 
                        id="day" 
                        type="number" 
                        placeholder="DD"
                        value={dayInput}
                        onChange={handleDayInput}
                        className={invalidDayBox}
                    />
                    {dayError && <p className={classes.invalid}>{dayErrorMsg}</p>}
                </div>
                <div className={classes.inputContainer}>
                    <label htmlFor="month" className={invalidMonthHeader}>MONTH</label>
                    <input 
                        id="month" 
                        type="number" 
                        placeholder="MM"
                        value={monthInput}
                        onChange={handleMonthInput}
                        className={invalidMonthyBox}
                    />
                    {monthError && <p className={classes.invalid}>{monthErrorMsg}</p>}
                </div>
                <div className={classes.inputContainer}>
                    <label htmlFor="year" className={invalidYearHeader}>YEAR</label>
                    <input 
                        id="year" 
                        type="number" 
                        placeholder="YYYY"
                        value={yearInput}
                        onChange={handleYearInput}
                        className={invalidYearBox}
                    />
                    {yearError && <p className={classes.invalid}>{yearErrorMsg}</p>}
                </div>
                <div className={classes.buttonDiv}>
                    <span className={classes.line}></span>
                    <SubmitIcon />
                </div>
            </form>
            {todayError ? <p className={classes.todaysAge}>{todayErrorMsg}</p> : <Result/>}
        </CalculatorContext.Provider>
    );
};

export default Form;