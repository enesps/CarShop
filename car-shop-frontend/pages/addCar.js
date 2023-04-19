import Head from "next/head";
import React, { useState } from "react";

export const getStaticProps = async () => {
  const request = await fetch(`http://localhost:2000/api/company`);
  const companies = await request.json();

  return {
    props: {
      companies,
    },
  };
};
function createCar({ companies }) {
  const [CompanyName, setCompanyName] = useState("");
  const [Price, setPrice] = useState("");
  const [Brand, setBrand] = useState("");
  const [Model, setModel] = useState("");
  const [Year, setYear] = useState("");
  const [Fuel_ID, setFuel] = useState("");
  const [KM, setKM] = useState("");
  const [Color, setColor] = useState("");
  const [Description, setDesc] = useState("");
  const [Image_Link, setImgLink] = useState("");
  const [error, setError] = useState(null);

  const companyArray = Array.from(companies.data);

  const hasMatch = companyArray.some((company) => company.Name === CompanyName);

  async function addCar() {
    if (!hasMatch) {
      alert("This company doesn't exist!");
      setError("This company doesn't exist!");
    } else {
      let Company_ID = await fetch(
        "http://localhost:2000/api/company/getID/" + CompanyName
      );
      Company_ID = await Company_ID.json();
      console.log(Company_ID);
      Company_ID = Company_ID.data.Company_ID;
      let item = {
        Company_ID,
        Price,
        Brand,
        Model,
        Year,
        Fuel_ID,
        KM,
        Color,
        Description,
        Image_Link,
      };
      console.warn(item);

      let result = await fetch("http://localhost:2000/api/vehicle", {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      result = await result.json();
      alert("Succesful!");
      console.warn("Result: ", result);
    }
  }

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
      </Head>
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-5">
              <h2 className="heading-section">Add A Vehicle</h2>
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
                  <form action="#" className="signin-form">
                    <div className="form-group mt-3">
                      <label
                        className="form-control-placeholder"
                        htmlFor="CompanyName"
                      >
                        Company Name:
                      </label>
                      <input
                        type="text"
                        value={CompanyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        className="form-control"
                        name="CompanyName"
                        required=""
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label
                        className="form-control-placeholder"
                        htmlFor="Price"
                      >
                        Price:
                      </label>
                      <input
                        type="email"
                        value={Price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="form-control"
                        name="Price"
                        required=""
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label
                        className="form-control-placeholder"
                        htmlFor="Brand"
                      >
                        Brand:
                      </label>
                      <input
                        type="text"
                        value={Brand}
                        onChange={(e) => setBrand(e.target.value)}
                        className="form-control"
                        name="Brand"
                        required=""
                      />
                    </div>
                    {/* <div className="form-group mt-3">
                <label className="form-control-placeholder" htmlFor="companyName">
                  Brand:
                </label>
                <input type="text" value={Name} onChange={(e)=>setName(e.target.value)}className="form-control" name="name" required=""/>
              </div> */}
                    <div className="form-group mt-3">
                      <label
                        className="form-control-placeholder"
                        htmlFor="Model"
                      >
                        Model:
                      </label>
                      <input
                        type="text"
                        value={Model}
                        onChange={(e) => setModel(e.target.value)}
                        className="form-control"
                        name="Model"
                        required=""
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label
                        className="form-control-placeholder"
                        htmlFor="Year"
                      >
                        Year:
                      </label>
                      <input
                        type="text"
                        value={Year}
                        onChange={(e) => setYear(e.target.value)}
                        className="form-control"
                        name="Year"
                        required=""
                      />
                    </div>
                    <div className="form-group mt-3">
                      <select
                      value={Fuel_ID}
                      onChange={(e) => setFuel(e.target.value)}
                        class="form-select form-select-lg"
                        aria-label="Default select example"
                        name="Fuel_ID"
                      >
                        <option htmlFor="Fuel_ID" selected>Fuel Type</option>
                        <option value="1">Benzin</option>
                        <option value="2">Dizel</option>
                        <option value="3">Elektrikli</option>
                        <option value="4">LPG</option>
                        <option value="5">Hibrit</option>
                      </select>
                      
                    </div>
                    <div className="form-group mt-3">
                      <label className="form-control-placeholder" htmlFor="km">
                        Kilometers:
                      </label>
                      <input
                        type="text"
                        value={KM}
                        onChange={(e) => setKM(e.target.value)}
                        className="form-control"
                        name="KM"
                        required=""
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label
                        className="form-control-placeholder"
                        htmlFor="Color"
                      >
                        Color:
                      </label>
                      <input
                        type="text"
                        value={Color}
                        onChange={(e) => setColor(e.target.value)}
                        className="form-control"
                        name="Color"
                        required=""
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label
                        className="form-control-placeholder"
                        htmlFor="Desc"
                      >
                        Description:
                      </label>
                      <input
                        type="text"
                        value={Description}
                        onChange={(e) => setDesc(e.target.value)}
                        className="form-control"
                        name="Desc"
                        required=""
                      />
                    </div>
                    <div class="mb-3">
                      <label for="formFile" class="form-label">
                        Add Image (Please Url)
                      </label>
                      <input
                        value={Image_Link}
                        onChange={(e) => setImgLink(e.target.value)}
                        className="form-control"
                        type="text"
                        id="formFile"
                      />
                    </div>
                    {error && <p>{error}</p>}
                    <div className="form-group">
                      <button
                        type="button"
                        onClick={addCar}
                        className="form-control btn btn-primary rounded submit px-3"
                      >
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

export default createCar;
