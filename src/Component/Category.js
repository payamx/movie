import React from 'react';

const Category = ({categories, setCatid}) => {


    return (

        <>
            <div>

                <div
                    className=" d-none d-md-flex flex-md-column    ">

                    {categories?.map((category) => (
                        <ul className="  ">

                            <li className=" d-flex  flex-row me-auto justify-content-between pb-1 border-bottom  "
                                key={category.id}>
                                <div type="button" className="  "

                                     onClick={() => {
                                         setCatid(category.id)
                                     }}>{category.name}
                                </div>

                                <span className="badge bg-primary rounded-pill px-2"><img width="14" height="14" src="https://img.icons8.com/material-two-tone/24/movie-projector.png" alt="movie-projector"/></span>

                            </li>
                        </ul>

                    ))}

                </div>


            </div>


        </>
    );
};

export default Category;
