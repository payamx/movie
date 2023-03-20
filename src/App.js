
import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Navbartop from "./Navbar";
import Cards from "./Card";
import Paginate from "./Paginate";

function App() {

  //fetching data states

  const [data, setData] = useState([]);
  const [metadata, setMetaData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [postperpage, setpostperpage] = useState(10);
  // fetching from api
  useEffect(() => {


    const getData = async () => {

      try {
        const response = await axios.get(`http://moviesapi.ir/api/v1/movies?page=${currentPage}`);

        console.log("http://moviesapi.ir/api/v1/movies?page=", currentPage)

        // const response = await axios.get(`http://moviesapi.ir/api/v1/movies`,{ params: { page: currentPage } });

        setData(response.data.data);
        // console.log(response.data,"app page")
        console.log(currentPage, "app page")
        setMetaData(response.data.metadata);
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
      <br />
      <hr />
      <Navbartop />
      <br />
      <hr />
      <Cards data={data} />

      <Paginate totalPages={metadata?.total_count} postperpage={postperpage}

        currentPage={currentPage} setcurrent={setCurrentPage} />

      {/* <PouyaPagination totalPages={metadata?.page_count} currentPage={currentPage} onPageChenged={setCurrentPage} /> */}
      <br />
      <hr /> <br />
      <hr /> <br />
      <hr /> <br />
      <hr /> <br />
      <hr /> <br />
      <hr />
    </>
  );
}

export default App;
