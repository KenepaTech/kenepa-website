import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
//FIXME: Footer issue
// import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Navbar />
        
        {/* FIXME: Footer is behaving weirdly when screen size changes */}
        {/* <Footer /> */}
    </div>
  );
}

export default App;
