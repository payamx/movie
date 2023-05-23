import React, {useState} from 'react'
import {Outlet} from 'react-router-dom'
import Navbartop from '../Navbar'

const Sharedlinks = () => {

    return (
        <>


            <Navbartop/>

            <Outlet/>


        </>


    )
}

export default Sharedlinks