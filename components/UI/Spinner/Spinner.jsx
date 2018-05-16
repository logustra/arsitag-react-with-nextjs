import React from 'react';
import styled from 'styled-components';

import animation from '../../../themes/Animation';

const StyledSpinner = styled.div`
    width: 40px;
    height: 40px;
    background-color: var(--danger);
    margin: 100px auto;
    animation: ${animation.RotatePlane} 1.2s infinite ease-in-out;
`

const Spinner = (props) => {
    return (
        <StyledSpinner></StyledSpinner>
    )
}

export default Spinner;
