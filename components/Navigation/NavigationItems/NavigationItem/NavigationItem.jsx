import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import {
    NavItem,
    NavLink,
    Button,
    Input,
    InputGroup,
    InputGroupAddon,
} from 'reactstrap';

const StyledInputGroupAddon = styled(InputGroupAddon)`
    padding: 0 !important;

    .btn {
        background: transparent;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
`

const NavigationItem = (props) => {
    let item;
    if (props.type === "anchor") {
        item = (
            <Link href={props.url ? props.url : '#'}>
                <NavLink
                    className={props.class}>
                    {props.children}
                </NavLink>
            </Link>
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
                <StyledInputGroupAddon
                    addonType="append">
                    <button className="btn">
                        {props.children}
                    </button>
                </StyledInputGroupAddon>
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
