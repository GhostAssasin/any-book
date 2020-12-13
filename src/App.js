import React from "react";
import AppHeader from "./containers/header/header";
import {BrowserRouter} from "react-router-dom";
import Routes from "./containers/routes/Routes";


function App() {
  return (
          <BrowserRouter>
              <AppHeader/>
                  <div className="App" style={{
                      display: 'flex',
                      flexWrap: 'nowrap',
                      position: 'absolute',
                      top: '74px',
                      left: '0',
                      right: '0',
                      maxWidth: '1200px',
                      marginLeft: 'auto',
                      marginRight: 'auto'
                  }}>
                      <Routes/>
                  </div>
          </BrowserRouter>
  );
}

export default App;
