import React from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from "react";
import { Appcontext } from "./App"



const Singlecard = () => {

  const { data } = useContext(Appcontext);

  const { cardId } = useParams();

  const datacard = data.find((item) => {

    return item.id === parseInt(cardId);

  })
console.log(data)
  return (

    <>
      {datacard && <div class="container  d-flex flex-row-reverse  ">
        <div class="  card " style={{ width: "18rem" }}>
          <img src={datacard.poster} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{datacard.title}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>}


    </>

  )
}

export default Singlecard