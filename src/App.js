
import { useState, useEffect ,createContext} from "react";
import axios from "axios";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Navbartop from "./Navbar";
import Cards from "./Card";
import Paginate from "./Paginate";
import Paginatee from "./Paginatee";

import Sharedlinks from "./Sharedlinks";
import About from "./About";
import Login from "./Login"
import { AccordionButton } from "react-bootstrap";
import Home from "./Home";
import Singlecard from "./Singlecard";


  //creating context api 
  export const Appcontext=createContext();



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
    <Appcontext.Provider value={{data,postperpage,setCurrentPage,currentPage}}>

      <BrowserRouter>
    
    <Routes>
      <Route  element={<Sharedlinks/>}>

        <Route index element={<Home />}/>
        
      
      <Route path="/movies/:cardId" element={<Singlecard/>} />

      <Route path="login" element={<Login/>} />

        <Route path="*" element={<h1>erro page</h1>} />
      </Route>
    </Routes>
    
    </BrowserRouter>

    </Appcontext.Provider>
    






      <h1>از اینجا به پایین  با قبلی هست پراپس</h1>

      <br />
      <hr />
      {/* <Navbartop /> */}
      <br />
      <hr />
      {/* <Cards data={data} />

      <Paginatee totalPages={metadata?.total_count} postperpage={postperpage}

        currentPage={currentPage} setcurrent={setCurrentPage} /> */}

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
