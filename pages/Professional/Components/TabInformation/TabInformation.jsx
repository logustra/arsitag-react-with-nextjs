import React, { Component } from 'react';
import styled from 'styled-components';
import { Card, CardBody, Nav, TabContent } from 'reactstrap';
import classnames from 'classnames';

import TabInformationItem from './TabInformationItem/TabInformationItem';
import TabContentItem from './TabContentItem/TabContentItem';

const StyledTabInformation = styled(Card) `
    border: 0;
    box-shadow: 0 2px 4px 0 #e6e7e8;
    margin-bottom: 30px;
`

const StyledNav = styled(Nav)`
    color: var(--gray);
    margin: -20px -20px 20px -20px;

    li {
        // margin-bottom: 0 !important;
        cursor: pointer;

        a {
            font-weight: bold;
            font-size: 15px;
            border: 0 !important;
            border-right: 1px solid var(--mediumsmoke) !important;
            border-top-right-radius: 0 !important;
            padding: 15px;
        }

        a.active {
            color: var(--danger) !important;
            border-bottom: 2px solid var(--danger) !important;
            padding-bottom: 14px;
        }
    }
`

const StyledTabContent = styled(TabContent)`
    color: var(--gray);
`

class TabInformation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeTab: 0,
            limits: [
                {
                    tab: true,
                },
                {
                    tab: true,
                },
                {
                    tab: true,
                },
            ],
        }
    }

    TabHandler = (tab) => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    Tab0 = () => {
        if (this.state.limits[0].tab) {
            this.setState({
                limits: [
                    { tab: false },
                    { tab: true },
                    { tab: true },
                ]
            })
        } else (
            this.setState({
                limits: [
                    { tab: true },
                    { tab: true },
                    { tab: true },
                ]
            })
        )
    }

    Tab1 = () => {
        if (this.state.limits[1].tab) {
            this.setState({
                limits: [
                    { tab: true },
                    { tab: false },
                    { tab: true },
                ]
            })
        } else (
            this.setState({
                limits: [
                    { tab: true },
                    { tab: true },
                    { tab: true },
                ]
            })
        )
    }

    Tab2 = () => {
        if (this.state.limits[2].tab) {
            this.setState({
                limits: [
                    { tab: true },
                    { tab: true },
                    { tab: false },
                ]
            })
        } else (
            this.setState({
                limits: [
                    { tab: true },
                    { tab: true },
                    { tab: true },
                ]
            })
        )
    }

    render() {
        let tabItems, tabContents, DetailTabHandler;

        DetailTabHandler = [
            this.Tab0,
            this.Tab1,
            this.Tab2,
        ]

        tabItems = this.props.datas.map( (data, index) => {
            return (
                <TabInformationItem
                    key={index}
                    class={classnames({ active: this.state.activeTab === index })}
                    clicked={() => this.TabHandler(index)}>
                    {data.title}
                </TabInformationItem>
            )
        });

        tabContents = this.props.datas.map( (data, index) => {
            return (
                <TabContentItem
                    key={index}
                    title={data.title}
                    id={data.id}
                    limit={this.state.limits[index].tab}
                    clicked={() => DetailTabHandler[index]()}>
                    {this.state.limits[index].tab ? data.text.substring(0, 200) : data.text}
                </TabContentItem>
            )
        });


        return (
            <StyledTabInformation>
                <CardBody>
                    <StyledNav tabs>
                        {tabItems}
                    </StyledNav>

                    <StyledTabContent activeTab={this.state.activeTab}>
                        {tabContents}
                    </StyledTabContent>
                </CardBody>
            </StyledTabInformation>
        )
    }
}

export default TabInformation;
