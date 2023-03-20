import { Button } from "bootstrap";
import React from "react";

const Paginate = ({ totalPages, postperpage, currentPage,setcurrent }) => {

  // const { totalPages, postperpage, currentPage,setcurrent }=props
  const pagenumbers = [];

  for (let i = 1; i <= Math.ceil( totalPages/ postperpage); i++) {

    pagenumbers.push(i);

  }
  const previousPage = () => {

    if (currentPage !== 1) {
      setcurrent(currentPage - 1);
    }
 };

 const nextPage = () => {

    if (currentPage !== Math.ceil(totalPages / postperpage)) {

      setcurrent(currentPage + 1);
    }
 };

//  const handle=(e,number)=>{
//     e.preventDefault();
//     setcurrent(number)
//  }
console.log(currentPage,"pagination page")
  return (
    <>

      <div>

          {/* <div className="pagination justify-content-center">
            {pagenumbers?.map((number,index)=>{
              return (
            <button key={index} onClick={()=> setcurrent(number)} className={number===currentPage? 'active':''}>{number}</button>
              )
            })
            }
            {console.log(currentPage,"akhrish")}
          </div> */}

        <nav aria-label="Page navigation example">

          <ul class="pagination justify-content-center">

            <li class="page-item ">

              <a class="page-link" href="!#"onClick={()=>previousPage} >Previous</a>
            </li>
            {pagenumbers?.map((number) => (

              <>
                
                <li class="page-item"onClick={()=>(setcurrent(number) )}  key={number}><a class="page-link" href="!#">{number}</a></li>

              </>))}
              {console.log(currentPage)}

            <li class="page-item">
              <a class="page-link" href="!#"onClick={()=>nextPage} >Next</a>

              {/* {console.log(currentPage)} */}

            </li>


          </ul>

        </nav>


      </div>
    </>
  );
};

export default Paginate;
