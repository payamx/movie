import React from 'react';

import {BrowserRouter, Route, Routes} from "react-router-dom";
import {createContext} from 'react';

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import SharedLinks from "./Component/Sharedlinks";
import Login from "./Page/Login"
import Home from "./Component/Home";
import Singlecard from "./Component/Singlecard";
import Signup from "./Page/Signup";
import Counter from "./counter";
import {Provider} from "react-redux";
import ReduxTest from "./Page/ReduxTest";
import {store} from "./Redux/Store"
import {Comment} from "./Component/Comment";

function App() {




    return (
        <div>
            <Provider store={store} >
                    <BrowserRouter>

                        <Routes>
                            <Route element={<SharedLinks/>}>
                                <Route index element={<Home/>}/>
                                <Route path="/movies/:cardId" element={<Singlecard/>}/>
                                {/*<Route path="/movies/category/:catId" element={<Category/>}/>*/}
                                <Route path="*" element={<h1>error page</h1>}/>
                                <Route path="login" element={<Login/>}/>
                                <Route path="signup" element={<Signup/>}/>
                                <Route path="counter" element={<Counter/>}/>
                                <Route path="redux" element={<ReduxTest/>} />
                                <Route path="comment" element={<Comment/>} />


                            </Route>
                        </Routes>

                    </BrowserRouter>
            </Provider>



        </div>
    );
}

export default App;
