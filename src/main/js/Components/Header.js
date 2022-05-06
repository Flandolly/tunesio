import React from 'react';
import {Nav, Navbar, NavbarBrand, NavbarText, NavItem} from "reactstrap";
import SearchBar from "./SearchBar";

function Header() {
    return (
        <div className={"header"}>
            <Navbar color="dark" dark expand fixed={"top"}>
                <NavbarBrand href={"/"}>
                    Tunes.io
                </NavbarBrand>
                <Nav className={"w-50"}>
                    <NavItem className={"w-100"}>
                        <SearchBar/>
                    </NavItem>
                </Nav>
                <NavbarText>
                    Music/Podcast Manager
                </NavbarText>
            </Navbar>
        </div>
    )
}

export default Header;