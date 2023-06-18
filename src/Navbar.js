

import category from "./Component/Category";
import Category from "./Component/Category";
function Navbartop() {




    return (
        <>
            <nav className="navbar  navbar-expand-lg navbar-dark bg-dark  shadow fixed-top " >
                <div className="container ">
                    <a className="navbar-brand " href="/">
                        Home
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    aria-current="page"
                                    href="#google.com"
                                >
                                    Movie
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Tv show
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Signup/Login
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <a className="dropdown-item" href="/signup">
                                            Signup
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/login">

                                            Login
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/logout">
                                            Logout
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="  list-unstyled   d-sm-none">
                                <a className="nav-link dropdown-toggle" href="#" id="categoryId" role="button"
                                   data-bs-toggle="dropdown" aria-expanded="false">
                                    Category
                                </a>
                                <ul className="dropdown-menu bg-warning " aria-labelledby="categoryId">
                                    <li><a className="dropdown-item  text-white bg-dark" href="#">{<Category/>}</a></li>
                                </ul>
                            </li>
                        </ul>



                    </div>
                </div>
            </nav>

            {/* carousel */}

            <div
                id="carouselExampleCaptions"
                className="carousel slide   "
                data-bs-ride="carousel "
            >
                <div className="carousel-indicators" >
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>

                <div className="carousel-inner   ">
                    <div className="carousel-item active">
                        <img
                            src="https://www.trendycovers.com/covers/The_Avengers_facebook_cover_1336117616.jpg"
                            className="d-block w-100"
                            alt="..."
                        />
                        <div className="carousel-caption d-none d-md-block"></div>
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://i.pinimg.com/originals/85/be/7f/85be7f5766e64a4edcf17a02f9cfa0cd.jpg"
                            className="d-block w-100"
                            alt="..."
                        />
                        <div className="carousel-caption d-none d-md-block "></div>
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://www.fbcoverforyou.com/fbcover/movies/fb-covers-star-wars1.jpg"
                            className="d-block w-100"
                            alt="..."
                        />
                        <div className="carousel-caption d-none d-md-block"></div>
                    </div>
                </div>
            </div>


        </>
    );
}

export default Navbartop;
