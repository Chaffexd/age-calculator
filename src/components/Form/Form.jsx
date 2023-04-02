import React from 'react';
import Age from '../Age/Age';

import classes from './Form.module.css';

const Form = () => {
    return (
        <div className={classes.formContainer}>
            <Age />
        </div>
    );
};

export default Form;