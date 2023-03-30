
import React from 'react'
import { useContext } from "react";
import {Appcontext} from "./App"
import Cards from './Card'
import Paginate from './Paginate'
const Home = () => {
  return (

    <>
      <div>

      <Cards />

      <Paginate  />


      </div>

    
    </>
  )
}

export default Home