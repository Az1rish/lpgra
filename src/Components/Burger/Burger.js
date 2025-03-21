import React from 'react';
import { bool, func } from 'prop-types';
import { StyledBurger } from './Burger.style';

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div>
        <p>Menu<span>X</span></p>
      </div>
    </StyledBurger>
  )
}
Burger.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
};

export default Burger;