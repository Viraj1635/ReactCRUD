import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      {/* <nav class="navbar bg-body-light ">
        <div class="container-fluid">
          <Link class="navbar-brand" to="../">
            <img
              src="https://vectorlogoseek.com/wp-content/uploads/2019/05/space-com-vector-logo.png"
              alt="Logo"
              width="100"
              height="55"
              class="d-inline-block p-1 align-text-top img border border-2 border-black rounded"
            />
            <div class="new h2 p-2 ">Space.com</div>
          </Link>
          <ul class="nav justify-content-end">
            <li class="nav-item">
              <Link to="/planet" class="nav-link active" aria-current="page">
                <div class="text-dark h6">Planets</div>
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="../example">
                <div class="text-dark h6">Example</div>
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="../icons">
                <div class="text-dark h6">Icons</div>
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link " to="../about">
                <div class="text-dark h6">About Us</div>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <span class="placeholder col-12"></span> */}

      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <Link to="../" class="navbar-brand">
            API
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link to="../" class="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link to="../insert" class="nav-link">
                  Insert
                </Link>
              </li>
              <li class="nav-item">
                <Link to="" class="nav-link">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
