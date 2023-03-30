import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import Navbartop from './Navbar'

const Sharedlinks = () => {
  return (
  <>


  <Navbartop/>

   <Outlet/>
  
  
  </>
    

  )
}

export default Sharedlinks