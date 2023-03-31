import React, { useContext } from 'react';
import CalculatorContext from '../../context/context';

const Result = (props) => {
    const { enteredDay, enteredMonth, enteredYear } = useContext(CalculatorContext);

    console.log(enteredDay)
    return (
        <div>
            <span>{enteredDay ? enteredDay : "--"}</span><h3>Years</h3>
            <h3>Months</h3>
            <h3>Days</h3>
        </div>
    );
};

export default Result;