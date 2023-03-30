import { useContext } from "react";
import {Appcontext} from "./App"

function Cards() {

  const {data} = useContext(Appcontext);
  
  return (
    <>
      <div class=" container ">
        <div class=" row  ">
          {data?.map((item) => (
            <div class="col-6  col-md-2 g-md-3" key={item.id}>
              <div class="card">
                <img src={item.poster} class="card-img-top " alt="..." />
                <div class="card-body">
                  <h5 class="card-title text-truncate fs-6">{item.title}</h5>
                  <p class="card-text"> </p>
                  <a href={`/movies/${item.id}`}  target="_blank" class="btn btn-primary">
                    Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
       

      </div>
    </>
  );
}

export default Cards;
