import React, { useContext } from 'react';
import {CalculatorContext} from '../../context/context';

const Result = (props) => {
    const context = useContext(CalculatorContext);

    return (
        <div>
            <span>{context.dayInput}</span><h3>Years</h3>
            <h3>Months</h3>
            <h3>Days</h3>
        </div>
    );
};

export default Result;