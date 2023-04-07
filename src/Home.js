import React, {useEffect, useState} from 'react'
import Paginate from './Paginate'
import axios from "axios";
import SearchBar from "./SearchBar";
import Cards from "./Card";
import Category from "./Category";

const Home = () => {

    //data state
    const [data, setData] = useState([]);
    const [metadata, setMetaData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    //category sates
    const [categories, setCategories] = useState([]);
    const [catid, setCatid] = useState(null);

    //searching states
    const [search, setSearch] = useState(null)


    //paginate states
    const [currentPage, setCurrentPage] = useState(1);

    function setCategory(categoryId) {
        setSearch(null)
        setCatid(categoryId)
    }

    function setSearchName(search) {
        setSearch(search)
        setCatid(null)
    }

    useEffect(() => {

        const getData = async (currentPage) => {
            try {
                const response = await axios.get(`http://moviesapi.ir/api/v1/movies?page=${currentPage}`);
                setData(response.data.data);
                setMetaData(response.data.metadata)
                setError(null);
            } catch (err) {
                setError(err.message);
                setData(null);
            } finally {
                setLoading(false);
            }
        };

        getData(currentPage);

    }, [currentPage]);


    useEffect(() => {
        const searchMovies = async () => {
            try {
                const response = await axios.get(`http://moviesapi.ir/api/v1/movies?q=${search}&page=${currentPage}`);
                setData(response.data.data);
                setMetaData(response.data.metadata)
                setError(null);

                // setCurrentPage(1)
            } catch (err) {
                setError(err.message);
                setData(null);
            } finally {
                setLoading(false);
            }
        }
        if (search != null) {
            searchMovies();
        }
    }, [search]);

    useEffect(() => {


        const categories = async () => {
            try {
                const resp = await axios.get("https://moviesapi.ir/api/v1/genres");
                setCategories(resp.data);
            } catch (e) {

                setCategory(null)
                setError(e.message)

            }
        }
        categories();
    }, []);
    useEffect(() => {

        const categoryFind = async () => {
            try {
                const response = await axios.get(`https://moviesapi.ir/api/v1/genres/${catid}/movies?`);
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
        if (catid != null) {
            categoryFind();
        }


    }, [catid]);

    return (

        <>
            <div className="container-fluid">

                <div className=" d-flex row">
                    <div className="col justify-content-around mx-auto">
                        <SearchBar setSearch={setSearchName}/>

                    </div>
                </div>

                <div className="row d-flex flex-column-reverse flex-md-row my-auto">

                    <div className="  col-md-2 mx-auto my-auto">
                        <Category categories={categories} setCatid={setCategory}/>

                    </div>

                    <div className="col-md-10 mx-auto mb-3">

                        {data && <Cards cardData={data}/>}


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