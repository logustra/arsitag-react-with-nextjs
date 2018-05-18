import React from 'react';
import Aux from 'react-aux';
import styled from 'styled-components';
import {
    faFacebookF,
    faInstagram,
    faLinkedinIn,
    faTwitter,
} from '@fortawesome/fontawesome-free-brands';

import InformationItem from './InformationItem/InformationItem';

const StyledInformationItems = styled.ul`
    list-style: none;
    padding-left: 20px;
    border-bottom: 2px solid var(--mediumsmoke);
    padding-bottom: 20px;
    margin-bottom: 20px;

    &:last-of-type {
        border-bottom: 0;
        padding-bottom: 0;
        margin-bottom: 5px;
    }
`

const Title = styled.p`
    font-weight: bold;
    color: var(--gray);
    margin-bottom: 10px;

    ~ ul {
        padding-left: 0;

        li {
            color: var(--gray);
        }

        li + li {
            margin-top: 10px;
        }
    }
`

const InformationItems = (props) => {
    let items;

    if (props.type === 'iTop') {
        items = (
            <StyledInformationItems>
                <InformationItem type={props.type}>
                    Lampu, Sekuriti &amp; Keamanan Kebakaran,
                    Marmer &amp; Batu
                </InformationItem>

                <InformationItem type={props.type}>
                    {props.name}
                </InformationItem>

                <InformationItem type={props.type}>
                    {props.location}
                </InformationItem>

                <InformationItem type={props.type}>
                    <a href={props.call.number} className="text-danger font-weight-bold"
                        onClick={props.clicked}>
                        {props.call.number ? props.call.text : props.call.text}
                    </a>
                </InformationItem>

                <InformationItem type={props.type}>
                    <a href={props.website} target="_blank">{props.website}</a>
                </InformationItem>
            </StyledInformationItems>
        )
    } else if (props.type === 'iMiddle') {
        items = (
            <Aux>
                <Title>Nominal proyek Rata-Rata</Title>
                <StyledInformationItems>
                    <InformationItem type={props.type}>
                        Rp 5 juta - 10 miliar
                    </InformationItem>

                    <InformationItem type={props.type}>
                        Reprehenderit elit ipsum ullamco aute dolore dolor ut consequat. Qui veniam laborum sint id irure adipisicing adipisicing proident cupidatat ipsum. Id occaecat aliqua occaecat ad ullamco sint qui exercitation velit quis.
                    </InformationItem>
                </StyledInformationItems>
            </Aux>
        )
    } else if (props.type === 'iBottom') {
        items = (
            <Aux>
                <Title>Social Media</Title>
                <StyledInformationItems class="list-inline">
                    <InformationItem
                        url="#"
                        class="list-inline-item"
                        icon={faFacebookF}
                        type={props.type} />

                    <InformationItem
                        url="#"
                        class="list-inline-item"
                        icon={faInstagram}
                        type={props.type} />

                    <InformationItem
                        url="#"
                        class="list-inline-item"
                        icon={faLinkedinIn}
                        type={props.type} />

                    <InformationItem
                        url="#"
                        class="list-inline-item"
                        icon={faTwitter}
                        type={props.type} />
                </StyledInformationItems>
            </Aux>
        )
    }

    return items;
}

export default InformationItems;
