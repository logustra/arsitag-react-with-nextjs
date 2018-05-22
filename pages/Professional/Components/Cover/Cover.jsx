import React from 'react';
import styled from 'styled-components';
import {
    Card,
    CardImg,
    CardBody,
    Button
} from 'reactstrap';

import Loading from '../../../../components/UI/Loading/Loading';
import media from '../../../../themes/Utils/Breakpoint';
import imgCover from '../../../../static/images/cover.png?webp';
import imgUser from '../../../../static/images/logo_tumblr_2.png?webp';

const StyledCard = styled(Card) `
    border: 0;
    box-shadow: 0 2px 4px 0 #e6e7e8;
    margin-bottom: 30px;

    .styled-card-img-loading {
        border-radius: 0;

        ~ .card-body {

            .user-img-loading {
                position: relative;
                margin-top: -60px;
                margin-right: 20px;
            }
        }
    }
`

const CardImgWrapper = styled.div`
    height: 270px;
`

const StyledCardImg = styled(CardImg) `
    border-radius: 0;
    height:270px;
    object-fit: cover;
`

const StyledCardBody = styled(CardBody)`
        display: flex;
        align-items: center;
        padding-top: 24px;
        padding-bottom: 15px;

        ${media.xs`
            flex-direction: column;
            justify-content: center;
            padding-bottom: 30px;

            img {
                margin-bottom: 25px;
                margin-right: 0;
            }
        `}

        ${media.mnsm_mxlg`
            flex-direction: column;
            padding-bottom: 30px;

            img {
                margin-bottom: 25px;
                margin-right: 0;
            }
        `}
    }
`

const UserImg = styled.img`
    position: relative;
    margin-top: -60px;
    margin-right: 20px;
`

const UserBody = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-top: -10px;

    ${media.xs`
        flex-direction: column;
    `}

    ${media.sm`
        flex-direction: column;
    `}
`

const UserGroup = styled.div`

    ${media.xs`
        text-align: center;

        .btn {
            margin-top: 25px;
        }
    `}

    ${media.sm`
        text-align: center;

        .btn {
            margin-top: 25px;
        }
    `}

    @media only screen and (max-width: 370px) {
        display: flex;
        flex-direction: column;
        width: 100%;

        .btn {
            margin-left: 0 !important;
            width: 100%
        }
    }

    .btn + .btn {
        margin-left: 15px;
    }

    .rate-1,
    .rate-2,
    .rate-3,
    .rate-4,
    .rate-5 {
        display: flex;
        align-items: center;

        ${media.xs`
            justify-content: center;
        `}

        ${media.sm`
            justify-content: center;
        `}
    }

    .reviews-count {
        font-size: 15px;
        margin-left: 10px;
        color: var(--gray);
    }

`

const UserTitle = styled.h5`
    font-weight: bold;
    font-size: 18px;
    margin: 0;
    color: var(--gray);

    .loading {
        ${media.xs`
            margin: 0 auto;
        `}

        ${media.sm`
            margin: 0 auto;
        `}
    }
`

const Cover = (props) => {
    let cover;

    if (props.name && props.count) {
        cover = (
            <StyledCard>
                <StyledCardImg top src={imgCover} alt="cover" />
                <StyledCardBody className="d-flex">
                    <UserImg src={imgUser} alt="User Image" />
                    <UserBody className="mt-1">
                        <UserGroup>
                            <UserTitle>{props.name}</UserTitle>
                            <div className="rate-4">
                                <span>&#9733;</span>
                                <span>&#9733;</span>
                                <span>&#9733;</span>
                                <span>&#9733;</span>
                                <span>&#9733;</span>

                                <span className="reviews-count">{props.count} Reviews</span>
                            </div>
                        </UserGroup>

                        <UserGroup>
                            <Button
                                color="danger"
                                className="btn-line-danger">
                                Berikan Review
                        </Button>
                            <Button color="danger">
                                Contact Sekarang
                        </Button>
                        </UserGroup>
                    </UserBody>
                </StyledCardBody>
            </StyledCard>
        );
    } else {
        cover = (
            <StyledCard>
                <Loading class="styled-card-img-loading" height="270px" bRadius="0" />
                <StyledCardBody className="d-flex">
                    <Loading class="user-img-loading" height="128px" width="128px" bRadius="50%" bxShadow="true" type="img" />
                    <UserBody className="mt-1">
                        <UserGroup>
                            <UserTitle>
                                <Loading class="mb-1 mt-0" height="21px" width="175px" />
                            </UserTitle>
                            <div className="rate-4">
                                <Loading class="mt-0" height="21px" width="200px" />
                            </div>
                        </UserGroup>

                        <UserGroup>
                            <Loading class="btn" height="38px" width="135px" />
                            <Loading class="btn" height="38px" width="150px" />
                        </UserGroup>
                    </UserBody>
                </StyledCardBody>
            </StyledCard>
        )
    }

    return cover;
}

export default Cover;
