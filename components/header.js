import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import SubMenu from './submenu';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
        <>
            <Navbar light expand="md" className="navbar-wrapper">
                <NavbarToggler onClick={this.toggle} />
                <NavbarBrand href="/" className="ml-auto m-r-0">  <img src="../static/image/logo.png" alt="my image" /></NavbarBrand>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="d-none d-sm-block social-nav" navbar> 
                        <NavItem>
                            <NavLink href="/components/" className="instagram"></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/components/" className="twitter"></NavLink>
                        </NavItem>
                    </Nav>
                    <Nav className="header-nav" navbar >
                        <NavItem>
                            <NavLink href="/components/"> عنوان منوی اول </NavLink>
                            <SubMenu/>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/components/"> عنوان منوی دوم </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/components/"> عنوان منوی سوم </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/components/"> عنوان منوی چهارم </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/components/"> عنوان منوی پنجم </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/components/"> عنوان منوی ششم </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </>
    );
  }
}