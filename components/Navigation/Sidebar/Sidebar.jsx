import React from 'react';
import Aux from 'react-aux';
import { Input, InputGroup, InputGroupAddon } from 'reactstrap';

import SidebarToggle from './SidebarToggle/SidebarToggle';
import NavigationItems from '../NavigationItems/NavigationItems';
import searchIcon from '../../../static/images/search.png?webp';

const Sidebar = (props) => {
    return (
        <Aux>
            <InputGroup className="d-lg-none ml-4 mr-4 ml-sm-5 mr-sm-5">
                <Input placeholder="Cari Inspirasi..." />
                <InputGroupAddon
                    addonType="append">
                    <img src={searchIcon} alt="search" />
                </InputGroupAddon>
            </InputGroup>

            <SidebarToggle
                show={props.show}
                clicked={props.clicked}/>

            <NavigationItems
                show={props.show}
                class="d-lg-none"
                type="sidebar"/>
        </Aux>
    )
}

export default Sidebar;
