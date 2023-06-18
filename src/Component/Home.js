import React, {useEffect, useReducer, useState} from 'react'
import Paginate from './Paginate'
import axios from "axios";
import SearchBar from "./SearchBar";
import Category from "./Category";
import {ACTION_FETCH, axiosReducer, initialState} from "../Reducer/Fetchreducer";
import Cards from "./Card";

const Home = () => {
    const [state, dispatch] = useReducer(axiosReducer, initialState);
    //data state
    // const [data, setData] = useState([]);
    const [metadata, setMetaData] = useState(null);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    //category sates
    const [categories, setCategories] = useState([]);
    const [catId, setCatId] = useState(null);

    //searching states
    const [search, setSearch] = useState(null)


    //paginate states
    const [currentPage, setCurrentPage] = useState(1);

    function setCategory(categoryId) {
        setSearch(null)
        setCatId(categoryId)
    }

    function setSearchName(search) {
        setSearch(search)
        setCatId(null)
    }

//gettin data from api per page
    useEffect(() => {

        const getData = async (currentPage) => {
            try {
                dispatch({type: ACTION_FETCH.FETCH_START})
                const response = await axios.get(`http://moviesapi.ir/api/v1/movies?page=${currentPage}`);
                dispatch({type: ACTION_FETCH.FETCH_SUCCESS, data: response.data.data});
                console.log(response.data.data)
                setMetaData(response.data.metadata)
            } catch (err) {
                dispatch({type: ACTION_FETCH.FETCH_FAIL})
            } finally {
                // dispatch({type: ACTION_FETCH.FINALLY})
            }
        };

        getData(currentPage);

    }, [currentPage]);

//search movies from api
    useEffect(() => {
        const searchMovies = async () => {
            try {
                dispatch({type: ACTION_FETCH.FETCH_START})

                const response = await axios.get(`http://moviesapi.ir/api/v1/movies?q=${search}&page=${currentPage}`);
                setMetaData(response.data.metadata)
                dispatch({type: ACTION_FETCH.FETCH_SUCCESS, data: response.data.data})
                // setCurrentPage(1)
            } catch (err) {
                dispatch({type: ACTION_FETCH.FETCH_FAIL})
            } finally {

                // dispatch({type: ACTION_FETCH.FINALLY})
            }
        }
        if (search != null) {
            searchMovies();
        }
    }, [search]);


    //getting category from api

    useEffect(() => {

        const categories = async () => {
            try {
                const resp = await axios.get("https://moviesapi.ir/api/v1/genres");
                setCategories(resp.data);
            } catch (e) {

                setCategory(null)

            }
        }
        categories();
    }, []);


    useEffect(() => {

        const categoryFind = async () => {
            try {
                const response = await axios.get(`https://moviesapi.ir/api/v1/genres/${catId}/movies?`);
                dispatch({type: ACTION_FETCH.FETCH_SUCCESS, data: response.data.data})
                setMetaData(response.data.metadata)
            } catch (err) {
                dispatch({type: ACTION_FETCH.FETCH_FAIL})
            } finally {
                // dispatch({type: ACTION_FETCH.FINALLY})
            }
        };
        if (catId != null) {
            categoryFind();
        }


    }, [catId]);
    return (

        <>
            <div className="container-fluid">

                <div className=" d-flex row">
                    <div className="col justify-content-around mx-auto">
                        <SearchBar setSearch={setSearchName}/>

                    </div>
                </div>

                <div className="row d-flex flex-column-reverse flex-md-row my-auto ">

                    <div className="  col-md-2 mx-auto my-auto">
                        <Category categories={categories} setCatid={setCategory}/>

                    </div>

                    <div className="col-md-10 mx-auto mb-3">

                        {state.data && <Cards cardData={state.data}/>}
                        {state.loading && <div className="d-flex justify-content-center">
                            <div className="spinner-border" role="status">
                                <span className="sr-only"></span>
                            </div>
                        </div>}


                    </div>
                </div>
                <div className="row">
                    <div className="col mx-auto my-5 justify-content-around">
                        {metadata && <Paginate setCurrentPage={setCurrentPage} currentPage={currentPage}
                                               totalPages={metadata.page_count}/>}
                    </div>
                </div>

            </div>

        </>)
}

export default Home