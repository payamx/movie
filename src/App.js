import React from 'react';

import {BrowserRouter, Route, Routes} from "react-router-dom";
import {createContext} from 'react';

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import SharedLinks from "./Sharedlinks";
import Login from "./Login"
import Home from "./Home";
import Singlecard from "./Singlecard";
import Signup from "./Signup";

function App() {

    return (
        <div>

                    <BrowserRouter>


                        <Routes>
                            <Route element={<SharedLinks/>}>
                                <Route index element={<Home/>}/>
                                <Route path="/movies/:cardId" element={<Singlecard/>}/>
                                {/*<Route path="/movies/category/:catId" element={<Category/>}/>*/}
                                <Route path="*" element={<h1>erro page</h1>}/>
                                <Route path="login" element={<Login/>}/>
                                <Route path="signup" element={<Signup/>}/>
                            </Route>
                        </Routes>

                    </BrowserRouter>





            <br/>
            <hr/>
            <br/>
            <hr/>


            <br/>
            <hr/>
            <br/>
            <hr/>
            <br/>
            <hr/>
            <br/>
            <hr/>
            <br/>
            <hr/>
            <br/>
            <hr/>
        </div>
    );
}

export default App;
