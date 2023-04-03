import React, { useContext } from 'react';
import CalculatorContext from '../../context/context';
import { useAutoAnimate } from '@formkit/auto-animate/react'

import classes from './Result.module.css';

const Result = () => {
    // Since we're using context on purpose for this project, I initialise what is in my context here
    const context = useContext(CalculatorContext);
    // Is initially undefined as it's only defined when form is submitted
    console.log(context);

    // For the date
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    // I define age as an empty object to hold date data
    let age = {};
    // If we have context we make it into the next if check
    if(context) {
        if(context) {
            age.year = year - context.enteredYear;
        }
        if(context.enteredMonth) {
            age.month = month - context.enteredMonth;
        }
        if(context.enteredDay) {
            age.day = day - context.enteredDay;
            // If the current day - dayInput is less than 0 we need to change the day and month
            // Otherwise we have a negative integer 
            if(age.day < 0) {
                let daysInMonth = new Date(year, month, 0).getDate();
                age.day = daysInMonth + age.day;
                age.month = month - 1;
                if(age.month < 0) {
                    age.month = 11;
                    age.year--;
                }
            }
        }
    }

    return (
        <div className={classes.resultContainer}>
            <h3><span className={`${age.year ? classes.animation : classes.year }`}>{age.year || "- -"}</span>&nbsp;years</h3>
            <h3><span className={classes.year}>{age.month || "- -"}</span>&nbsp;months</h3>
            <h3><span className={classes.year}>{age.day || "- -"}</span>&nbsp;days</h3>
        </div>
    );
};

export default Result;