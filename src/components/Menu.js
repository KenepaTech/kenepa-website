import React from 'react';
import StyledMenu from './styles/Menu.styled';
import { bool } from 'prop-types';

const Menu = ({open}) => {
    return (
      <StyledMenu open={open}>
        <a href="/">
          <span role="img" aria-label="home">&#127968;</span>
          Home
        </a>
        <a href="/about">
          <span role="img" aria-label="about">&#128220;</span>
          About
          </a>
        <a href="#">
          <span role="img" aria-label="contact">&#x1f4e9;</span>
          Contact
          </a>
      </StyledMenu>
    )
  }

Menu.propTypes = {
    open:bool.isRequired,
}

  export default Menu;