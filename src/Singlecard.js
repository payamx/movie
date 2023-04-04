import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from "axios";


const Singlecard = () => {

    const [data, setData] = useState([]);
    // const [metadata, setMetaData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const {cardId} = useParams();

    useEffect(() => {
        const getData = async (cardId) => {

            try {
                const response = await axios.get(`https://moviesapi.ir/api/v1/movies/${cardId}`);


                // const response = await axios.get(`http://moviesapi.ir/api/v1/movies`,{ params: { page: currentPage } });

                setData(response.data);
                // setMetaData(response.data.metadata)
                // console.log(response.data)
                setError(null);
            } catch (err) {
                setError(err.message);
                setData(null);
            } finally {
                setLoading(false);
            }
        };

        getData(cardId).then(r => r);

    }, [cardId]);


    // const dataCard = data.find((item) => {
    //
    //     return item.id === parseInt(cardId);
    //
    // })
    console.log(data)
    return (

        <>
            {/*    {data && <div className="container  d-flex flex-row-reverse  ">*/}
            {/*        <div className="  card " style={{width: "18rem"}}>*/}
            {/*            <img src={data.poster} className="card-img-top" alt="..."/>*/}
            {/*            <div className="card-body">*/}
            {/*                <h5 className="card-title">{data.title}</h5>*/}
            {/*                <p className="card-text">{data.plot}</p>*/}
            {/*                <a href="#" className="btn btn-primary">Go somewhere</a>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>}*/}
            {/*<hr/>*/}
            {data &&
                <div className="container ">
                    <div className="  d-flex  ">

                        <div className="card flex-md-row-reverse ">

                            <div className="col-md-3">
                                <img className="card-img-top  " src={data.poster} alt="Card image cap"/>

                            </div>
                            <div className="col-md-9 d-flex align-content-md-center flex-wrap bg-dark ">

                                <div
                                    className="card-body bg-warning h-50
                                    ">
                                    <h5 className="card-title ">{data.title}</h5>
                                    <p className="card-text ">{data.plot}</p>


                                </div>
                            </div>
                        </div>


                    </div>
                </div>


            }

        </>

    )
}

export default Singlecard