import React from 'react';
import Aux from 'react-aux';
import styled from 'styled-components';
import { Row } from 'reactstrap';

import ProjectItem from './ProjectItem/ProjectItem';

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

    let cards, services;

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

    return (
        <Aux>
            <Title>Projects (12)</Title>
            <Row>
                {cards}
            </Row>
            <StyledRow>
                {services}
            </StyledRow>
        </Aux>
    );
}

export default Projects;
