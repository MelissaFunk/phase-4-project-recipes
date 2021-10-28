import React from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements';

const NavBar = () => {
    return (
<>
    <Nav>
      <NavLink to="/">
        <h1>Home</h1>
        </NavLink>
        <Bars />
        <NavMenu>
            <NavLink to="/discover" activeStyle>
            Discover
            </NavLink>
            <NavLink to="/my-recipes" activeStyle>
            My Recipes
            </NavLink>
        </NavMenu>
        <NavBtn>
        <NavBtnLink to="/login"> Login</NavBtnLink>
       </NavBtn>
    </Nav>  
</>
    );
};

export default NavBar;
