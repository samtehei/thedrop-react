//*** MAIN COMPONENTS ***//
import Contact from '../Contact/Contact';
import Error from '../Error/Error';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Hours from '../Hours/Hours';
import Menu from '../Menu/Menu';
import Reservations from '../Reservations/Reservations';


//*** STYLESHEET ***//
import './App.scss';

//*** MISC ***//
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from 'react';

function App() {
  
  const [openMenu, setOpenMenu] = useState(false); // HEADER MENU
  const [lightMode, setLightMode] = useState(false); // LIGHT THEME
  const [inFrench, setInFrench] = useState(false); // FRENCH TRANSLATION

  useEffect(() => {
    const main = document.querySelector('.component');
    main.addEventListener('click', () => {
      setOpenMenu(false);
    });
  });

  return (
    <div className="app">
      <Header
        inFrench={inFrench}
        setInFrench={setInFrench}
        lightMode={lightMode}
        setLightMode={setLightMode}
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
      />
      <div className="component">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                inFrench={inFrench}
                lightMode={lightMode}
                setOpenMenu={setOpenMenu}
              />
            } 
          />
          <Route
            path="*"
            element={
              <Error
                inFrench={inFrench}
                lightMode={lightMode}
                setOpenMenu={setOpenMenu}
              />
            } 
          />

          {/* ENGLISH ROUTES */}
          <Route
            path="/contact"
            element={
              <Contact
                inFrench={inFrench}
                lightMode={lightMode}
                setOpenMenu={setOpenMenu}
              />
            }
          />
          <Route
            path="/hours"
            element={
              <Hours
                inFrench={inFrench}
                lightMode={lightMode}
                setOpenMenu={setOpenMenu}
              />
            }
          />
          <Route
            path="/menu"
            element={
              <Menu
                inFrench={inFrench}
                lightMode={lightMode}
                setOpenMenu={setOpenMenu}
              />
            }
          />
          <Route
            path="/reservations"
            element={
              <Reservations
                inFrench={inFrench}
                lightMode={lightMode}
                setOpenMenu={setOpenMenu}
              />
            }
          />

          {/* FRENCH ROUTES */}
          <Route
            path="/nous-contacter"
            element={
              <Contact
                inFrench={inFrench}
                lightMode={lightMode}
                setOpenMenu={setOpenMenu}
              />
            }
            />
          <Route
            path="/horaires"
            element={
              <Hours
                inFrench={inFrench}
                lightMode={lightMode}
                setOpenMenu={setOpenMenu}
              />
            }
          />
          <Route
            path="/la-carte"
            element={
              <Menu
                inFrench={inFrench}
                lightMode={lightMode}
                setOpenMenu={setOpenMenu}
              />
            }
          />
          <Route
            path="/reserver"
            element={
              <Reservations
                inFrench={inFrench}
                lightMode={lightMode}
                setOpenMenu={setOpenMenu}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
