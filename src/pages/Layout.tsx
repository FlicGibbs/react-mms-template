import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-expand navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img
            width="150"
            height="72"
            src="https://149463264.v2.pressablecdn.com/wp-content/uploads/2021/03/MMS-Logo-New-300x143.jpg"
          ></img>{" "}
        </a>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Link className="nav-link" to="/subjects">
                  Subjects
                </Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Link className="nav-link" to="/teachers">
                  Teachers
                </Link>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <Outlet />
      <footer className="footer fixed-bottom bg-dark text-white">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">Copyright 2024</div>
            <div className="col-sm-6">
              Email: <a href="mailto:somebody@somewhere.in">Email us</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

const Layout2 = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light-tertiary">
        {
          //<!-- Container wrapper -->
        }
        <div className="container-fluid">
          {
            //<!-- Toggle button -->
          }
          <button
            data-mdb-button-init
            className="navbar-toggler"
            type="button"
            data-mdb-collapse-init
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          {
            //<!-- Collapsible wrapper -->
          }
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {
              //<!-- Navbar brand -->
            }
            <a className="navbar-brand mt-2 mt-lg-0" href="#">
              <img
                src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                height="15"
                alt="MDB Logo"
                loading="lazy"
              />
            </a>
            {
              //<!-- Left links -->
            }
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Team
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Projects
                </a>
              </li>
            </ul>
            {
              //<!-- Left links -->
            }
          </div>
          {
            //<!-- Collapsible wrapper -->
          }

          {
            //<!-- Right elements -->
          }
          <div className="d-flex align-items-center">
            {
              //<!-- Icon -->
            }
            <a className="text-reset me-3" href="#">
              <i className="fas fa-shopping-cart"></i>
            </a>

            {
              //<!-- Notifications -->
            }
            <div className="dropdown">
              <a
                data-mdb-dropdown-init
                className="text-reset me-3 dropdown-toggle hidden-arrow"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-bell"></i>
                <span className="badge rounded-pill badge-notification bg-danger">
                  1
                </span>
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Some news
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another news
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
            {
              //<!-- Avatar -->
            }
            <div className="dropdown">
              <a
                data-mdb-dropdown-init
                className="dropdown-toggle d-flex align-items-center hidden-arrow"
                href="#"
                id="navbarDropdownMenuAvatar"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  className="rounded-circle"
                  height="25"
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                />
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuAvatar"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    My profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {
            //<!-- Right elements -->
          }
        </div>
        {
          //<!-- Container wrapper -->
        }
      </nav>
      {
        //<!-- Navbar -->
      }

      <div
        className="container"
        // style="height: 50vh;"
      ></div>

      {
        //<!-- Footer -->
      }
      <footer className="text-center text-lg-start bg-body-tertiary text-muted">
        {
          //<!-- Section: Social media -->
        }
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          {
            //<!-- Left -->
          }
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          {
            //<!-- Left -->
          }

          {
            //<!-- Right -->
          }
          <div>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-google"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-github"></i>
            </a>
          </div>
          {
            //<!-- Right -->
          }
        </section>
        {
          //<!-- Section: Social media -->
        }

        {
          //<!-- Section: Links  -->
        }
        <section className="">
          <div className="container text-center text-md-start mt-5">
            {
              //<!-- Grid row -->
            }
            <div className="row mt-3">
              {
                //<!-- Grid column -->
              }
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {
                  //<!-- Content -->
                }
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>Company name
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>
              {
                //<!-- Grid column -->
              }

              {
                //<!-- Grid column -->
              }
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {
                  //<!-- Links -->
                }
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Angular
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    React
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Vue
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Laravel
                  </a>
                </p>
              </div>
              {
                //<!-- Grid column -->
              }

              {
                //<!-- Grid column -->
              }
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {
                  //<!-- Links -->
                }
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Help
                  </a>
                </p>
              </div>
              {
                //<!-- Grid column -->
              }

              {
                //<!-- Grid column -->
              }
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {
                  //<!-- Links -->
                }
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3"></i> New York, NY 10012, US
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  info@example.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> + 01 234 567 88
                </p>
                <p>
                  <i className="fas fa-print me-3"></i> + 01 234 567 89
                </p>
              </div>
              {
                //<!-- Grid column -->
              }
            </div>
            {
              //<!-- Grid row -->
            }
          </div>
        </section>
        {
          //<!-- Section: Links  -->
        }

        {
          //<!-- Copyright -->
        }
        <div
          className="text-center p-4"
          // style="background-color: rgba(0, 0, 0, 0.05);"
        >
          © 2021 Copyright:
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
        {
          //<!-- Copyright -->
        }
      </footer>
    </>
  );
};
export default Layout;
