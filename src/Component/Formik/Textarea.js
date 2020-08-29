import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from './TextError';

const Textarea = (props) => {
    const { name,errClass, ...rest } = props;
    return (
        <div className="form-control message">
            <Field as='textarea' id={name} name={name}  {...rest} />
            <ErrorMessage name={name} component={TextError} className={errClass}/>
        </div>
    );
};

export default Textarea;