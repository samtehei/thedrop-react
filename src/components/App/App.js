//*** MAIN COMPONENTS ***//
import Error from '../Error/Error';
import Header from '../Header/Header';
import Home from '../Home/Home';

//*** STYLESHEETS ***//
import './App.scss';

//*** MISC ***//
import { Route, Routes } from "react-router-dom";
import { useState } from 'react';
import Hours from '../Hours/Hours';
import Menu from '../Menu/Menu';
import Reservations from '../Reservations/Reservations';

function App() {
  
  const [openMenu, setOpenMenu] = useState(false);
  const [lightMode, setLightMode] = useState(false);
  const [inFrench, setInFrench] = useState(false);

  return (
    <div className="app">
      <Header
        setOpenMenu={setOpenMenu}
        openMenu={openMenu}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />

        <Route path="/hours" element={<Hours />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<Reservations />} />
      </Routes>
    </div>
  );
}

export default App;
