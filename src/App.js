import {createContext, useEffect, useState} from "react";
import axios from "axios";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import SharedLinks from "./Sharedlinks";
import Login from "./Login"
import Home from "./Home";
import Singlecard from "./Singlecard";


//creating context api
export const AppContext = createContext();


function App() {

    //fetching data states

    const [data, setData] = useState([]);
    const [metadata, setMetaData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [currentPage, setCurrentPage] = useState(10);
    const [postperpage, setpostperpage] = useState(10);
    // fetching from api
    useEffect(() => {


        const getData = async () => {

            try {
                const response = await axios.get(`http://moviesapi.ir/api/v1/movies?page=${currentPage}`);


                // const response = await axios.get(`http://moviesapi.ir/api/v1/movies`,{ params: { page: currentPage } });

                setData(response.data.data);
                setMetaData(response.data.metadata)
                // console.log(response.data)
                setError(null);
            } catch (err) {
                setError(err.message);
                setData(null);
            } finally {
                setLoading(false);
            }
        };

        getData();

    }, [currentPage]);

    //current page states


    //current page logic
    const lastpostindex = currentPage * postperpage;
    const firstpostindex = lastpostindex - postperpage;
    const currentposts = data.slice(firstpostindex, lastpostindex)


    return (
        <>
            <AppContext.Provider value={{data, postperpage, setCurrentPage, currentPage}}>

                <BrowserRouter>

                    <Routes>
                        <Route element={<SharedLinks/>}>

                            <Route index element={<Home/>}/>


                            <Route path="/movies/:cardId" element={<Singlecard/>}/>

                            <Route path="login" element={<Login/>}/>

                            <Route path="*" element={<h1>erro page</h1>}/>
                        </Route>
                    </Routes>

                </BrowserRouter>

            </AppContext.Provider>


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
