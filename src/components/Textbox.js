import React from 'react';
import "./Textbox.scss";

const Textbox = ({children}) => {
    return(
        <section id="landing">
            {children}        
        </section>
    );
};

export default Textbox;