/* eslint-disable jsx-a11y/anchor-is-valid */
import { type } from "@testing-library/user-event/dist/type";
import { Button } from "bootstrap";
import {React,useContext} from "react";
import { Appcontext } from "./App";

const Paginate = () => {

  const{currentPage,setCurrentPage,}=useContext(Appcontext);
  const pageNumbers = [];
    const totalPages=250;
    console.log(totalPages)

  for (let i = parseInt(currentPage) - 1; i >= currentPage - 3; i--) {
    if (i > 0 && i <= totalPages) {
      pageNumbers.push(i);
    }
  }

  for (let i = parseInt(currentPage); i <= currentPage + 3; i++) {
    if (i <= totalPages && i > 0) {
      pageNumbers.push(i);
      console.log(pageNumbers)

    }
   
  }

  pageNumbers.sort((a, b) => a - b);

  const previousPage = () => {
    if (currentPage - 1 >= 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage + 1 <= totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  console.log(currentPage,"pagination page")
  return (
    <>
      <div>
        <nav aria-label="Page navigation example mt-5">
          <ul class="pagination justify-content-center">
            <li class="page-item ">
              <a class="page-link" href="" onClick={previousPage}>
                Previous
              </a>
            </li>
            <li class="page-item ">
              <a class="page-link">...</a>
            </li>
            {pageNumbers?.map((number, index) => (
              <>
                <li
                  class="page-item"
                  onClick={() => setCurrentPage(number)}
                  key={index}
                >
                  <a
                    class="page-link"
                    className={
                      currentPage === number ? "page-link active" : "page-link"
                    }
                    href="#"
                  >
                    {number}
                  </a>
                </li>
              </>
            ))}
            <li class="page-item ">
              <a class="page-link">...</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#" onClick={nextPage}>
                Next
              </a>

              {console.log(currentPage)}
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Paginate;
