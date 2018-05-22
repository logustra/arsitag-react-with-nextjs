import React from 'react';
import styled from 'styled-components';
import { Card, CardBody } from 'reactstrap';

import media from '../../../../themes/Utils/Breakpoint';
import ReviewItem from './ReviewItem/ReviewItem';
import Loading from '../../../../components/UI/Loading/Loading';

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

const ReviewHeader = styled.div`
    display: flex;
    align-items: center;

    img {
        margin-right: 15px;
    }
`

const ReviewBody = styled.div`
    margin-top: 15px;
`

const Reviews = (props) => {
    let reviews, review;

    if (props.count && props.datas) {
        review = props.datas.map((data, index) => {
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

        reviews = (
            <StyledCard>
                <CardBody>
                    <Title>Review ({props.count})</Title>
                    <StyledReviewItems className="list-unstyled">
                        {review}
                    </StyledReviewItems>
                </CardBody>
            </StyledCard>
        )
    } else {
        reviews = (
            <StyledCard>
                <CardBody>
                    <Loading height="21px" width="80px" mb="20px" />
                    <StyledReviewItems className="list-unstyled">
                        <li>
                            <ReviewHeader>
                                <Loading height="52px" width="52px" bRadius="50%" type="img" />
                                <div className="group">
                                    <Loading height="21px" width="100px" mb="10px" />
                                    <Loading height="21px" width="125px" />
                                </div>
                            </ReviewHeader>

                            <ReviewBody>
                                <Loading height="63px" />
                            </ReviewBody>
                        </li>
                    </StyledReviewItems>
                </CardBody>
            </StyledCard>
        );
    }

    return reviews;
}

export default Reviews;
