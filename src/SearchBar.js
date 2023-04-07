import React from 'react';

const SearchBar = ({setSearch}) => {


    return (
        <>
            <div className=" container ">
                <div className="row mb-5">
                    <div className="col-md-6 col-9 mt-3 mx-auto">
                        <form>
                            <div className="input-group">
                                <input type="text" onChange={(e) => {

                                    setSearch(e.target.value)
                                }} className="form-control"
                                       placeholder="Search..."/>
                                <div className="input-group-append">
                                    <button type="submit" className="btn btn-primary ms-3">
                                        search<i className="fa fa-search"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>

    );
}

export default SearchBar
