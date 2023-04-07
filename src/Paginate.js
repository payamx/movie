import {React} from "react";

const Paginate = ({currentPage, totalPages, setCurrentPage}) => {

    const pageNumbers = [];

    for (let i = parseInt(currentPage) - 1; i >= currentPage - 3; i--) {
        if (i > 0 && i <= totalPages) {
            pageNumbers.push(i);
        }
    }

    for (let i = parseInt(currentPage); i <= currentPage + 3; i++) {
        if (i <= totalPages && i > 0) {
            pageNumbers.push(i);

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

    return (<>
        <div>
            <nav aria-label="Page navigation example mt-5">
                <ul className="pagination justify-content-center">
                    <li className="page-item ">
                        <a className="page-link" href="" onClick={previousPage}>
                            Previous
                        </a>
                    </li>
                    <li className="page-item ">
                        <a className="page-link">...</a>
                    </li>
                    {pageNumbers?.map((number, index) => (<>
                        <li
                            className="page-item"
                            onClick={() => setCurrentPage(number)}
                            key={index}
                        >
                            <a
                                className={currentPage === number ? "page-link active" : "page-link"}
                                href="#"
                            >
                                {number}
                            </a>
                        </li>
                    </>))}
                    <li className="page-item ">
                        <a className="page-link">...</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#" onClick={nextPage}>
                            Next
                        </a>

                    </li>
                </ul>
            </nav>
        </div>
    </>);
};

export default Paginate;
