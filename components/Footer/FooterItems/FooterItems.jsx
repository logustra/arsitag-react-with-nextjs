import React from 'react';
import styled from 'styled-components';
import FontAwesome from '@fortawesome/react-fontawesome';
import {
    faFacebookF,
    faInstagram,
    faTwitter,
    faLinkedinIn,
} from '@fortawesome/fontawesome-free-brands';
import FooItem from './FooItem/FooItem';

const FooSosmed = styled.ul`

    li {

        a {
            display: flex;
            width: 35px;
            height: 35px;
            background: var(--gray);
            color: var(--white);
            justify-content: center;
            align-items: center;
            border-radius: 50%;
        }
    }
`

const FooterItems = (props) => {
    let item;

    if (props.child === '1') {
        item = (
            <ul className={props.class}>
                <FooItem
                    url="#"
                    classText="font-weight-bold"
                    type="anchor">
                    Tentang Kami
                </FooItem>

                <FooItem
                    url="#"
                    classText="font-weight-bold"
                    type="anchor">
                    Cara Kerja
                </FooItem>

                <FooItem
                    url="#"
                    classText="font-weight-bold"
                    type="anchor">
                    FAQ
                </FooItem>

                <FooItem
                    url="#"
                    classText="font-weight-bold"
                    type="anchor">
                    Contact
                </FooItem>
            </ul>
        )
    } else if (props.child === '2') {
        item = (
            <ul className={props.class}>
                <FooItem classText="font-weight-bold">
                    Rukan Permata Senayan
                </FooItem>

                <FooItem>
                    Blok E33-35
                </FooItem>

                <FooItem>
                    Jalan Tentara Pelajar, Kebayoran lama, Kota Jakarta Selatan, 12210
                </FooItem>

                <FooItem>
                    Phone: +62 812 9001 9010
                </FooItem>
            </ul>
        )
    } else if(props.child === '3') {
        item = (
            <FooSosmed className="list-unstyled list-inline">
                <FooItem
                    url="#"
                    classItem="list-inline-item"
                    type="anchor">
                    <FontAwesome icon={faFacebookF} />
                </FooItem>

                <FooItem
                    url="#"
                    classItem="list-inline-item"
                    type="anchor">
                    <FontAwesome icon={faInstagram} />
                </FooItem>

                <FooItem
                    url="#"
                    classItem="list-inline-item"
                    type="anchor">
                    <FontAwesome icon={faTwitter} />
                </FooItem>

                <FooItem
                    url="#"
                    classItem="list-inline-item"
                    type="anchor">
                    <FontAwesome icon={faLinkedinIn} />
                </FooItem>
            </FooSosmed>
        )
    }

    return item;
}

export default FooterItems;
