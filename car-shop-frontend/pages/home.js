import Head from 'next/head'
import Image from 'next/image'
// import Script from 'next/Script'
import styles from '../styles/Home.module.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Card from '../components/Card'
import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";


function Home() {
  return (<>
  <Head>
  <title/>
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

    <div
      className="hero-wrap ftco-degree-bg"
      style={{ backgroundImage: 'url("images/bg_1.jpg")' }}
      data-stellar-background-ratio="0.5"
    >
      <div className="overlay"/>
      <div className="container">
        <div className="row no-gutters slider-text justify-content-start align-items-center justify-content-center">
          <div className="col-lg-8 ftco-animate">
            <div className="text w-100 text-center mb-md-5 pb-md-5">
              
              <h1 className="mb-4">Fast &amp; Easy Way To Rent A Car</h1>
              <p style={{ fontSize: 18 }}>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts
              </p>
              <a
                href="https://vimeo.com/45830194"
                className="icon-wrap popup-vimeo d-flex align-items-center mt-4 justify-content-center"
              >
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="ion-ios-play" />
                </div>
                <div className="heading-title ml-5">
                  <span>Easy steps for renting a car</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section className="ftco-section ftco-no-pt bg-light">
      <div className="container">
        <div className="row no-gutters">
          <div className="col-md-12	featured-top">
            <div className="row no-gutters">
              
             
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="ftco-section ftco-no-pt bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 heading-section text-center ftco-animate mb-5">
            <span className="subheading">What we offer</span>
            <h2 className="mb-2">Feeatured Vehicles</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="carousel-car owl-carousel">
              <div className="item">
                <div className="car-wrap rounded ftco-animate">
                  <div
                    className="img rounded d-flex align-items-end"
                    style={{ backgroundImage: "url(images/car-1.jpg)" }}
                  ></div>
                  <div className="text">
                    <h2 className="mb-0">
                      <a href="#">Mercedes Grand Sedan</a>
                    </h2>
                    <div className="d-flex mb-3">
                      <span className="cat">Cheverolet</span>
                      <p className="price ml-auto">
                        $500 <span>/day</span>
                      </p>
                    </div>
                    <p className="d-flex mb-0 d-block">
                      <a href="#" className="btn btn-primary py-2 mr-1">
                        Book now
                      </a>{" "}
                      <a href="#" className="btn btn-secondary py-2 ml-1">
                        Details
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="car-wrap rounded ftco-animate">
                  <div
                    className="img rounded d-flex align-items-end"
                    style={{ backgroundImage: "url(images/car-2.jpg)" }}
                  ></div>
                  <div className="text">
                    <h2 className="mb-0">
                      <a href="#">Mercedes Grand Sedan</a>
                    </h2>
                    <div className="d-flex mb-3">
                      <span className="cat">Cheverolet</span>
                      <p className="price ml-auto">
                        $500 <span>/day</span>
                      </p>
                    </div>
                    <p className="d-flex mb-0 d-block">
                      <a href="#" className="btn btn-primary py-2 mr-1">
                        Book now
                      </a>{" "}
                      <a href="#" className="btn btn-secondary py-2 ml-1">
                        Details
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="car-wrap rounded ftco-animate">
                  <div
                    className="img rounded d-flex align-items-end"
                    style={{ backgroundImage: "url(images/car-3.jpg)" }}
                  ></div>
                  <div className="text">
                    <h2 className="mb-0">
                      <a href="#">Mercedes Grand Sedan</a>
                    </h2>
                    <div className="d-flex mb-3">
                      <span className="cat">Cheverolet</span>
                      <p className="price ml-auto">
                        $500 <span>/day</span>
                      </p>
                    </div>
                    <p className="d-flex mb-0 d-block">
                      <a href="#" className="btn btn-primary py-2 mr-1">
                        Book now
                      </a>{" "}
                      <a href="#" className="btn btn-secondary py-2 ml-1">
                        Details
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="car-wrap rounded ftco-animate">
                  <div
                    className="img rounded d-flex align-items-end"
                    style={{ backgroundImage: "url(images/car-4.jpg)" }}
                  ></div>
                  <div className="text">
                    <h2 className="mb-0">
                      <a href="#">Mercedes Grand Sedan</a>
                    </h2>
                    <div className="d-flex mb-3">
                      <span className="cat">Cheverolet</span>
                      <p className="price ml-auto">
                        $500 <span>/day</span>
                      </p>
                    </div>
                    <p className="d-flex mb-0 d-block">
                      <a href="#" className="btn btn-primary py-2 mr-1">
                        Book now
                      </a>{" "}
                      <a href="#" className="btn btn-secondary py-2 ml-1">
                        Details
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="grid w-lg gap-5  mx-18 mt-0 mt-12 transform -translate-y-44 lg:grid-cols-3 lg:max-w-none">
                            
                                <div
                                  
                                    className="flex flex-col bg-gray-400 bg-opacity-10  items-center overflow-hidden rounded-lg shadow-lg"
                                >
                                    <a href={"/videos/" + 3}>


                                        <div className="w-full px-4 py-6 transition-all duration-150 ">
                                            <div className="flex flex-col items-stretch min-h-full pb-4 mb-6 bg-gray-200 bg-opacity-10  transition-all duration-150 bg-transparent rounded-lg shadow-lg hover:shadow-2xl">
                                                <div className="md:flex-shrink-0">
                                                    
                                                </div>
                                                <div className="flex items-center justify-between px-4 py-2 overflow-hidden">
                                                    <div className="flex flex-row items-center">
                                                        <div className="flex flex-row items-center mr-2 text-xs font-medium text-gray-500"></div>

                                                        <div className="flex flex-row items-center mr-2 text-xs font-medium text-gray-500"></div>

                                                        <div className="flex flex-row items-center text-xs font-medium text-gray-500"></div>
                                                    </div>
                                                </div>
                                                <div className="border-gray-300" />
                                                <div className="flex flex-wrap items-center flex-1 px-4 py-1 mx-auto text-center">
                                                    <div href="#" className="hover:underline">
                                                        <h2 className="text-2xl font-bold tracking-normal text-orange-700">
                                                            araba
                                                        </h2>
                                                    </div>
                                                </div>
                                                <div className="border-white-300" />
                                                <div className="flex flex-row flex-wrap w-full px-4 py-2 overflow-hidden text-sm text-justify text-gray-700">
                                                    acıklama
                                                </div>
                                                <div className="border-gray-300" />
                                                <div className="px-4 py-2 mt-2">
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center flex-1">
                                                            <div className="flex flex-col mx-2">
                                                                <div
                                                                    href=""
                                                                    className="font-semibold text-gray-700 hover:underline"
                                                                >
                                                                    enes
                                                                </div>
                                                                <div className="text-xs text-gray-600">
                                                                    cemre
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </a>
                                </div>
                            
                        </div>
    

  

  
  </>
  

  )
}

export default Home;