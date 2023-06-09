import React, {useReducer} from 'react';
import {ACTION_TYPES, counterReducer, initialCounter} from "./Reducer/Fetchreducer";

const Counter = () => {

    const [state, dispatch] = useReducer(counterReducer, initialCounter);


    return (
        <>
        <div className="mt-5 d-flex  mx-auto justify-content-center ">
            <button onClick={()=>dispatch({type:ACTION_TYPES.increment})}>increment</button>
            <button onClick={()=>dispatch({type:ACTION_TYPES.decrement})}>Decrement</button>
            <button onClick={()=>dispatch({type:ACTION_TYPES.reset})}>Reset</button>

        </div>
    <div className="d-flex justify-content-center">
        <p className="">{state.count}</p>

    </div>
    </>
    );
};

export default Counter;
