import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from "axios";

const Signup = () => {
    const [error, setError] = useState('');

    const schema = yup.object().shape({
        firstName: yup.string().required(),
        email: yup.string().required(),
        password: yup.string().min(4).required(),
        confirmpassword: yup.string().oneOf([yup.ref("password"), null]).required()
    });
    const {register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(schema)})

    const onsubmit = async (data) => {
        console.log(data, "before sync")
        try {
            const response = await axios.post("https://moviesapi.ir/api/v1/register",
                JSON.stringify(    {
                    name: "firstName",
                    email: "email",
                    password: "confirmPassword"
                })
            ,{
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
            console.log(response.data, "resone")
        } catch (e) {
            console.log(e.response.data.message)
            setError(error.response.data.message);

        }

    }
    return (

        <div className="d-flex mx-auto col-md-4 border border-1 my-5  px-3">
            <form onSubmit={handleSubmit(onsubmit)} className="container-sm mt-5 ">
                <div className=" pb-3 "><h4>Sign up</h4></div>

                <div >
                    <div className=" mb-3 ">


                        <label htmlFor="firstName" className="form-label">First name</label>
                        <input type="text" className="form-control" id="firstName" placeholder="Enter your first name"
                               {...register("firstName")}  />
                    </div>

                </div>
                <p>{errors.firstName?.message}</p>

                <div className="mb-3 ">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter your email"
                           {...register("email")}
                    />
                </div>
                <p>{errors.email?.message}</p>

                <div className="mb-3 ">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Enter your password"
                           {...register("password")}
                    />
                    <p>{errors.password?.message}</p>

                </div>
                <div className="mb-3 ">
                    <label htmlFor="confirmPassword" className="form-label">Confirm password</label>
                    <input type="password" className="form-control" id="confirmpassword"
                           placeholder="Confirm your password"
                           {...register("confirmpassword")}/>
                    <p>{errors.confirmpassword?.message}</p>

                </div>

                <div className="text-center">
                    <button type="submit" className="btn btn-primary rounded-5 px-4 py-2">Register</button>
                    {error && <p>{error}</p>}

                </div>
            </form>
        </div>

    )
}
export default Signup;
