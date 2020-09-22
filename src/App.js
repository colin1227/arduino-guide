import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import WhatIsArduino from "./containers/WhatIsArduino";
import Header from "./components/Header/Header";


function App() {
  return (
    <div className="App">
      <Header />
      <div className="contained">
        <Switch>
          <Route path="/" component={() => <WhatIsArduino />}/>

        </Switch>
      </div>
    </div>
  );
}

export default App;
