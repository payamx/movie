import React, {useState} from 'react';
import {useDispatch ,useSelector} from "react-redux";
import { getName, getPassword,  } from "../Redux/Store";

const ReduxTest = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const dispatch =useDispatch();
    const selector=useSelector(state => state);
    const handleSubmit=(e)=>{
        dispatch(getName({username:name}))
        dispatch(getPassword({password:password}))
        setName('');
        setPassword('');
    }
    return (
        <div>
            <div className="container">
                <div className=" d-flex flex-column  text-center  my-5">
                        <form onSubmit={handleSubmit}>
                            <div className="  mb-4">
                                <input type="text" name="name"  onChange={(event) =>setName(event.target.value) }/>
                            </div>
                            {/*<button onClick={()=>dispatch(getName({username:name}))}>button</button>*/}
                            <div className="  mb-4">
                                <input type="text" name="password" onChange={event => setPassword(event.target.value)}/>
                                {/*<button onClick={()=>dispatch(getPassword({password:password}))}>button</button>*/}

                            </div>
                            <button type="submit">submit</button>
                        </form>

                </div>
                {selector.username}
                {selector.password}
            </div>
        </div>
    );
};

export default ReduxTest;
