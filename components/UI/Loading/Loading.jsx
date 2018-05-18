/*
    btl = border-top-left
    btr = border-top-right
    bbl = border-bottom-left
    bbr = border-bottom-rigt
*/

import React from 'react';
import styled from 'styled-components';
import animation from '../../../themes/Base/Animation';
import loadingImg from '../../../static/images/loading.png?webp';

const StyledLoadingImg = styled.img`
    max-width: ${props => props.width || '100%'};
    max-height: ${props => props.height};
    border-top-left-radius: ${props => props.btlRadius || '4px'};
    border-top-right-radius: ${props => props.btrRadius || '4px'};
    border-bottom-left-radius: ${props => props.bblRadius || '4px'};
    border-bottom-right-radius: ${props => props.bbrbRadius || '4px'};
    border-radius: ${props => props.btlRadius && props.btrRadius && props.bblRadius && props.bbrbRadius ? '' : props.bRadius};
    object-fit: cover;
    margin-top: ${props => props.mt};
    margin-bottom: ${props => props.mb};
    box-shadow: ${props => props.bxShadow ? '0 0 10px 0 rgba(0, 0, 0, 0.1)' : ''};
`

const Loading = (props) => {

    return (
        <StyledLoadingImg
            className={props.class}
            src={loadingImg}
            alt="Loading..."
            width={props.width}
            height={props.height}
            btlRadius={props.btlRadius}
            btrRadius={props.btrRadius}
            bblRadius={props.bblRadius}
            bbrRadius={props.bbrRadius}
            bRadius={props.bRadius}
            bxShadow={props.bxShadow}
            mt={props.mt}
            mb={props.mb} />
    )
}

export default Loading;
