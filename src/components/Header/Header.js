import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

// SVG ICONS
import { ReactComponent as CloseSvg } from "../../assets/icons/close.svg";
import { ReactComponent as FranceSvg } from "../../assets/icons/france.svg";
import { ReactComponent as BurgerSvg } from "../../assets/icons/menu.svg";
import { ReactComponent as MoonSvg } from "../../assets/icons/moon.svg";
import { ReactComponent as SunSvg } from "../../assets/icons/sun.svg";
import { ReactComponent as UkSvg } from "../../assets/icons/uk.svg";

// STYLESHEET
import './Header.scss';

function Header(
  {
    inFrench,
    setInFrench,
    lightMode,
    setLightMode,
    openMenu,
    setOpenMenu
  }
){

  return (
    <div className="header">
      <div className="header-bar">
        <div
          className="header-bar-language"
          onClick={() => {
            setInFrench(!inFrench);
          }}
        >
        {
          inFrench
          ?
          <>
          <UkSvg />
          <span className="header-accessibility">This website is in English. You can set it to French by clicking here.</span>
          </>
          
          :
          <>
            <FranceSvg />
            <span className="header-accessibility">Ce site est en français. Vous pouvez visiter sa version anglaise en cliquant ici.</span>
          </>
        }
        </div>
        <div
          className={lightMode ? "header-bar-theme header-bar-theme-light" : "header-bar-theme"}
          onClick={() => {
            setLightMode(!lightMode);
          }}
        >
        {
          lightMode
          ?
          <MoonSvg />
          :
          <SunSvg />
        }
        </div>
      </div>
      <h1 className={lightMode ? "header-title-light" : "header-title"}>
        <Link to="/">
          The Drop
        </Link>
      </h1>
      <nav className="header-nav">
        {/* HEADER MENU ICON */}
        <>
          <input
            className="header-checkbox"
            id="menu"
            type="checkbox"
            onClick={() => { setOpenMenu(!openMenu) }}
          />
          <label
            className={lightMode ? "header-checkbox-label header-checkbox-label-light" : "header-checkbox-label"}
            htmlFor="menu"
          >
            {
              openMenu 
              ?
              // CLOSE MENU ICON
              <>
                <CloseSvg />
                <span className="header-accessibility">Exit Menu</span>
              </>
              :
              // BURGER MENU ICON
              <>
                <BurgerSvg />
                <span className="header-accessibility">Menu</span>
              </>
              }
          </label>
        </>

        {/* HEADER NAV LINKS */}
          <ul className={lightMode ? "header-ul-light" : "header-ul"}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "header-li-active" : null
                }
                onClick={() => {
                  setOpenMenu(!openMenu);
                }}
              >
              <li className={openMenu ? lightMode ? "header-li-light-open" : "header-li-open" : "header-li"}>
              {inFrench ? "Accueil" : "Home"}
              </li>
              </NavLink>
            
            <NavLink
              to={inFrench ? "/horaires" : "/hours"}
              className={({ isActive }) =>
                isActive ? "header-li-active" : null
              }
              onClick={() => {
                setOpenMenu(!openMenu);
              }}
            >
              <li className={openMenu ? lightMode ? "header-li-light-open" : "header-li-open" : "header-li"}>
              {inFrench ? "Horaires" : "Hours"}
              </li>
            </NavLink>
            <NavLink
              to={inFrench ? "/la-carte" : "/menu"}
              className={({ isActive }) =>
                isActive ? "header-li-active" : null
              }
              onClick={() => {
                setOpenMenu(!openMenu);
              }}
            >
              <li className={openMenu ? lightMode ? "header-li-light-open" : "header-li-open" : "header-li"}>
              {inFrench ? "La Carte" : "Menu"}
              </li>
            </NavLink>
            <NavLink
              to={inFrench ? "/reserver" : "/reservations"}
              className={({ isActive }) =>
                isActive ? "header-li-active" : null
              }
              onClick={() => {
                setOpenMenu(!openMenu);
              }}
            >
              <li className={openMenu ? (lightMode ? "header-li-light-open" : "header-li-open") : "header-li"}>
              {inFrench ? "Réservations" : "Reservations"}
              </li>
            </NavLink>
            <NavLink
              to={inFrench ? "/nous-contacter" : "/contact"}
              className={({ isActive }) =>
                isActive ? "header-li-active" : null
              }
              onClick={() => {
                setOpenMenu(!openMenu);
              }}
            >
              <li className={openMenu ? lightMode ? "header-li-light-open" : "header-li-open" : "header-li"}>
                Contact
              </li>
            </NavLink>
          </ul>
      </nav>
    </div> 
  )
}

Header.propTypes = {
  inFrench: PropTypes.bool.isRequired,
  setInFrench: PropTypes.func.isRequired,
  lightMode: PropTypes.bool.isRequired,
  setLightMode: PropTypes.func.isRequired,
  openMenu: PropTypes.bool.isRequired,
  setOpenMenu: PropTypes.func.isRequired
}

export default Header;