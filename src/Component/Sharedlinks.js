import React, {useState} from 'react'
import {Outlet} from 'react-router-dom'
import Navbartop from '../Navbar'
import Footer from "./Footer";


const Sharedlinks = () => {

    return (
        <>


            <Navbartop/>

            <Outlet/>

            <Footer/>
        </>


    )
}

export default Sharedlinks