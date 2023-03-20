

function Cards({data}) {

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
                  <p class="card-text">asdfasdfasfasf asdfa  asdfa s asd fas fasd fa fs </p>
                  <a href="!#" class="btn btn-primary">
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
