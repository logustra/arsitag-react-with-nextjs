import React from 'react';
import styled from 'styled-components';
import { TabPane } from 'reactstrap';

const StyledTabPane = styled(TabPane)`
    a {
        cursor: pointer;
    }
`

const TabContentItem = (props) => {

    return (
        <StyledTabPane tabId={props.id}>
            <h6 className="font-weight-bold">{props.title}</h6>
            <p className="d-inline">{props.children}</p>
            <a className="text-danger font-weight-bold ml-2"
                role="button"
                onClick={props.clicked}>
                {props.limit ? 'Selengkapnya >' : 'Sembunyikan ^'}
            </a>
        </StyledTabPane>
    )
}

export default TabContentItem;
