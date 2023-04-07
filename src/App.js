import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import SharedLinks from "./Sharedlinks";
import Login from "./Login"
import Home from "./Home";
import Singlecard from "./Singlecard";


function App() {


    return (
        <>

            <BrowserRouter>

                <Routes>
                    <Route element={<SharedLinks/>}>
                        <Route index element={<Home/>}/>
                        <Route path="/movies/:cardId" element={<Singlecard/>}/>
                        {/*<Route path="/movies/category/:catId" element={<Category/>}/>*/}
                        <Route path="login" element={<Login/>}/>
                        <Route path="*" element={<h1>erro page</h1>}/>
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
        </>
    );
}

export default App;
