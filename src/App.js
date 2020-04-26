import React, { Component, useState } from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ThemeProvider } from 'styled-components';
import Theme from './Theme';
import Burger from './components/Burger';
import Menu from './components/Menu';

function App() {
  const [ open, setOpen ] = useState(false);
  console.log(open);
  return (
    <ThemeProvider theme={Theme}>
      <>
      <div className="App">
          <Navbar open={open} setOpen={setOpen}/>

          <Footer />
      </div>
      </>
    </ThemeProvider>
  );
}

export default App;
