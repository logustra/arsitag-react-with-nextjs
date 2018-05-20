import React from 'react';
import Aux from 'react-aux';
import styled from 'styled-components';
import {
    faFacebookF,
    faInstagram,
    faLinkedinIn,
    faTwitter,
} from '@fortawesome/fontawesome-free-brands';

import Loading from '../../../../../components/UI/Loading/Loading';
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

    .i-top-item-loading {
        padding: 0;

        &:before {
            content: '';
            display: none;
        }
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
        if (props.name && props.location && props.website && props.call) {
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
        } else {
            items = (
                <StyledInformationItems
                    className="i-top-items-loading">
                    <InformationItem
                        type={props.type}
                        class="i-top-item-loading">
                        <Loading height="21px" />
                    </InformationItem>

                    <InformationItem
                        type={props.type}
                        class="i-top-item-loading">
                        <Loading height="21px" width="75%"/>
                    </InformationItem>

                    <InformationItem
                        type={props.type}
                        class="i-top-item-loading">
                        <Loading height="21px" width="80%"/>
                    </InformationItem>

                    <InformationItem
                        type={props.type}
                        class="i-top-item-loading">
                        <Loading height="21px" width="75%"/>
                    </InformationItem>

                    <InformationItem
                        type={props.type}
                        class="i-top-item-loading">
                        <Loading height="21px" width="85%"/>
                    </InformationItem>
                </StyledInformationItems>
            );
        }

    } else if (props.type === 'iMiddle') {
        if (props.loading) {
            items = (
                <Aux>
                    <Loading mb="10px" height="21px" width="80%" />

                    <StyledInformationItems
                        className="i-middle-items-loading">
                        <li>
                            <Loading mb="10px" height="21px" width="70%" />
                        </li>
                        <li>
                            <Loading height="70px" />
                        </li>
                    </StyledInformationItems>
                </Aux>
            )
        } else {
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
        }
    } else if (props.type === 'iBottom') {
        if (props.loading) {
            items = (
                <Aux>
                    <Loading mb="10px" height="21px" width="50%" />
                    <StyledInformationItems
                        className="list-inline i-bottom-items-loading">
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
        } else {
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
    }

    return items;
}

export default InformationItems;
