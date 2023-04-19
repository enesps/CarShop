import Head from "next/head";
import React,{ useState } from "react";

export const getStaticProps = async () => {
  const request = await fetch(
      `http://localhost:2000/api/customers`     
  );
  const customers = await request.json();

  const request2 = await fetch(
    `http://localhost:2000/api/company`     
);
const companies = await request2.json();

  return {
      props: {
          customers,
          companies
      },
  };
}
function Company({ customers,companies }){
  
  const [Email,setEmail]=useState("");
  const [TC,setTC]=useState("");
  const [Name,setName]=useState("");
  const [Address,setAddress]=useState("");
  const[error, setError] = useState(null);
  
  const customersArray = Array.from(customers.data);

  const hasMatch = customersArray.some(
      (customer) => customer.Email === Email
  );

  const companyArray = Array.from(companies.data);

  const hasMatch2 = companyArray.some(
      (company) => company.Name === Name
  );



  async function addCompany()
  {
      
    if (!hasMatch) {

      alert("You need to sign up/log in first!");
      setError("You need to sign up/log in first!");
      
    } 
    else if(hasMatch2){
      alert("This company is already registered!");
      setError("This company is already registered!");
    }
    else{

      let Customer_ID = await fetch('http://localhost:2000/api/customers/getID/' + Email)
      Customer_ID = await Customer_ID.json();
      console.log("tojson: ", Customer_ID.data.Customer_ID)
      Customer_ID = Customer_ID.data.Customer_ID;
      let item={Name,Address,Customer_ID,TC}
      console.warn(item)

      let result = await fetch("http://localhost:2000/api/company",{
        method:'POST',
        body: JSON.stringify(item),
        headers:{
          "Content-Type":'application/json',
          "Accept":"application/json"
        }
      })
      result = await result.json();
      alert("Succesful!")
      console.warn("Result: ", result)

  }
}

  return(
    <>
      <Head>
        <title />
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="css/open-iconic-bootstrap.min.css" />
        <link rel="stylesheet" href="css/animate.css" />
        <link rel="stylesheet" href="css/owl.carousel.min.css" />
        <link rel="stylesheet" href="css/owl.theme.default.min.css" />
        <link rel="stylesheet" href="css/magnific-popup.css" />
        <link rel="stylesheet" href="css/aos.css" />
        <link rel="stylesheet" href="css/ionicons.min.css" />
        <link rel="stylesheet" href="css/bootstrap-datepicker.css" />
        <link rel="stylesheet" href="css/jquery.timepicker.css" />
        <link rel="stylesheet" href="css/flaticon.css" />
        <link rel="stylesheet" href="css/icomoon.css" />
        <link rel="stylesheet" href="css/style.css" />
      </Head>
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-5">
              <h2 className="heading-section">Join Us With Your Company</h2>
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
            <form action="#" className="signin-form" >
              <div className="form-group mt-3">
                <label className="form-control-placeholder" htmlFor="TC">
                  TC No:
                </label>
                <input type="text" value={TC} onChange={(e)=>setTC(e.target.value)} className="form-control" name="tc" required="" />
              </div>
              <div className="form-group mt-3">
                <label className="form-control-placeholder" htmlFor="Email">
                  Email
                </label>
                <input type="email" value={Email} onChange={(e)=>setEmail(e.target.value)} className="form-control" name="email" required="" />
              </div>
              <div className="form-group mt-3">
                <label className="form-control-placeholder" htmlFor="companyName">
                  Company Name:
                </label>
                <input type="text" value={Name} onChange={(e)=>setName(e.target.value)}className="form-control" name="name" required=""/>
              </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" htmlFor="Adress" class="form-label">
            Address</label>
          <textarea class="form-control" value={Address} onChange={(e)=>setAddress(e.target.value)} id="exampleFormControlTextarea1" rows="3" name="address"></textarea>
        </div>                            
              {error && <p>{error}</p>}
              <div className="form-group" >
                <button
                  type="button"
                  onClick={addCompany}
                  className="form-control btn btn-primary rounded submit px-3">
                  Add Company
                </button>
              </div>
            </form>
            {/* <p className="text-center">
              Already a member? {" "}
              <a data-toggle="tab" href="/login">
                Sign In
                </a>
            </p> */}
          </div>
        </div>
      </div>
    </div>

        </div>
      </section>
    </>
  );
}


export default Company;
