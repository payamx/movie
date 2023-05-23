import React, {createContext, useState} from 'react';

const Authprovider =createContext({});
export const Authcontext = ({children}) => {
    const [Auth, setAuth] = useState({});


    return (
        <div>
            <Authprovider value={{setAuth,Auth}}>
                {children}
            </Authprovider>
        </div>
    );
};

export default Authprovider;
