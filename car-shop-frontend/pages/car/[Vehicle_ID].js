import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { post } from "jquery";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

const URL = "http://localhost:2000/";

export const getStaticPaths = async () => {
  const res = await fetch(`${URL}api/vehicle`);
  const posts = await res.json();
  const paths = posts.data.map((post) => {
    return { params: { Vehicle_ID: post.Vehicle_ID.toString() } };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const Vehicle_ID = context.params.Vehicle_ID;

  const request = await fetch(`${URL}api/vehicle/getbyID/${Vehicle_ID}`);
  const post = await request.json();
  if (!post) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      post,
    },
  };
};

export default function Car({ post }) {
  // const router = useRouter()
  // const vehicle = router.query.car

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

      <div>
        <h1 className=" text-center">Car Details</h1>
        <img
          src={post.data.Image_Link}
          class="rounded mx-auto d-block"
          alt="..."
        ></img>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="car-details">
                <div className="text text-center">
                  <h2>{post.data.Brand}</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services">
                <div className="media-body py-md-4">
                  <div className="d-flex mb-3 align-items-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        fill="currentColor"
                        class="bi bi-person"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                      </svg>
                    </div>
                    <div className="text">
                      <h3 className="heading mb-0 pl-3">
                        <span> {post.data.Name} </span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services">
                <div className="media-body py-md-4">
                  <div className="d-flex mb-3 align-items-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        fill="currentColor"
                        class="bi bi-speedometer"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 2a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V2.5A.5.5 0 0 1 8 2zM3.732 3.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 8a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 7.31A.91.91 0 1 0 8.85 8.569l3.434-4.297a.389.389 0 0 0-.029-.518z" />
                        <path
                          fill-rule="evenodd"
                          d="M6.664 15.889A8 8 0 1 1 9.336.11a8 8 0 0 1-2.672 15.78zm-4.665-4.283A11.945 11.945 0 0 1 8 10c2.186 0 4.236.585 6.001 1.606a7 7 0 1 0-12.002 0z"
                        />
                      </svg>
                    </div>
                    <div className="text">
                      <h3 className="heading mb-0 pl-3">
                        <span> {post.data.KM} KM</span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services">
                <div className="media-body py-md-4">
                  <div className="d-flex mb-3 align-items-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        fill="currentColor"
                        class="bi bi-fuel-pump"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-5Z" />
                        <path d="M1 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v8a2 2 0 0 1 2 2v.5a.5.5 0 0 0 1 0V8h-.5a.5.5 0 0 1-.5-.5V4.375a.5.5 0 0 1 .5-.5h1.495c-.011-.476-.053-.894-.201-1.222a.97.97 0 0 0-.394-.458c-.184-.11-.464-.195-.9-.195a.5.5 0 0 1 0-1c.564 0 1.034.11 1.412.336.383.228.634.551.794.907.295.655.294 1.465.294 2.081v3.175a.5.5 0 0 1-.5.501H15v4.5a1.5 1.5 0 0 1-3 0V12a1 1 0 0 0-1-1v4h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V2Zm9 0a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v13h8V2Z" />
                      </svg>
                    </div>
                    <div className="text">
                      <h3 className="heading mb-0 pl-3">
                        <span>
                          {" "}
                          {post.data.Type.charAt(0).toUpperCase() +
                            post.data.Type.slice(1)}
                        </span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services">
                <div className="media-body py-md-4">
                  <div className="d-flex mb-3 align-items-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        fill="currentColor"
                        class="bi bi-paint-bucket"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6.192 2.78c-.458-.677-.927-1.248-1.35-1.643a2.972 2.972 0 0 0-.71-.515c-.217-.104-.56-.205-.882-.02-.367.213-.427.63-.43.896-.003.304.064.664.173 1.044.196.687.556 1.528 1.035 2.402L.752 8.22c-.277.277-.269.656-.218.918.055.283.187.593.36.903.348.627.92 1.361 1.626 2.068.707.707 1.441 1.278 2.068 1.626.31.173.62.305.903.36.262.05.64.059.918-.218l5.615-5.615c.118.257.092.512.05.939-.03.292-.068.665-.073 1.176v.123h.003a1 1 0 0 0 1.993 0H14v-.057a1.01 1.01 0 0 0-.004-.117c-.055-1.25-.7-2.738-1.86-3.494a4.322 4.322 0 0 0-.211-.434c-.349-.626-.92-1.36-1.627-2.067-.707-.707-1.441-1.279-2.068-1.627-.31-.172-.62-.304-.903-.36-.262-.05-.64-.058-.918.219l-.217.216zM4.16 1.867c.381.356.844.922 1.311 1.632l-.704.705c-.382-.727-.66-1.402-.813-1.938a3.283 3.283 0 0 1-.131-.673c.091.061.204.15.337.274zm.394 3.965c.54.852 1.107 1.567 1.607 2.033a.5.5 0 1 0 .682-.732c-.453-.422-1.017-1.136-1.564-2.027l1.088-1.088c.054.12.115.243.183.365.349.627.92 1.361 1.627 2.068.706.707 1.44 1.278 2.068 1.626.122.068.244.13.365.183l-4.861 4.862a.571.571 0 0 1-.068-.01c-.137-.027-.342-.104-.608-.252-.524-.292-1.186-.8-1.846-1.46-.66-.66-1.168-1.32-1.46-1.846-.147-.265-.225-.47-.251-.607a.573.573 0 0 1-.01-.068l3.048-3.047zm2.87-1.935a2.44 2.44 0 0 1-.241-.561c.135.033.324.11.562.241.524.292 1.186.8 1.846 1.46.45.45.83.901 1.118 1.31a3.497 3.497 0 0 0-1.066.091 11.27 11.27 0 0 1-.76-.694c-.66-.66-1.167-1.322-1.458-1.847z" />
                      </svg>
                    </div>
                    <div className="text">
                      <h3 className="heading mb-0 pl-3">
                        <span>
                          {post.data.Color.charAt(0).toUpperCase() +
                            post.data.Color.slice(1)}{" "}
                          Renk
                        </span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services">
                <div className="media-body py-md-4">
                  <div className="d-flex mb-3 align-items-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        fill="currentColor"
                        class="bi bi-calendar"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                      </svg>
                    </div>
                    <div className="text">
                      <h3 className="heading mb-0 pl-3">
                        <span>{post.data.Year} Model</span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services">
                <div className="media-body py-md-4">
                  <div className="d-flex mb-3 align-items-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        fill="currentColor"
                        class="bi bi-cash"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                        <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2H3z" />
                      </svg>
                    </div>
                    <div className="text">
                      <h3 className="heading mb-0 pl-3">
                        <span>{post.data.Price} TL</span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services">
                <div className="media-body py-md-4">
                  <div className="d-flex mb-3 align-items-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        fill="currentColor"
                        class="bi bi-car-front-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679c.033.161.049.325.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.807.807 0 0 0 .381-.404l.792-1.848ZM3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2H6ZM2.906 5.189a.51.51 0 0 0 .497.731c.91-.073 3.35-.17 4.597-.17 1.247 0 3.688.097 4.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 11.691 3H4.309a.5.5 0 0 0-.447.276L2.906 5.19Z" />
                      </svg>
                    </div>
                    <div className="text">
                      <h3 className="heading mb-0 pl-3">
                        <span>
                          {" "}
                          {post.data.Model.charAt(0).toUpperCase() +
                            post.data.Model.slice(1)}
                        </span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="d-grid gap-2 col-4 mx-auto">
          <button
            type="button"
            class="btn btn-outline-success"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            data-bs-whatever="@mdo"
          >
            Satın al
          </button>

          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">
                    New message
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <form>
                    <div class="mb-3">
                      <label for="recipient-name" class="col-form-label">
                        Kredi kartı üzerindeki isim:
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="recipient-name"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="recipient-name" class="col-form-label">
                        Kart Numarası:
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="recipient-name"
                      ></input>
                    </div>
                    <div class="mb-3">
                      <label for="recipient-name" class="col-form-label">
                        CVV:
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="recipient-name"
                      ></input>
                    </div>
                    <div class="mb-3">
                      <label for="recipient-name" class="col-form-label">
                        Son kullanma Tarihi:
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="recipient-name"
                      ></input>
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-outline-danger"
                    data-bs-dismiss="modal"
                  >
                    Vazgeç
                  </button>
                  <button type="button" class="btn btn-outline-success">
                    Onayla
                    <div class="spinner-grow" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr></hr>
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
}
