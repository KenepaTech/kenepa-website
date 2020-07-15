import React, { useState } from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ThemeProvider } from 'styled-components';
import Theme from './Theme';
import "react-responsive-modal/styles.css";
import { Modal } from 'react-responsive-modal';
import Menu from './components/Menu';

const modalStyles = {
  modal: {
    backgroundColor: "black",
    boxShadow: "none",
    display: "flex",
    overflow: "none",
    width: "100%",
    padding: "0",
    margin: "0",
    height: "100%",
    minWidth: "100%",
    justifyContent: "center"
  },
  overlay: {
    backgroundColor: "#1cccc",
    padding: 0
  },
  closeIcon: {
    fill: "#fff"
  }
};

function App() {
  const [ open, setOpen ] = useState(false);
  console.log(open);
  return (
    <ThemeProvider theme={Theme}>
      <>
      <div className="App">
          <Navbar open={open} setOpen={setOpen}/>

            <Modal
              open={open}
              onClose={() => setOpen(false)}
              styles={modalStyles}
              animationDuration={1000}
              focusTrapped={true}
              showCloseIcon={true}
              >

                <Menu  open/>

            </Modal>

          <Footer />
      </div>
      </>
    </ThemeProvider>
  );
}

export default App;
