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
    </>
  );
};

export default Layout;
