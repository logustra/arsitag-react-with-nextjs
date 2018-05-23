import React, { Component } from 'react';
import Aux from 'react-aux';
import styled from 'styled-components';
import {
    Container,
    Navbar,
    NavbarBrand,
} from 'reactstrap';

import NavigationItems from './NavigationItems/NavigationItems';
import media from '../../themes/Utils/Breakpoint';
import Sidebar from './Sidebar/Sidebar';
import Backdrop from '../UI/Backdrop/Backdrop';
import Loading from '../UI/Loading/Loading';
import arsitagLogo from '../../static/images/logo.png?webp';
import NavigationItem from './NavigationItems/NavigationItem/NavigationItem';

const StyledNavbar = styled(Navbar) `
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
    background: var(--white);
`

const NavWrapperItem = styled.div`
    display: inherit;

    ${media.xs`
        width: 100%;
        padding-left: 1.5rem;
    `}

    ${media.mnmd`
        width: 92%;
    `}
`
class Navigation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            screenSize: false,
        }
    }

    componentDidMount() {
        this.setState({ screenSize: window.innerWidth });
    }

    sidebarHandler = () => {
        this.setState((prevState) => {
            return { show: !prevState.show };
        });
    }

    render() {
        let navigation;

        if (!this.state.screenSize) {
            navigation = (
                <NavWrapperItem>
                    <Loading height="38px" width="100%" />
                </NavWrapperItem>
            )
        } else if (this.state.screenSize > 991) {
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
