
function Cards({cardData}) {

    //search bar filter
// filter((item) => {if (item && item.title === "") {return item}
// else if (item.title.toLowerCase().includes(searchName.toLowerCase())) {return item}})
    return (<>
        <div>

            <div className=" row   " id="num">
                {cardData?.map((item) => (<div className="col-6  col-md-2 g-md-3" key={item.id}>
                    <div className="card card-main card:hover">
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
