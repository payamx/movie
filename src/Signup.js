import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
const Signup = () => {
    const schema = yup.object().shape({
        firstName: yup.string().required(),
        email: yup.string().required(),
        password: yup.number().min(4).positive().integer().required(),
        confirmpassword: yup.string().oneOf([yup.ref("password")], null).required()
    });
    const {register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(schema)})

    const  onsubmit=(data)=>{
        console.log(data)
    }
    return (

        <div className="d-flex mx-auto col-md-4 border border-1 mt-5 p-4">
            <form onSubmit={handleSubmit(onsubmit)} className="container-sm mt-5 ">
                <div className="">
                    <div className=" mb-3">
                        <label htmlFor="firstName" className="form-label">First name</label>
                        <input type="text" className="form-control" id="firstName" placeholder="Enter your first name"
                               required/>
                    </div>
                    <div className=" mb-3">
                        <label htmlFor="lastName" className="form-label">Last name</label>
                        <input type="text" className="form-control" id="lastName" placeholder="Enter your last name"
                               required/>
                    </div>
                </div>

                <div className="mb-3 ">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter your email" required/>
                </div>

                <div className="mb-3 ">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Enter your password"
                           required/>
                </div>

                <div className="mb-3 ">
                    <label htmlFor="confirmPassword" className="form-label">Confirm password</label>
                    <input type="password" className="form-control" id="confirmPassword"
                           placeholder="Confirm your password" required/>
                </div>


                <div className="text-center">
                    <button type="submit" className="btn btn-primary rounded-5 px-4 py-2">Register </button>

                </div>
            </form>
        </div>

    )
}
export default Signup;
