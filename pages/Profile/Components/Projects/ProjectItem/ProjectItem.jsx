import React from 'react';
import styled from 'styled-components';
import {
    Col,
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardText,
} from 'reactstrap';

const StyledCard = styled(Card)`
    border: 0;
    box-shadow: 0 2px 4px 0 #e6e7e8;
    margin-bottom: 30px;
    color: var(--gray);

    .card-body {
        padding: 15px;
    }
`

const StyledCardTitle = styled(CardTitle)`
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 2px;
`

const Title = styled.h6`
    font-size: 15px;
    font-weight: bold;
    color: var(--gray);

    ~ p {
        font-size: 15px;
        color: var(--gray);
    }
`

const ProjectItem = (props) => {
    let item;

    if (props.type === "card") {
        item = (
            <Col sm="6" md="4">
                <StyledCard>
                    <CardImg top src={props.src} alt={props.alt} />
                    <CardBody>
                        <StyledCardTitle>{props.title}</StyledCardTitle>
                        <CardText>{props.photos} photos</CardText>
                    </CardBody>
                </StyledCard>
            </Col>
        )
    } else if (props.type === "service") {
        item = (
            <Col sm="12">
                <Title>{props.title}</Title>
                <p>{props.children}</p>
            </Col>
        )
    }

    return item;
}

export default ProjectItem;
