import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {Comment} from './Comment'
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

            {data &&
                <div className=" container  ">
                    <div className="  my-5   ">

                        <div className="  card flex-md-row bg-transparent bg-opacity-75 text-start shadow-lg">

                            <div className="   col-md-3">
                                <img className="card-img-top shadow   " src={data.poster} alt="Card image cap"/>

                            </div>
                            <div className="col-md-5   ">

                                <div
                                    className="card-body bg-warning bg-transparent
                                    ">
                                    <h5 className="card-title  mb-4">{data.title}</h5>
                                    <div className=" d-flex mx-2 mb-5">
                                        <strong className="pt-">Genre :</strong>
                                        {data.genres?.map((item) => <div className="   px-2
                                          text-dark bg-warning bg-opacity-75 rounded-pill mx-1"><small>{item}</small>
                                        </div>)}
                                    </div>
                                    <div className="">
                                        <p className="card-text  ">{data.plot}</p>

                                    </div>

                                    <div className="d-flex my-4 align-items-center">
                                        <img width="32" height="32"
                                             src="https://img.icons8.com/cotton/64/the-oscars--v1.png"
                                             alt="the-oscars--v1"/>
                                        <p className="pt-3"> {data.awards} </p>


                                    </div>


                                </div>
                            </div>
                            <div className="col4">
                                <div className=" d-flex flex-sm-column justify-content-around">
                                    <div className=" d-flex   ">
                                        <img width="48" height="48" src="https://img.icons8.com/color/48/imdb.png"
                                             alt="imdb"/>
                                        <div className="p-3"><strong>{data.imdb_rating}</strong> <small>/10</small>

                                        </div>
                                    </div>
                                    <div className="  d-flex   ">
                                        <img width="48" height="48"
                                             src="https://img.icons8.com/color/48/calendar--v1.png" alt="calendar--v1"/>
                                        <p className="p-3"> {data.year} </p>

                                    </div>
                                </div>


                            </div>
                        </div>

                    </div>
                </div>


            }
                <Comment/>
        </>

    )
}

export default Singlecard