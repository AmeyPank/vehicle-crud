import React from 'react';
// import Sample from './sample';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Components/HomePage/index.js';
import AddScenario from './Components/AddScenario/index';
import AllScenario from './Components/Allscenario/index';
import AddVehicle from './Components/AddVehicles/index';

const App = () => {


  return (
    <div>
      {/* <Sample/> */}
      {/* <Sidebar/> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AddScenario" element={<AddScenario />} />
          <Route path="/AllScenario" element={<AllScenario/>} />
          <Route path="/AddVehicle" element={<AddVehicle/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
