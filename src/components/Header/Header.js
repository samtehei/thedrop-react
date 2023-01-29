import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.scss';

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="header">
      <div className="header-language">
      En Français | Switch to English
      </div>
      <h1 className="header-title">
        <Link to="/">
          The Drop
        </Link>
      </h1>
      <nav className="header-nav">
        <button
          className="header-btn"
          onClick={() => {
            setOpenMenu(!openMenu);
        }}
        >
          {openMenu ? "close" : "menu"}
        </button>
          <ul className="header-ul">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "header-li-active" : null
                }
              >
              <li className={openMenu ? "header-li-open" : "header-li"}>
                Home
              </li>
              </NavLink>
            
            <NavLink
              to="/opening-hours"
              className={({ isActive }) =>
                isActive ? "header-li-active" : null
              }
            >
              <li className={openMenu ? "header-li-open" : "header-li"}>
                Opening Hours
                </li>
            </NavLink>
            <NavLink
              to="/menu"
              className={({ isActive }) =>
                isActive ? "header-li-active" : null
              }
            >
              <li className={openMenu ? "header-li-open" : "header-li"}>
                Menu
              </li>
            </NavLink>
            <NavLink
              to="/reservations"
              className={({ isActive }) =>
                isActive ? "header-li-active" : null
              }
            >
              <li className={openMenu ? "header-li-open" : "header-li"}>
                Reservations
              </li>
            </NavLink>
          </ul>
      </nav>
    </div> 
  )
}

export default Header