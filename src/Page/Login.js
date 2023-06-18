import React, {useEffect, useState,useRef} from 'react'
import axios from "axios";


const Login = () => {
    const userRef = useRef(null);
    const errorRef=useRef(null);

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setError('');

    }, [name,password]);


        const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                const response = await axios.post("https://moviesapi.ir/oauth/token",
                    JSON.stringify({
                        grant_type: "password",
                        username: name,
                        password: password,

                    })

                    , {
                        withCredentials: true,
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }

                    }
                )
                axios.defaults.headers.common['Authorization'] = `Bearer ${response?.data['token']}`;
                setName('');
                setPassword('');


    }catch (e) {
        if (!e.response){
            setError("no server respond");
        }else if (e.response.status===400){
            setError("username and password missing")
        }else  if(e.response.status===401){
            setError("unauthorized 401 error ")
        }else {
            setError("login faild")
        }
        errorRef.current.focus();
    }}



    return (
        <>

            <div className="container">
                <div className="row justify-content-center my-5">
                    <div className="col-md-6">
                        <div className="card">
                            <p>{error}</p>
                            <div className="card-header ">Login</div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="name ">name </label>
                                        <input type="name" className="form-control mb-3" id="name"
                                               placeholder="Enter name"
                                                onChange={e=>setName(e.target.value)}
                                               value={name}
                                               ref={userRef}
                                               required
                                               // onInvalid={e => e.target.setCustomValidity("plz insert name")}
                                               // onInput={e=>e.target.setCustomValidity(" ")}
                                        />
                                    </div>
                                    <div className="form-group ">
                                        <label htmlFor="password">Password</label>
                                        <input type="password" className="form-control mb-3" id="password"
                                               onChange={e=>setPassword(e.target.value)}
                                               value={password}
                                               required
                                               // onInvalid={e=>e.target.setCustomValidity("plz insert you password")}
                                               // onInput={e=>e.target.setCustomValidity("")}
                                               placeholder=" Enter Password"/>
                                    </div>
                                          <div  className="text-center">
                                              <button type="submit" className="btn btn-primary  ">Submit</button>

                                          </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login