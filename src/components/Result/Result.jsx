import React, { useContext } from 'react';
import CalculatorContext from '../../context/context';

const Result = () => {
    // Since we're using context on purpose for this project, I initialise what is in my context here
    const context = useContext(CalculatorContext);
    // Is initially undefined as it's only defined when form is submitted
    console.log(context);

    // For the date
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
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
        <div>
            <h3><span>{age.year || "- -"}</span>Years</h3>
            <h3><span>{age.month || "- -"}</span>Months</h3>
            <h3><span>{age.day || "- -"}</span>Days</h3>
        </div>
    );
};

export default Result;