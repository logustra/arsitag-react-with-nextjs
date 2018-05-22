import React from 'react';
import Aux from 'react-aux';
import styled from 'styled-components';
import {
    Row,
    Col,
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardText,
} from 'reactstrap';

import ProjectItem from './ProjectItem/ProjectItem';
import Loading from '../../../../components/UI/Loading/Loading';

const StyledCard = styled(Card) `
    border: 0;
    box-shadow: 0 2px 4px 0 #e6e7e8;
    margin-bottom: 30px;
    color: var(--gray);

    .card-body {
        padding: 15px;
    }
`

const StyledCardTitle = styled(CardTitle) `
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 2px;
`

const Title = styled.h5`
    font-size: 18px;
    font-weight: bold;
    color: var(--gray);
    margin-bottom: 20px;
`

const StyledRow = styled(Row)`

    .col-sm-12 + .col-sm-12 {
        margin-top: 20px;
    }
`

const Projects = (props) => {

    let cards, services, projects;

    if (props.data) {
        cards = props.data.cards.map((card, index) => {
            return (
                <ProjectItem
                    key={index}
                    src={card.img}
                    alt={card.title}
                    title={card.title}
                    photos={card.photos_count}
                    type="card" />
            )
        })

        services = props.data.services.map((service, index) => {
            return (
                <ProjectItem
                    key={index}
                    title={service.title}
                    type="service">
                    {service.body}
                </ProjectItem>
            )
        })

        projects = (
            <Aux>
                <Title>Projects (12)</Title>
                <Row>
                    {cards}
                </Row>
                <StyledRow>
                    {services}
                </StyledRow>
            </Aux>
        )
    } else {
        projects = (
            <Aux>
                <Loading height="21px" width="175px" mb="20px" />
                <Row>
                    <Col sm="6" md="4">
                        <StyledCard>
                            <Loading height="186px" />
                            <CardBody>
                                <Loading height="21px" width="50%" mb="5px" />
                                <Loading height="18px" width="40%" />
                            </CardBody>
                        </StyledCard>
                    </Col>
                    <Col sm="6" md="4">
                        <StyledCard>
                            <Loading height="186px" bblRadius="0" bbrRadius="0"/>
                            <CardBody>
                                <Loading height="21px" width="50%" mb="5px" />
                                <Loading height="18px" width="40%" />
                            </CardBody>
                        </StyledCard>
                    </Col>
                    <Col sm="6" md="4">
                        <StyledCard>
                            <Loading height="186px" />
                            <CardBody>
                                <Loading height="21px" width="50%" mb="5px" />
                                <Loading height="18px" width="40%" />
                            </CardBody>
                        </StyledCard>
                    </Col>
                </Row>
                <StyledRow>
                    <Col sm="12">
                        <Loading height="21px" width="50%" mb="5px" />
                        <Loading height="66px" mb="15px" />
                    </Col>
                    <Col sm="12">
                        <Loading height="21px" width="50%" mb="5px" />
                        <Loading height="66px" />
                    </Col>
                </StyledRow>
            </Aux>
        )
    }

    return projects;
}

export default Projects;
