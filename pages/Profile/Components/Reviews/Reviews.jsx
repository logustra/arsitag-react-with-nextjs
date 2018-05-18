import React from 'react';
import styled from 'styled-components';
import { Card, CardBody } from 'reactstrap';

import media from '../../../../themes/Utils/Breakpoint';
import ReviewItem from './ReviewItem/ReviewItem';

const StyledCard = styled(Card) `
    border: 0;
    box-shadow: 0 2px 4px 0 #e6e7e8;
    color: var(--gray);

    ${media.xs`
        margin-bottom: 30px;
    `}

    ${media.mnsm_mxlg`
        margin-bottom: 30px;
    `}
`

const Title = styled.h6`
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 20px;
`

const StyledReviewItems = styled.ul`
    margin-bottom: 0;

    li {
        border-bottom: 2px solid var(--mediumsmoke);
        padding-bottom: 20px;
        margin-bottom: 20px;

        &:last-of-type {
            border-bottom: 0;
            padding-bottom: 0;
            margin-bottom: 0;
        }
    }
`

const Reviews = (props) => {
    let reviews;

    reviews = props.datas.map((data, index) => {
        return (
            <ReviewItem
                key={index}
                src={data.img}
                alt={data.img}
                name={data.name}
                rate={data.rate}>
                {data.comment}
            </ReviewItem>
        )
    })

    return (
        <StyledCard>
            <CardBody>
                <Title>Review ({props.count})</Title>
                <StyledReviewItems className="list-unstyled">
                    {reviews}
                </StyledReviewItems>
            </CardBody>
        </StyledCard>
    )
}

export default Reviews;
