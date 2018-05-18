import React from 'react';
import styled from 'styled-components';

const ReviewHeader = styled.div`
    display: flex;
    align-items: center;

    img {
        border-radius: 50%;
        height: 52px;
        border: 1px solid var(--darksmoke);
        margin-right: 15px;
    }
`

const ReviewBody = styled.div`
    margin-top: 15px;
`

const ReviewGroup = styled.div`
    h6 {
        margin-bottom: 0;
        font-weight: bold;
        font-size: 15px;
    }

    [class^=rate-] {
        font-size: 20px;
        line-height: 30px;
    }
`

const ReviewItem = (props) => {
    return (
        <li>
            <ReviewHeader>
                <img src={props.src} alt={props.alt}/>
                <ReviewGroup>
                    <h6>{props.name}</h6>
                    <div className={`rate-${props.rate}`}>
                        <span>&#9733;</span>
                        <span>&#9733;</span>
                        <span>&#9733;</span>
                        <span>&#9733;</span>
                        <span>&#9733;</span>
                    </div>
                </ReviewGroup>
            </ReviewHeader>

            <ReviewBody>
                {props.children}
            </ReviewBody>
        </li>
    )
}

export default ReviewItem;
