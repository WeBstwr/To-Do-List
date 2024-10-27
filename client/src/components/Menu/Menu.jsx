import React from "react";
import { NavLink } from "react-router-dom";
import "./menu.css";

function Menu() {
  return (
    <section className="menu">
      <div className="menu__container">
        <nav className="header-nav">
          <ol className="header-nav-list">
            <li className="header-nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "header-nav__link active" : "header-nav__link"
                }
              >
                dashboard
              </NavLink>
            </li>
            <li className="header-nav-item">
              <NavLink
                to="/edited"
                className={({ isActive }) =>
                  isActive ? "header-nav__link active" : "header-nav__link"
                }
              >
                edited
              </NavLink>
            </li>
            <li className="header-nav-item">
              <NavLink
                to="/preview"
                className={({ isActive }) =>
                  isActive ? "header-nav__link active" : "header-nav__link"
                }
              >
                preview
              </NavLink>
            </li>
            <li className="header-nav-item">
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  isActive ? "header-nav__link active" : "header-nav__link"
                }
              >
                profile
              </NavLink>
            </li>
          </ol>
        </nav>
      </div>
    </section>
  );
}

export default Menu;
