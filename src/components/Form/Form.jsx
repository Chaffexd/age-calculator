import React from 'react';
import Age from '../Age/Age';
import Result from '../Result/Result';

import classes from './Form.module.css';

const Form = () => {
    return (
        <div className={classes.formContainer}>
            <Age />
            <Result />
        </div>
    );
};

export default Form;