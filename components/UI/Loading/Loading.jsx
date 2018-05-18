/*
    btl = border-top-left
    btr = border-top-right
    bbl = border-bottom-left
    bbr = border-bottom-rigt
*/

import React from 'react';
import styled from 'styled-components';
import animation from '../../../themes/Base/Animation';

const StyledLoading = styled.div`
    position: relative;
    width: ${props => props.width || '100%'};
    height: ${props => props.height};
    border-top-left-radius: ${props => props.bRadius || '4px' };
    border-top-right-radius: ${props => props.bRadius || '4px' };
    border-bottom-left-radius: ${props => props.bRadius || '4px' };
    border-bottom-right-radius: ${props => props.bRadius || '4px' };
    background: var(--lightsmoke);

    &:before {
        display: block;
        content: '';
        position: absolute;
        width: 100%;
        height: ${props => props.height};
        border-top-left-radius: ${props => props.bRadius || '4px'};
        border-top-right-radius: ${props => props.bRadius || '4px'};
        border-bottom-left-radius: ${props => props.bRadius || '4px'};
        border-bottom-right-radius: ${props => props.bRadius || '4px' };
        left: 0;
        top: 0;
        background: var(--darksmoke);
        opacity: .1;
        animation: ${animation.ProgressLeftToRight} .5s infinite ease-out;
    }
`

const Loading = (props) => {
    return (
        <StyledLoading
            className={props.class}
            width={props.width}
            height={props.height}
            btlRadius={props.btlRadius}
            btrRadius={props.btrRadius}
            bblRadius={props.bblRadius}
            bbrRadius={props.bbrRadius}>
        </StyledLoading>
    )
}

export default Loading;
