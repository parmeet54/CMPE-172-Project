import React, { Component } from 'react';
import {Nav, Navbar,NavbarText, NavItem,NavbarBrand, NavLink} from 'reactstrap';


class AppNav extends Component {
    state = {  }
    render() { 
        return (
            <div>
              <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/">Library Book Catalog</NavbarBrand>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink href="/home/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/Books">Add a Book</NavLink>
                    </NavItem>
                    
                  </Nav>

              </Navbar>
            </div>
          );
    }
}
 
export default AppNav;