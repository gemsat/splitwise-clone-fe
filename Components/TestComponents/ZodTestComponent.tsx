import { formSchema , FormDataTypes } from '../../src/schemas'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import './ZodTestComponentCss.css';
import React from 'react';


export function ZodTestComponent() {

    const { register, handleSubmit, formState: {errors} } = useForm<FormDataTypes>({ resolver: zodResolver(formSchema) });

    const submitData = (data : FormDataTypes) => {
        console.log("Data: ",data);
    };

    return (
        <>
            <form onSubmit={handleSubmit(submitData)}>
                <label>First Name: </label>
                <input type="text" {...register("firstName")}/>
                {errors.firstName && <span>{errors.firstName.message}</span>}
                <label>Last Name: </label>
                <input type="text" {...register("lastName")}/>
                {errors.lastName && <span>{errors.lastName.message}</span>}
                <label>Email: </label>
                <input type="email" {...register("email")}/>
                {errors.email && <span>{errors.email.message}</span>}
                <label>Age: </label>
                <input type="number" {...register("age" , { valueAsNumber: true})}/>
                {errors.age && <span>{errors.age.message}</span>}
                <label>Password: </label>
                <input type="password" {...register("password")}/>
                {errors.password && <span>{errors.password.message}</span>}
                <label>Confirm Password: </label>
                <input type="password" {...register("confirmPassword")}/>
                {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
                <input type="submit" />
            </form>
        </>
    );

}