
export default function UnauthenticatedNavbar ()  {
    return (
        <nav
        className="navbar sticky-top navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
        id="ftco-navbar"
      >
        <div className="container">
          <a className="navbar-brand" href="/">
            Car<span>Book</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="oi oi-menu" /> Menu
          </button>
          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a href="/" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="/car" className="nav-link">
                  Cars
                </a>
              </li>
              <><li className="nav-item">
                    <a href="/signUp" className="nav-link">
                      Sign Up
                    </a>
                  </li><li className="nav-item">
                      <a href="/login" className="nav-link">
                        Sign In
                      </a>
                    </li></>            
              <li className="nav-item">
                <a href="/company" className="nav-link">
                  Company
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  };