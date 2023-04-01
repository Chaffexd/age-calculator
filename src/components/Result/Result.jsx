import React, { useContext } from 'react';
import CalculatorContext from '../../context/context';
import useForm from '../../hooks/use-form';

const Result = (props) => {
    const { useForm } = useContext(CalculatorContext);

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