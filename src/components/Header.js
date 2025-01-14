import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

const Header = () => {
  return (
    <>
      {/* <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Free Shipping over $100 & Free Returns
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Hotline:{" "}
                <a className="text-white" href="tel:+91 327254536">
                  +91 327254536
                </a>
              </p>
            </div>
          </div>
        </div>
      </header> */}
      <header className="header-upper py-3" id="nav-element">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link className="text-dark brand-title">TrendTrove</Link>
              </h2>
            </div>
            <div className="col-5">
              <div class="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search Products here..."
                  aria-label="Search Products here..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link className="d-flex align-items-center gap-10">
                    <img src="images/account.svg" alt="user" />
                    <p className="text-dark mb-0 user-id">
                      login <br /> My Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-10">
                    <img src="images/wishlist.svg" alt="wishlist" />
                    <p className="text-dark mb-0 user-id">
                      Favourite <br /> Wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-10">
                    <img src="images/cart.svg" alt="cart" />
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark user-id">
                        0
                      </span>
                      <p className="mb-0 user-id">$ 500</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-botton py-3" id="nav-element">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 text-dark">
              <div className="menu-bottom d-flex align-items-center gap-75">
                <div>
                  <div class="dropdown">
                    <button
                      className="btn btn-light dropdown-toggle bg-transparent border-0 d-flex align-items-center text-dark"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      All
                    </button>
                    <ul class="dropdown-menu">
                      <li>
                        <Link class="dropdown-item" to="/">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item" to="/">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item" to="/">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15 text-dark">
                    <NavLink className="text-dark navlink" to="/">
                      New in
                    </NavLink>
                    <NavLink className="text-dark navlink" to="/">
                      Sale
                    </NavLink>
                    <NavLink className="text-dark navlink" to="/">
                      Women clothing
                    </NavLink>
                    <NavLink className="text-dark navlink" to="/">
                      Men Clothing
                    </NavLink>
                    <NavLink className="text-dark navlink" to="/">
                      Kids
                    </NavLink>
                    <NavLink className="text-dark navlink" to="/">
                      Skincare
                    </NavLink>
                    <NavLink className="text-dark navlink" to="/">
                      Sport
                    </NavLink>
                    <NavLink className="text-dark navlink" to="/">
                      Jewelry
                    </NavLink>
                    <NavLink className="text-dark navlink" to="/">
                      Home & Kitchen
                    </NavLink>
                    <NavLink className="text-dark navlink" to="/">
                      Wig & Extensions
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
