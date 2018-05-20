import React, { Component } from 'react';
import styled from 'styled-components';
import { Card, CardBody } from 'reactstrap';

import InformationItems from './InformationItems/InformationItems';

const StyledInformation = styled(Card)`
    border: 0;
    box-shadow: 0 2px 4px 0 #e6e7e8;
    margin-bottom: 30px;

    .i-top-items-loading,
    .i-middle-items-loading,
    .i-bottom-items-loading {
        padding-left: 0;
    }

    .i-bottom-items-loading {
        li {
            a {
                color: var(--lightsmoke);
                background: var(--lightsmoke);
            }
        }
    }
`

class Information extends Component {
    constructor(props) {
        super(props)
        this.state = {
            call: {
                number: null,
                text: 'Telepon Sekarang',
            }
        }
    }

    callNowHandler = () => {
        this.setState({
            call: {
                number: `tel:${this.props.number}`,
                text: this.props.number
            }
         })
    }

    render() {
        return (
            <StyledInformation className="information">
                <CardBody>
                    <InformationItems
                        type="iTop"
                        name={this.props.name}
                        location={this.props.location}
                        website={this.props.website}
                        call={this.state.call}
                        clicked={() => this.callNowHandler()} />

                    <InformationItems type="iMiddle" loading={this.props.loading} />
                    <InformationItems type="iBottom" loading={this.props.loading} />
                </CardBody>
            </StyledInformation>
        );
    }
}

export default Information;
