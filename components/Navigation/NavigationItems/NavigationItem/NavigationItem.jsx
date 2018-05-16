import React from 'react';
import {
    NavItem,
    NavLink,
    Button,
    Input,
    InputGroup,
    InputGroupAddon,
} from 'reactstrap';

const NavigationItem = (props) => {
    let item;
    if (props.type === "anchor") {
        item = (
            <NavLink
                href={props.url}
                className={props.class}>
                {props.children}
            </NavLink>
        );
    } else if ( props.type === "button") {
        item = (
            <Button
                color={props.color}
                className={props.class}>
                {props.children}
            </Button>
        )
    } else if (props.type === "inputGroupAddon") {
        item = (
            <InputGroup>
                <Input placeholder={props.placeholder} />
                <InputGroupAddon
                    addonType="append">
                    {props.children}
                </InputGroupAddon>
            </InputGroup>
        )
    }

    return (
        <NavItem>
            {item}
        </NavItem>
    )
}

export default NavigationItem;
