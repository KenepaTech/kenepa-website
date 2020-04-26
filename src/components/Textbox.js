import React from 'react';
import StyledTextbox from './styles/Textbox.styled';

const Textbox = ({children}) => {
    return(
        <StyledTextbox>
            {children}        
        </StyledTextbox>
    );
};

export default Textbox;