import Layout from '../components/Layout'
import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import { useEffect, useState } from "react";


function MyApp({ Component, pageProps }) {
  
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return(
    <Layout>
       <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
