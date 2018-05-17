import React from 'react';
import { Nav } from 'reactstrap';
import styled from 'styled-components';

import Aux from '../../../hoc/Aux';
import media from '../../../themes/Utils/Breakpoint';
import NavigationItem from './NavigationItem/NavigationItem';
import searchIcon from '../../../static/images/search.png';

const NavWrapperItem = styled.div`
    display: flex;
    justify-content: space-between;
    flex-grow: 1;

    .navbar-nav {
        .nav-item {
            &:hover {
                .nav-link {
                    color: var(--red);
                }
            }

            .nav-link {
                font-size: 15px;
                cursor: pointer;
            }
        }

        &:first-of-type {
           .nav-item {
               padding: 0 10px;
           }
        }

        &:last-of-type {
            .nav-item {
                position: relative;

                &:nth-of-type(2):before {
                    background: var(--darksmoke);
                    display: block;
                    content: '';
                    width: 1px;
                    height: 25px;
                    margin: 7px 0;
                    position: absolute;
                    right: 0;
                }

                .btn,
                input {
                    font-size: 15px;
                }

                .btn-link {
                    color: var(--secondary);

                    &:hover {
                        color: var(--red);
                        text-decoration: none;
                    }
                }
            }
        }
    }

    ${media.xs`
        background: var(--white);
        display: block
        position: fixed;
        left: ${props => props.show ? '0' : '-100%'};
        top: 0;
        width: 75%;
        height: 100%;
        z-index: 1020;
        box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
        padding: 30px;
        transition: left .5s;

        .navbar-nav {
            margin: 0 !important;

            &:last-of-type {
                .nav-item {
                    &:nth-of-type(2):before {
                        display: none !important;
                    }

                    &:last-of-type {
                        border-bottom: 0;
                    }
                }
            }

            .nav-item {
                padding: 0 !important;
                border-bottom: 1px solid var(--darksmoke);
            }
        }
    `}

    ${media.mnsm_mxlg`
        background: var(--white);
        display: block
        position: fixed;
        left: ${props => props.show ? '0' : '-100%'};
        top: 0;
        width: 75%;
        height: 100%;
        z-index: 1020;
        box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
        padding: 30px;
        transition: left .5s;

        .navbar-nav {
            margin: 0 !important;
            flex-direction: column;

            &:last-of-type {
                .nav-item {
                    &:nth-of-type(2):before {
                        display: none !important;
                    }

                    &:last-of-type {
                        border-bottom: 0;
                    }
                }
            }

            .nav-item {
                padding: 0 !important;
                border-bottom: 1px solid var(--darksmoke);
            }
        }
    `}
`

const NavigationItems = (props) => {
    let items;

    if(props.type === 'navbar') {
        items = (
            <Aux>
                <Nav className="ml-4" navbar>
                    <NavigationItem
                        url="#"
                        type="anchor">
                        Inspirasi
                    </NavigationItem>

                    <NavigationItem
                        url="#"
                        type="anchor">
                        Artikel
                    </NavigationItem>

                    <NavigationItem
                        url="#"
                        type="anchor">
                        Profesional
                    </NavigationItem>
                </Nav>

                <Nav navbar>
                    <NavigationItem
                        color="primary"
                        class="font-weight-bold"
                        type="button">
                        Cari Profesional
                    </NavigationItem>

                    <NavigationItem
                        class="ml-2 mr-2"
                        type="anchor">
                        Sign Up
                    </NavigationItem>

                    <NavigationItem
                        class="ml-2 mr-2"
                        type="anchor">
                        Log In
                    </NavigationItem>

                    <NavigationItem
                        placeholder="Cari Inspirasi..."
                        type="inputGroupAddon">
                        <img src={searchIcon} alt="search" />
                    </NavigationItem>
                </Nav>
            </Aux>
        )
    } else if(props.type === 'sidebar') {
        items = (
            <Aux>
                <Nav className="ml-4" navbar>
                    <NavigationItem
                        url="#"
                        type="anchor">
                        Inspirasi
                    </NavigationItem>

                    <NavigationItem
                        url="#"
                        type="anchor">
                        Artikel
                    </NavigationItem>

                    <NavigationItem
                        url="#"
                        type="anchor">
                        Profesional
                    </NavigationItem>
                </Nav>

                <Nav navbar>
                    <NavigationItem
                        type="anchor">
                        Cari Profesional
                    </NavigationItem>

                    <NavigationItem
                        type="anchor">
                        Sign Up
                    </NavigationItem>

                    <NavigationItem
                        type="anchor">
                        Log In
                    </NavigationItem>
                </Nav>
            </Aux>
        )
    }

    return (
        <NavWrapperItem show={props.show} className={props.class}>
            {items}
            {props.children}
        </NavWrapperItem>
    );
}

export default NavigationItems;
