import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      {/* TODO: Extract nav to Navbar component */}
      {/* TODO: Implement proper tracking of active link in nav */}
      <nav className="Navbar">
        <ul>
          {/* <li><img src="./kenepa_logo_512.png"></img></li> */}
          {/* <li className="Logo">Kenepa</li> */}
          {/* FIXME: Just testing */}
          <li className="active">Home</li>
          <li>About</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
