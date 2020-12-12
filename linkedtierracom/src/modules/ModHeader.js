import React, { Component }  from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class CompHeader extends Component {

    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <React.Fragment>
                

                <Navbar dark sticky="top" expand="md">
                    <div className="container">
                        
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    
                                    <NavLink className="nav-link" to="/aboutus">
                                        <i className="fa fa-info fa-lg" /> About   
                                    </NavLink>
                                </NavItem>
                                <NavItem>

                                    <NavLink className="nav-link" to="/systems">
                                        <i className="fa fa-list fa-lg" /> Systems
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                <NavbarBrand className="mr-auto" href="/"><img src="/assets/images/logo/logomaroonback.png" height="30" width="30" alt="NuCamp Logo" /></NavbarBrand>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/exportation">
                                        <i className="fa fa-address-card fa-lg" /> Exportation
                                    </NavLink>
                                </NavItem>
                                <NavItem>

                                <NavLink className="nav-link" to="/contact">
                                        <i className="fa fa-address-card fa-lg" /> Contact
                                    </NavLink>

                                 </NavItem>
                               
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
        
            </React.Fragment>
        );
    }
}

export default CompHeader;