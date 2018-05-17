import React from 'react';
import styled from 'styled-components';
import animation from '../../../themes/Base/Animation';

const StyledLoading = styled.div`
    position: relative;
    width: ${props => props.width || '100%'};
    height: ${props => props.height};
    border-radius: ${props => props.bRadius || '4px' };
    background: var(--lightsmoke);

    &:before {
        display: block;
        content: '';
        position: absolute;
        width: 100%;
        height: ${props => props.height};
        border-radius: ${props => props.bRadius || '4px' };
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
            width={props.width}
            height={props.height}
            bRadius={props.bRadius}>
        </StyledLoading>
    )
}

export default Loading;
