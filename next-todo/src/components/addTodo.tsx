"use client"
import { addTodo } from '@/app/action'
import axios from 'axios'
import { ErrorMessage, Field, Form, Formik, FormikProps } from 'formik'
import * as yup from 'yup'

const todoSchema = yup.object().shape({
    todo: yup.string().required("todo is required")
})

export interface MyFormValue {
    todo: string
}

interface IProps {
    onReload: () => void
}

export default function AddTodo({ onReload }: IProps) {
    const initialValues: MyFormValue = { todo: "" }

    const handleAdd = async (values: MyFormValue) => {
        try {
            // await axios.post("http://localhost:2000/todo", {
            //     desc: values.todo,
            //     isCompleted: false
            // })
            await addTodo(values)
            onReload()
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={todoSchema}
            onSubmit={(values, action) => {
                // console.log(values)
                handleAdd(values)
                action.resetForm()
            }}
        >
            {(props: FormikProps<MyFormValue>) => {
                return (
                    <Form>
                        <div className='flex gap-5 mt-[10px]'>
                            <Field type="text" name="todo" />
                            <button type='submit' >Add</button>
                        </div>
                        <ErrorMessage 
                            name='todo' 
                            component="div" 
                            className='text-[12px] text-red-500' 
                        />
                    </Form>
                )
            }}
        </Formik>
    )
}