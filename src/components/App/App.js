//*** MAIN COMPONENTS ***//
import Contact from '../Contact/Contact';
import Error from '../Error/Error';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Hours from '../Hours/Hours';
import Menu from '../Menu/Menu';
import Reservations from '../Reservations/Reservations';


//*** STYLESHEETS ***//
import './App.scss';

//*** MISC ***//
import { Route, Routes } from "react-router-dom";
import { useState } from 'react';

function App() {
  
  const [openMenu, setOpenMenu] = useState(false); // HEADER MENU
  const [lightMode, setLightMode] = useState(false); // LIGHT THEME
  const [inFrench, setInFrench] = useState(false); // FRENCH TRANSLATION

  return (
    <div className="app">
      <Header
        setOpenMenu={setOpenMenu}
        openMenu={openMenu}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/hours" element={<Hours />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<Reservations />} />
      </Routes>
    </div>
  );
}

export default App;
