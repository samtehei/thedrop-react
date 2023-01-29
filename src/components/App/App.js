//*** MAIN COMPONENTS ***//
import Home from '../Home/Home';
import Error from '../Error/Error';

//*** STYLESHEETS ***//
import './App.scss';

//*** MISC ***//
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
