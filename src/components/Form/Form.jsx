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

        if(dayInput.trim() === "") {
            setDayError(true);
            setDayErrorMsg("Value cannot be empty.")
        }
        if(dayInput < 1 || dayInput > 31 || dayInput.length > 2) {
            setDayError(true);
            setDayErrorMsg("Must be a valid date.");
        }
        if(monthInput.trim() === "") {
            setMonthError(true);
            setMonthErrorMsg("Value cannot be empty.")
        }
        if(monthInput < 1 || monthInput > 12 || monthInput.length > 2) {
            setMonthError(true);
            setMonthErrorMsg("Must be a valid month.");
        }
        if(yearInput.length > 4 || yearInput.length < 4) {
            setYearError(true);
            setYearErrorMsg("Must be a valid year");
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
        console.log(dayInput, monthInput, yearInput)
        console.log(day, month, year)
        console.log(todayError)

        const values = {
            enteredDay: dayInput,
            enteredMonth: monthInput,
            enteredYear: yearInput
        };

        setSubmittedValues(values);
        setDayInput("");
        setMonthInput("");
        setYearInput("");
    };

    return (
        <CalculatorContext.Provider value={submittedValues}>
            <form onSubmit={submitFormHandler}>
                <div>
                    <label htmlFor="day">Day</label>
                    <input 
                        id="day" 
                        type="number" 
                        placeholder="DD"
                        value={dayInput}
                        onChange={handleDayInput}
                    />
                    {dayError && <p>{dayErrorMsg}</p>}
                </div>
                <div>
                    <label htmlFor="month">Month</label>
                    <input 
                        id="month" 
                        type="number" 
                        placeholder="MM"
                        value={monthInput}
                        onChange={handleMonthInput}
                    />
                    {monthError && <p>{monthErrorMsg}</p>}
                </div>
                <div>
                    <label htmlFor="year">Year</label>
                    <input 
                        id="year" 
                        type="number" 
                        placeholder="YYYY"
                        value={yearInput}
                        onChange={handleYearInput}
                    />
                    {yearError && <p>{yearErrorMsg}</p>}
                </div>
                <SubmitIcon />
            </form>
            {todayError ? <p>{todayErrorMsg}</p> : <Result/>}
        </CalculatorContext.Provider>
    );
};

export default Form;