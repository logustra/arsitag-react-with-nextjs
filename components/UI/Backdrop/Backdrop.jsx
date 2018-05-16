import React from 'react';
import styled from 'styled-components';

const StyledBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: var(--black);
    opacity: ${props => props.show ? '0.5' : '0'};
    z-index: 900;
    visibility: ${props => props.show ? 'visible' : 'hidden'};
    transition: all .5s;
`

const Backdrop = (props) => {
    return (
        <StyledBackdrop
            show={props.show}
            className={props.class}
            onClick={props.clicked}>
        </StyledBackdrop>
    )
}

export default Backdrop;
