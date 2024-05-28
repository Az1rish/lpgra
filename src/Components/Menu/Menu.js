import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.style';
import bylaws from '../../images/LPGRA_BYLAWS_2024.pdf';

const Menu = ({ open }) => {
    return (
        <StyledMenu open={open}>
            <a href="/">
                Home
            </a>
            <a 
                href={bylaws}
                target='_blank' 
                rel='noopener noreferrer'>
                LPGRA Bylaws
            </a>
            <a href="/newsletters">
                Newsletters
            </a>
            <a href="/minutes">
                Meeting Schedule & Minutes
            </a>
            <a href="/elections">
                Elections
            </a>
            <a href="/board">
                Meet The Board
            </a>
            <a href="/links">
                Additional Information
            </a>
            <a href="/requestForm">
                Comment Form
            </a>
            <a href="/contact">
                Contact
            </a>
        </StyledMenu>
    )
}
Menu.propTypes = {
    open: bool.isRequired,
}

export default Menu