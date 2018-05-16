import React from 'react';
import styled from 'styled-components';

const StyledSidebarToggle = styled.button `
    background: transparent;
    border: 0;
    padding: 0;

    &:hover,
    &:active,
    &:focus {
        background: transparent !important;
        box-shadow: none !important;
        outline: none;
    }

    .toggle-icon {
        display: block;
        width: 25px;
        height: 3px;
        background: var(--gray);
        border-radius: 30px;
        transition: 0.4s;

        &:nth-of-type(1) {
            transform: ${props => props.show ? 'rotate(45deg) translate(7px, 6px)' : 'rotate(0) translate(0, 0)'};
        }

        &:nth-of-type(2) {
            width: 19px;
            margin: 6px 0 6px 6px;
            opacity: ${props => props.show ? '0' : '1'};
        }

        &:nth-of-type(3) {
            transform: ${props => props.show ? 'rotate(-45deg) translate(6px, -6px)' : 'rotate(0) translate(0, 0)'};
        }
    }
`

const SidebarToggle = (props) => {
    return (
        <StyledSidebarToggle
            show={props.show}
            className="d-lg-none"
            onClick={props.clicked}>
            <span className="toggle-icon"></span>
            <span className="toggle-icon"></span>
            <span className="toggle-icon"></span>
        </StyledSidebarToggle>
    )
}

export default SidebarToggle;
