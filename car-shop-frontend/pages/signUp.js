import Head from "next/head";
import React,{ useState } from "react";


export const getStaticProps = async () => {
  const request = await fetch(
      `http://localhost:2000/api/customers`
  );
  const customers = await request.json();

  return {
      props: {
          customers,
      },
  };
}

function signUp({ customers }){
  const [Name_Surname,setNameSurname]=useState("");
  const [Address,setAddress]=useState("");
  const [Email,setEmail]=useState("");
  const [Password,setPassword]=useState("");
  const [tel_no,setTelNo]=useState("");
  const[error, setError] = useState(null);
  

  const customersArray = Array.from(customers.data);

  const hasMatch = customersArray.some(
      (customer) => customer.Email === Email
  );


  async function Register()
  {
      
    if (hasMatch) {

      alert("This email is already registered.");
      setError("This email is already registered.");
      
    } 
    else{
      let item={Name_Surname,Address,Email,Password,tel_no}
      console.warn(item)

      let result = await fetch("http://localhost:2000/api/customers",{
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
        <h2 className="heading-section">Sign Up</h2>
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
                <label className="form-control-placeholder" htmlFor="Name_Surname">
                  Name&Surname
                </label>
                <input type="text" value={Name_Surname} onChange={(e)=>setNameSurname(e.target.value)} className="form-control" name="name_surname" required="" />
              </div>
              <div className="form-group mt-3">
                <label className="form-control-placeholder" htmlFor="Email">
                  Email
                </label>
                <input type="email" value={Email} onChange={(e)=>setEmail(e.target.value)} className="form-control" name="email" required="" />
              </div>
              <div className="form-group mt-3">
                <label className="form-control-placeholder" htmlFor="tel_no">
                  Telephone number
                </label>
                <input type="tel" value={tel_no} onChange={(e)=>setTelNo(e.target.value)}className="form-control" name="tel_no" required="" pattern="[0-9]{11}"/>
              </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" htmlFor="Adress" class="form-label">
            Address</label>
          <textarea class="form-control" value={Address} onChange={(e)=>setAddress(e.target.value)} id="exampleFormControlTextarea1" rows="3" name="address"></textarea>
        </div>              
              <div className="form-group">
              <label className="form-control-placeholder" htmlFor="Password">
                  Password
                </label>
                <input
                  id="password-field"
                  type="password"
                  value={Password} onChange={(e)=>setPassword(e.target.value)}
                  className="form-control"
                  required=""
                  name='password'
                />                
              </div>
              
              {error && <p>{error}</p>}
              <div className="form-group" >
                <button
                  type="button"
                  onClick={Register}
                  className="form-control btn btn-primary rounded submit px-3"
                >
                  Sign Up
                </button>
              </div>
            </form>
            <p className="text-center">
              Already a member? {" "}
              <a data-toggle="tab" href="/login">
                Sign In
                </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>   
           
  
</>


    );

    
}

export default signUp;