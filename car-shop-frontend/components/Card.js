import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'



export default function Card(){
    return(
        <>
         <h1 className='text-center text-success'>Cards</h1>

            <div className='container'>
            <div className='row'>
                <div className='col-md-4'>
                <div className="card ">
                <img src="" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
                </div>
                <div className='col-md-4'>
                <div className="card "
                    style={{ backgroundImage: "url(images/car-1.jpg)" }}>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
                </div>
                <div className='col-md-4'>
                <div className="card "
                    style={{ backgroundImage: "url(images/car-1.jpg)" }}>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
                </div>
            </div>
        </div>


       
        
        
        </>
    )
}
