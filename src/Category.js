import React from 'react';

const Category = ({categories, setCatid}) => {


    return (

        <>
            <div>

                <div
                    className="d-flex flex-column    ">

                    {categories?.map((category) => (
                        <ul className="  ">

                            <li className=" d-flex  flex-row me-auto justify-content-between pb-1 border-bottom  "
                                key={category.id}>
                                <div type="button" className="  "
                                     onClick={() => {
                                         setCatid(category.id)
                                     }}>{category.name}
                                </div>

                                <span className="badge bg-primary rounded-pill px-2">14</span>

                            </li>
                        </ul>

                    ))}

                </div>


            </div>


        </>
    );
};

export default Category;
