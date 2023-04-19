import Head from "next/head";
import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";

export const getServerSideProps = async () => {
  const request = await fetch("http://localhost:2000/api/vehicle/ourvehicles");

  const posts = await request.json();

  return { props: { posts } };
};


const Home = ({ posts }) => {
  const [render, setRender] = useState(false);

  useEffect(() => {
    setRender(true);
  }, []);
  return (
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
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
      </Head>

      <div
        className="hero-wrap ftco-degree-bg"
        style={{ backgroundImage: 'url("images/bg_1.jpg")' }}
        data-stellar-background-ratio="0.5"
      >
        <div className="overlay" />
        <div className="container">
          <div className="row no-gutters justify-content-start align-items-center justify-content-center">
            <div className="col-lg-8">
              <div className="text w-100 text-center mb-md-5 pb-md-5">
                <h1 className="mt-5 mb-4 ">
                  Fastest & Easiest Way To Buy A Second Hand Car
                </h1>
                <p style={{ fontSize: 18 }}>
                  Hayalindeki arabaya CarBook ile en kaliteli ve en ucuz ikinci
                  el satıcılarıyla karşılaştırarak sahip ol!
                </p>
                <div class="input-group mb-3">
                  <input
                    type="search"
                    class="form-control"
                    placeholder="search your dream car..."
                    aria-label="search your dream car"
                    aria-describedby="basic-addon2"
                  />
                  <div class="input-group-append">
                    <button class="btn btn-outline-dark btn-" type="button">
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
      <div className="">
        {
          <div className="relative px-4 pt-16 pb-20 bg-gray-600 bg-opacity-25 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
            <div className="relative mx-auto max-w-7xl">
              <div class="container text-center">
                <div class="row row-cols-1 row-cols-md-3 g-4">
                {posts.data.map((post) => (
                    <div class="col col-lg-4 d-flex align-items-stretch">
                      <div class="card">
                        <a href={ post.Image_Link}>

                       
                        <img
                         
                          src={post.Image_Link}
                          class="card-img-top"
                          alt="Hollywood Sign on The Hill"
                        />
                        </a>

                        <div class="card-body" >
                        <Link href={ '/car/' + post.Vehicle_ID}>
                          <h5 class="card-title"> {post.Model} Model</h5>
                          <p class="card-text">{post.Brand} </p>
                           <h4 class="card-text">{post.Price} TL</h4>
                        </Link>
                        </div>
                        
                      </div>
                    </div>
                  ))}
                  {/* {posts.data.map((post) => (
                    <div class="col">
                      <div class="card">
                        <img
                         
                          src={post.image}
                          class="card-img-top"
                          alt="Hollywood Sign on The Hill"
                        />
                        <div class="card-body" >
                          <h5 class="card-title"> {post.Model}</h5>
                          <p class="card-text">{post.Brand}</p>
                        </div>
                      </div>
                    </div>
                  ))} */}
                </div>
              </div>
            </div>
          </div>
        }
      </div>

      <script
        src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous"
      ></script>
    </>
  );
};

export default Home;
