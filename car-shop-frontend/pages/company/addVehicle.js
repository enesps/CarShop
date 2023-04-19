import Head from "next/head";
import React,{ useState } from "react";


function createVehicle({}){
  const [companyID,setCompany]=useState("");
  const [brand,setBrand]=useState("");
  const [model,setModel]=useState("");
  const [year,setYear]=useState("");
  const [fuelID,setFuel]=useState("");
  const [color,setColor]=useState("");
  const [desc,setDesc]=useState("");
  const [img, setImg]=useState("");
  const[error, setError] = useState(null);
  

  async function addVehicle()
  {
      let vehicle ={companyID,brand, model, year, fuelID, color, desc, img}
      console.warn(item)

      let result = await fetch("http://localhost:2000/api/vehicle",{
        method:'POST',
        body: JSON.stringify(vehicle),
        headers:{
          "Content-Type":'application/json',
          "Accept":"application/json"
        }
      })
      result = await result.json();
      alert("Succesful!")
      console.warn("Result: ", result)
}
    return(
        <>
      <Head>
            <title />
            <meta charSet="utf-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <link
                href="https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800&display=swap"
                rel="stylesheet" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <link rel="stylesheet" href="css/open-iconic-bootstrap.min.css" />
            <link rel="stylesheet" href="css/animate.css" />
            <link rel="stylesheet" href="css/owl.carousel.min.css" />
            <link rel="stylesheet" href="css/owl.theme.default.min.css" />
            <link rel="stylesheet" href="css/magnific-popup.css" />
            <link rel="stylesheet" href="css/aos.css" />
            <link rel="stylesheet" href="css/ionicons.min.css" />
            <link rel="stylesheet" href="css/flaticon.css" />
            <link rel="stylesheet" href="css/icomoon.css" />
            <link rel="stylesheet" href="css/style.css" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
        </Head>
        

        <section className="ftco-section">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-6 text-center mb-5">
        <h2 className="heading-section">Create&Add Vehicle</h2>
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-md-7 col-lg-5">
        <div className="wrap">
          <div
            className="img"
            style={{ backgroundImage: "url(images/bg-1.jpg)" }}
          />
          <div className="login-wrap p-4 p-md-5">
            <form action="#" className="createVehicle-form" >
              <div className="form-group mt-3">
                <label className="form-control-placeholder" htmlFor="Brand">
                  Brand
                </label>
                <input type="text" value={brand} onChange={(e)=>setBrand(e.target.value)} className="form-control" name="brand" required="" />
              </div>
              <div className="form-group mt-3">
                <label className="form-control-placeholder" htmlFor="Model">
                  Model
                </label>
                <input type="text" value={model} onChange={(e)=>setModel(e.target.value)} className="form-control" name="model" required="" />
              </div>
              <div className="form-group mt-3">
                <label className="form-control-placeholder" htmlFor="year">
                  Year
                </label>
                <input type="year" value={year} onChange={(e)=>setYear(e.target.value)}className="form-control" name="year" required="" pattern="[0-9]{4}"/>
              </div>

                  {/* Fuel Type
                 */}
              <div className="form-group mt-3">
                <label className="form-control-placeholder" htmlFor="Color">
                  Color
                </label>
                <input type="text" value={color} onChange={(e)=>setColor(e.target.value)} className="form-control" name="color" required="" />
              </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" htmlFor="Desc" class="form-label">
            Description
            </label>
          <textarea class="form-control" value={desc} onChange={(e)=>setDesc(e.target.value)} id="exampleFormControlTextarea1" rows="3" name="desc"></textarea>
        </div>    

        {/* IMG */}

              <div className="form-group" >
                <button
                  type="button"
                  onClick={addVehicle}
                  className="form-control btn btn-primary rounded submit px-3">
                  Add Car
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>   
           
  
</>


    );

    
}

export default createVehicle;