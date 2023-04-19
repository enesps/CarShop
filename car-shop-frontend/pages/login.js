import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import axios from 'axios';
import user from './api/user';

const Login = ({}) => {
    const router = useRouter();

    const handleSubmit = async (event) => {
        
        event.preventDefault();

        // Get the email and password values from the form
        const Email = event.currentTarget.email.value;
        const Password = event.currentTarget.password.value;
        let item={Email,Password}

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify(item);
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
       const res =  await fetch("http://localhost:2000/api/customers/login", requestOptions)           
          let obj = await res.json();
          console.log(obj)

          const user = await axios.post('api/auth/login', obj)

          if (user.status == 200)
              router.push("/dashboard/user");
        }

        // const handleGetUser = async () => {
        //   const user = await axios.get("/api/user");
      
        //   console.log(user);
        // };

        const handleLogOut = async () => {
          const user = await axios.get("/api/auth/logout");
      
          console.log(user);
        };

    return (
        <><Head>
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
      
    </div>
    <div className="row justify-content-center">
      <div className="col-md-7 col-lg-5">
        <div className="wrap">
          <div
            className="img"
            style={{ backgroundImage: "url(images/bg-1.jpg)" }}
          />
          {           
          <div className="login-wrap p-4 p-md-5">
            <div className="col-md-6 text-center mb-5">
        <h2 className="heading-section">Sign In</h2>
      </div>
            <form action="#" className="signin-form" onSubmit={handleSubmit}>
              <div className="form-group mt-3">
                <label className="form-control-placeholder" htmlFor="email">
                  Email
                </label>
                <input type="email" className="form-control" name="email" required="" />
              </div>
              <div className="form-group">
              <label className="form-control-placeholder" htmlFor="password">
                  Password
                </label>
                <input
                  id="password-field"
                  type="password"
                  className="form-control"
                  required=""
                  name='password'
                />                
              </div>
              <div className="form-group" >
              {/* {error && <p>{error}</p>} */}
                <button
                  type="submit"
                  className="form-control btn btn-primary rounded submit px-3">
                  Sign In
                </button>
              </div>
            </form>
            <p className="text-center">
              Not a member?{" "}
              <a data-toggle="tab" href="/signUp">
                Sign Up
              </a>
            </p> 

             <button
                  onClick={() => handleLogOut()}
                  type="submit"
                  className="form-control btn btn-primary rounded submit px-3">
                  Sign Out
                </button>         
          </div>

          
          
          
          }
        </div>
      </div>
    </div>
  </div>
</section>   
            
            </>
            
    );
};

export default Login;