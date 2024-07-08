'use client'

import { ErrorMessage, Field, Form, Formik, FormikProps } from 'formik'
import { useState } from 'react'
import * as Yup from 'yup'
import { onAdd } from '../action'

const registerSchema = Yup.object().shape({
    name: Yup.string().required('name is required').min(6, 'name must be at least 6 letters'),
    email: Yup.string().required('email is required').email('invalid email format'),
    password: Yup.string().required('password is required').min(6, 'password must be at least 6 letters')
        .matches(/[a-z]/, 'password must contain at least one lowercase letter')
        .matches(/[A-Z]/, 'password must contain at least one uppercase letter')
        .matches(/[0-9]/, 'password must contain at least one number')
        .matches(/[^\w]/, 'password must contain at least one special character')
})

export interface InitialValues {
    name: string
    email: string
    password: string
}

export default function RegisterPage() {
    const [show, setShow] = useState<boolean>(false)
    const initialValues: InitialValues = {name: "", email: "", password: ""}
    const handleAdd = async (values: InitialValues) => {
        try {
            await onAdd(values)
            alert('success upload data')
        } catch (err) {
            console.log(err);
        }
    }
    return (
    <div>
        <Formik
            initialValues={initialValues}
            validationSchema={registerSchema}
            onSubmit={(values, action) => {
                console.log(values);
                handleAdd(values)
                action.resetForm()
            }}
        >
            {
                (props: FormikProps<InitialValues>) => {
                    return (
                        <Form className='min-h-screen p-[100px]'>
                            <div className='flex flex-col'>
                                <label htmlFor="name">Name</label>
                                <Field name={'name'} type={'text'} />
                                <ErrorMessage name={'name'} component={'div'} className='text-red-600' />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="email">Email</label>
                                <Field name={'email'} type={'email'} />
                                <ErrorMessage name={'email'} component={'div'} className='text-red-600' />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="password">Password</label>
                                <Field name={'password'} type={show ? 'text' : 'password'} />
                                <button type='button' onClick={() => setShow(!show)} >{show ? 'hide' : 'show'}</button>
                                <ErrorMessage name={'password'} component={'div'} className='text-red-600' />
                            </div>
                            <button type='submit'>Submit</button>
                        </Form>
                    )
                }
            }
        </Formik>
    </div>
    )
}