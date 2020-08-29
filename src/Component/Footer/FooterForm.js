import React, { Fragment } from 'react';
import { Formik, Form } from "formik";
import * as Yup from "yup";
import "./style.css";
import FormikControl from '../Formik/FormikControl';
import Button from '../Buttons/Button';


const initialValues = {
    name: '',
    email: '',
    message: '',
}

const validationSchema = Yup.object({
    name: Yup.string().required("Required!"),
    email: Yup.string().email("Enter valid email address"),
    message: Yup.string().required("Required!"),
});

const FooterForm = (props) => {
    const onSubmit = (values, onSubmitProps) => {
        console.log(values);
        onSubmitProps.resetForm();
    }
    return (
        <Fragment>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} >
                <Form className="formContainer">
                    <FormikControl
                        type="text"
                        placeholder="Your name"
                        name="name"
                        className="fs-14 customInput"
                        control="input"
                        errClass="error"
                    />
                    <FormikControl
                        type="text"
                        placeholder="Your Email"
                        name="email"
                        className="fs-14 customInput"
                        control="input"
                        errClass="error"
                    />
                    <FormikControl
                        type="text"
                        placeholder="Your message"
                        name="message"
                        className="fs-14 customInput"
                        control="textarea"
                        errClass="error"
                    />
                    <Button btnText="Submit" className="buttonTextWhite bg-blue buttonArea" />
                </Form>
            </Formik>
        </Fragment>
    );
};

export default FooterForm;