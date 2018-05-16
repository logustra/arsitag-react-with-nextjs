import React, { Component } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import FooItems from './FooterItems/FooterItems';

const StyledFooter = styled.footer`
    background: var(--mediumsmoke);
    border-top: 1px solid var(--darksmoke);
    color: var(--gray);
    margin-top: 65px;
`

const FooTop = styled.div`
    padding: 50px 0;
`

const Title = styled.h6`
    border-bottom: 1px solid var(--darksmoke);
    padding-bottom: 10px;
    margin-bottom: 20px;
`

const FooBottom = styled.div`
    border-top: 1px solid var(--darksmoke);
    padding: 20px 0;
    font-size: 13px;
`

class Footer extends Component {
    render() {
        return (
            <StyledFooter>
                <FooTop>
                    <Container>
                        <Row>
                            <Col md="4">
                               <Title className="text-uppercase font-weight-bold text-danger">
                                    perusahaan
                               </Title>

                               <FooItems
                                    child="1"
                                    class="list-unstyled mb-4" />
                            </Col>

                            <Col md="4">
                                <Title className="text-uppercase font-weight-bold text-danger">
                                    Kantor
                                </Title>

                                <FooItems
                                    child="2"
                                    class="list-unstyled mb-4" />
                            </Col>

                            <Col md="4">
                                <Title className="text-uppercase font-weight-bold text-danger">
                                    media social
                                </Title>

                                <FooItems
                                    child="3"
                                    class="list-unstyled list-inline" />
                            </Col>
                        </Row>
                    </Container>
                </FooTop>

                <FooBottom>
                    <Container>
                        &copy; Arsitag 2015 - 2017 | All rights reserved.
                    </Container>
                </FooBottom>

            </StyledFooter>
        )
    }
}

export default Footer;
