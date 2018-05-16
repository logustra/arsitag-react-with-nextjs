import { keyframes } from 'styled-components';

const RotatePlane = keyframes`
    0% { -webkit-transform: perspective(120px) }
    50% { -webkit-transform: perspective(120px) rotateY(180deg) }
    100% { -webkit-transform: perspective(120px) rotateY(180deg)  rotateX(180deg) }
`

const Animation = {
    RotatePlane,
}

export default Animation;
