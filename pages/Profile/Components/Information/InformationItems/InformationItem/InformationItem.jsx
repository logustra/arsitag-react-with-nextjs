import React from 'react';
import styled from 'styled-components';
import FontAwesome from '@fortawesome/react-fontawesome';

import iconBriefcase from '../../../../../../static/images/Briefcase - simple-line-icons.png';
import iconGlobe from '../../../../../../static/images/Globe - simple-line-icons.png';
import iconLocation from '../../../../../../static/images/Location-pin - simple-line-icons.png';
import iconPhone from '../../../../../../static/images/Phone - simple-line-icons Copy 2.png';
import iconUser from '../../../../../../static/images/User - simple-line-icons.png';

const StyledInformationTopItem = styled.li`
    color: var(--gray);
    padding-left: 1em;
    text-indent: -30px;
    color: var(--gray);
    margin-bottom: 10px;

    &:last-child {
        margin-bottom: 0;
    }

    &:nth-of-type(1):before {
        content: url(${iconBriefcase});
        margin-right: 15px;
    }

    &:nth-of-type(2):before {
        content: url(${iconUser});
        margin-right: 15px;
    }

    &:nth-of-type(3):before {
        content: url(${iconLocation});
        margin-right: 15px;
    }

    &:nth-of-type(4):before {
        content: url(${iconPhone});
        margin-right: 15px;
    }

    &:nth-of-type(5):before {
        content: url(${iconGlobe});
        margin-right: 15px;
    }

    a {
        cursor: pointer;
    }
`

const StyledInformationBottomItem = styled.li`

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
`

const InformationItem = (props) => {
    let item;

    if (props.type === 'iTop') {
        item = (
            <StyledInformationTopItem>
                {props.children}
            </StyledInformationTopItem>
        )
    } else if(props.type === "iMiddle") {
        item = (
            <li>
                <span>
                    {props.children}
                </span>
            </li>
        )
    } else if (props.type === "iBottom") {
        item = (
            <StyledInformationBottomItem className={props.class}>
                <a href={props.url}>
                    <FontAwesome icon={props.icon} />
                </a>
            </StyledInformationBottomItem>
        )
    }

    return item;
}

export default InformationItem;
