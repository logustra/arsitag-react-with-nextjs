import React, { Component } from 'react';
import styled from 'styled-components';
import {
    Container,
    Navbar,
    NavbarBrand,
} from 'reactstrap';

import Aux from '../../hoc/Aux';
import NavigationItems from './NavigationItems/NavigationItems';
import Sidebar from './Sidebar/Sidebar';
import Backdrop from '../UI/Backdrop/Backdrop';
import arsitagLogo from '../../static/images/logo.png';

const StyledNavbar = styled(Navbar) `
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
    background: var(--white);
`

class Navigation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
        }
    }

    sidebarHandler = () => {
        this.setState((prevState) => {
            return { show: !prevState.show };
        });
    }

    render() {
        let navigation, screenSize;
        screenSize = window.screen.availWidth;

        if(screenSize > '991') {
            navigation = (
                <NavigationItems
                    class="d-none d-sm-none d-md-none d-lg-flex"
                    type="navbar" />
            )
        } else {
            navigation = (
                <Aux>
                    <Sidebar
                        show={this.state.show}
                        clicked={() => this.sidebarHandler()} />

                    <Backdrop
                        show={this.state.show}
                        class="d-lg-none d-xl-none"
                        clicked={() => this.sidebarHandler()} />
                </Aux>
            )
        }

        return (
            <StyledNavbar color="faded" light expand="sm">
                <Container className="flex-nowrap flex-lg-wrap">
                    <NavbarBrand
                        href="/"
                        className="mr-0 mr-lg-2">
                        <img src={arsitagLogo} alt="arsitag" />
                    </NavbarBrand>

                    {navigation}
                </Container>
            </StyledNavbar>
        );
    }
}

export default Navigation;
