import React from 'react';
import styled from 'styled-components';
import animation from '../../../themes/Base/Animation';
import loadingImg from '../../../static/images/loading.png?webp';

const StyledLoadingImg = styled.img`
    max-width: ${props => props.width || '100%'};
    max-height: ${props => props.height};
    border-radius: ${props => props.bRadius || '4px'};
    object-fit: cover;
    margin-top: ${props => props.mt};
    margin-bottom: ${props => props.mb};
    box-shadow: ${props => props.bxShadow ? '0 0 10px 0 rgba(0, 0, 0, 0.1)' : ''};
`

const StyledLoading = styled.div`
    position: relative;
    width: ${props => props.width || '100%'};
    height: ${props => props.height};
    border-radius: ${props => props.bRadius || '4px'};
    background: var(--lightsmoke);
    margin-top: ${props => props.mt};
    margin-bottom: ${props => props.mb};

    &:before {
        display: block;
        content: '';
        position: absolute;
        width: 100%;
        height: ${props => props.height};
        border-radius: ${props => props.bRadius || '4px'};
        left: 0;
        top: 0;
        background: var(--darksmoke);
        opacity: .1;
        animation: ${animation.ProgressLeftToRight} .5s infinite ease-out;
        margin-top: ${props => props.mt};
        margin-bottom: ${props => props.mb};
    }
`

const Loading = (props) => {
    let loading;

    if (props.type === 'img') {
        loading = (
            <StyledLoadingImg
                className={`${props.class ? props.class : ''} loading`}
                src={loadingImg}
                alt="Loading..."
                width={props.width}
                height={props.height}
                bRadius={props.bRadius}
                bxShadow={props.bxShadow}
                mt={props.mt}
                mb={props.mb} />
        );
    } else {
        loading = (
            <StyledLoading
                className={`${props.class ? props.class : ''} loading`}
                src={loadingImg}
                alt="Loading..."
                width={props.width}
                height={props.height}
                bRadius={props.bRadius}
                mt={props.mt}
                mb={props.mb} />
        );
    }

    return loading
}

export default Loading;
