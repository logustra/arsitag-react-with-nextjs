import React from 'react';
import { NavItem, NavLink } from 'reactstrap';

const TabInformationItem = (props) => {
    return (
        <NavItem>
            <NavLink
                className={props.class}
                onClick={props.clicked}>
                {props.children}
            </NavLink>
        </NavItem>
    )
}

export default TabInformationItem;
