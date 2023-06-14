import React, {useEffect, useState} from 'react';
import axios from "axios";

export const Comment = () => {
    const [Data, setData] = useState({});

    useEffect(() => {
       const fetchApi=async ()=>{
           const response= await axios.get('https://dummyjson.com/comments?limit=6')
               await setData(response.data)
            console.log(Data)

       }
       fetchApi().then(r=>r);
    }, []);


    return (

        <div>


            <div className="container mb-5 ">

                <div className=" border border-dark border-opacity-50 rounded p-4  ">
                    <div className=" mb-5">
                        <h4 className=" fw-bold">Recent Comments</h4>
                        <div className="w-100"></div>
                        <p className=" fs-5 opacity-50"> Latest comments section by users</p>
                    </div>
                    {Data.comments?.map((item) =>

                    <div className="d-flex justify-content-start  ">

                        <div className="col-1  text-center  ">

                            <img className=" rounded-circle " width="80" height="80"
                                 src="https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg" a/>
                        </div>
                        <div className=" col-11 ms-1 text-start ">
                            <strong className="fs-5 lh-sm">{item.user.username}</strong>
                            <div className="w-100 pb-2"></div>
                            <time className="fs-6 ps-1 "> March 07,2021</time>
                            <p className="badge badge-rounded bg-primary text-white py-1 ms-2">Approved</p>
                            <img className=" opacity-50 ms-2" width="24" height="24"
                                 src="https://img.icons8.com/material-sharp/24/edit--v1.png" alt="edit--v1"/>
                            <img className="  ms-2" width="24" height="24"
                                 src="https://img.icons8.com/color/48/recurring-appointment--v1.png" alt="reboot"/>
                            <img className="  ms-2" width="24" height="24"
                                 src="https://img.icons8.com/color/48/filled-like.png" alt="filled-like"/>
                            <div className="text-start my-4">
                                <p>
                                    {item.body}
                                </p>
                            </div>
                            <div className="w-100 border-bottom my-3"></div>

                        </div>

                    </div>)}


                </div>

            </div>

        </div>
    );
};

