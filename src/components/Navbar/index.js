import React from 'react';
import { Bars, Nav, NavIcon, NavLink } from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to='/'>
                    Pizza
                </NavLink>
                <NavIcon>
                    <p>Menu</p>
                    <Bars></Bars>
                </NavIcon>
            </Nav>
        </>
    )
}

export default Navbar;
