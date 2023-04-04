import {useContext, useState} from "react";
import {AppContext} from "./App"

function Cards() {

    const [searchName, setSearchName] = useState("")
    const {data} = useContext(AppContext);
    return (<>
        <div className=" container ">
            <div className="row mb-5">
                <div className="col-md-6 col-9 mt-3 mx-auto">
                    <form>
                        <div className="input-group">
                            <input type="text" onChange={(e) => {
                                setSearchName(e.target.value)
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
            <div className=" row  ">
                {data?.filter((item) => {
                    if (item && item.title === "") {
                        return item
                    } else if (item.title.toLowerCase().includes(searchName.toLowerCase())) {
                        return item
                    }
                }).map((item) => (<div className="col-6  col-md-2 g-md-3" key={item.id}>
                    <div className="card">
                        <img src={item.poster} className="card-img-top " alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title text-truncate fs-6">{item.title}</h5>
                            <p className="card-text"></p>
                            <a href={`/movies/${item.id}`} target="_blank" className="btn btn-primary">
                                Details
                            </a>
                        </div>
                    </div>
                </div>))}
            </div>


        </div>
    </>);
}

export default Cards;
