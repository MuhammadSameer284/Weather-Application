import React from "react";
import { NavLink } from "react-router-dom";
import '../Style/Nav.css'

function Nav() {
    return (
        <>
            <header className="zx-navbar-wrapper">

                <div className="zx-navbar-container">

                    <div className="zx-navbar-logo">
                        <h2>Weather</h2>
                    </div>

                    {/* <ul className="zx-navbar-menu">
                        <li>
                            <NavLink to="/" className="zx-nav-link">
                                Weather
                            </NavLink>
                        </li> */}

                        {/* <li>
                            <NavLink to="/products" className="zx-nav-link">
                                Products
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/categories" className="zx-nav-link">
                                Categories
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/deals" className="zx-nav-link">
                                Deals
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/contact" className="zx-nav-link">
                                Contact
                            </NavLink>
                        </li> */}
                    {/* </ul> */}

                    <div className="zx-navbar-btn">
                        <NavLink to="/login">Login</NavLink>
                    </div>

                </div>

            </header>
        </>
    )
}

export default Nav