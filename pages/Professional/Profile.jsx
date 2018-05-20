import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

import axios from '../../services/Axios';
import withErrorHandler from '../../hoc/withErrorHandler';

import Layout from '../../hoc/Layout';
import Cover from './Components/Cover/Cover';
import Information from './Components/Information/Information';
import Reviews from './Components/Reviews/Reviews';
import TabInformation from './Components/TabInformation/TabInformation';
import Projects from './Components/Projects/Projects';

import imgUsr from '../../static/images/logo_tumblr_22.png?webp';
import imgP1 from '../../static/images/p1.png?webp';
import imgP2 from '../../static/images/p2.png?webp';
import imgP3 from '../../static/images/p3.png?webp';
import imgP4 from '../../static/images/p4.png?webp';
import imgP5 from '../../static/images/p5.png?webp';
import imgP6 from '../../static/images/p6.png?webp';

class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            data: null,
            tabs: [
                {
                    id: 0,
                    title: 'About',
                    text: 'Sunt ipsum sit mollit non occaecat reprehenderit quis id. Do deserunt commodo magna est sunt elit aliqua labore. Eiusmod sunt eiusmod veniam sunt dolor commodo anim aliquip ex sunt. Aliqua ea Lorem magna commodo laboris nisi duis. Laboris occaecat officia consectetur consequat est dolor. Cupidatat anim sit et Lorem ut ut anim reprehenderit esse.',
                },
                {
                    id: 1,
                    title: 'Projects',
                    text: 'Occaecat ad eiusmod eiusmod culpa aliquip adipisicing magna exercitation non. Non velit Lorem in duis reprehenderit cillum. Nostrud do amet elit fugiat minim fugiat sit sunt occaecat veniam enim. Est magna eiusmod id sunt occaecat magna sunt deserunt pariatur aliquip excepteur.',
                },
                {
                    id: 2,
                    title: 'Reviews',
                    text: 'Tempor velit nulla id sint enim sit fugiat excepteur minim mollit esse eu ex dolore. Veniam exercitation cupidatat ex qui. Reprehenderit sit nostrud id nulla eiusmod proident. Esse amet exercitation qui nisi eiusmod voluptate non. Qui laborum velit sit anim consectetur. Cupidatat qui laborum ut ipsum elit eiusmod ut ad incididunt in adipisicing enim.',
                },
            ],
            projects: {
                cards: [
                    {
                        img: imgP1,
                        title: 'Project Title 1',
                        photos_count: 3
                    },
                    {
                        img: imgP2,
                        title: 'Project Title 2',
                        photos_count: 4
                    },
                    {
                        img: imgP3,
                        title: 'Project Title 3',
                        photos_count: 5
                    },
                    {
                        img: imgP4,
                        title: 'Project Title 4',
                        photos_count: 6
                    },
                    {
                        img: imgP5,
                        title: 'Project Title 5',
                        photos_count: 7
                    },
                    {
                        img: imgP6,
                        title: 'Project Title 6',
                        photos_count: 8
                    },
                ],
                services: [
                    {
                        title: 'Profesional Categories in Selden',
                        body: 'Selden Driveway Instalation & Maintenance . Selden Fence Contractors . Selden Fireplaces . Selden Garage Door Sales.Selden Glass & Shower Door Dealers .Selden Handyman .Selden Hardwood Flooring Dealers . Selden Hot Tub & Spa Dealers.Selden Kitchen & Bath Fixtures.Selden Lighting'
                    },
                    {
                        title: 'Hardwood Flooring Dealers &amp; Installers near Selden',
                        body: 'Setauket-East Setauket Hardwood Flooring Dealers &amp; Installers . Kings Park Hardwood Flooring Dealers &amp; Installers . East Islip Hardwood Flooring Dealers & Installers .Stony Brook Hardwood Flooring Dealers & Installers . Saint James Hardwood Flooring Dealers & Installers .Ridge Hardwood Flooring Dealers & Installers .Nesconset Hardwood Flooring Dealers & Installers . Mastic Beach Hardwood Flooring Dealers & Installers .Terryville Hardwood Flooring Dealers & Installers . Patchogue Hardwood Flooring Dealers & Installers'
                    }
                ]
            },
            reviews: [
                {
                    img: imgUsr,
                    name: 'Andra Martin',
                    rate: '2',
                    comment: 'Dolor laboris velit dolor in mollit ex sit nisi cupidatat nisi ullamco et amet consectetur.'
                },
                {
                    img: imgUsr,
                    name: 'John Doe',
                    rate: '3',
                    comment: 'Exercitation occaecat veniam ea exercitation laborum nisi ad do cupidatat cupidatat aliquip.'
                },
                {
                    img: imgUsr,
                    name: 'Andrew Matt',
                    rate: '4',
                    comment: 'Pariatur adipisicing anim irure adipisicing ea et commodo dolor eiusmod amet.'
                },
                {
                    img: imgUsr,
                    name: 'Matt Orto',
                    rate: '5',
                    comment: 'Exercitation anim laboris cupidatat anim ea mollit sit.'
                },
            ],
        }
    }

    componentDidMount() {
        axios.get('profile/1').then(response => {
            const data = response.data.data;
            this.setState({ data })
        }).catch(error => {
            console.log(error);
        })
        this.setState({ loading: false })
    }

    render() {
        let profile;

        profile = (
            <Layout>
                <Cover />

                <Row>
                    <Col lg="4" xl="3">
                        <Information loading={this.state.loading}/>

                        {/* <Reviews
                                count={this.state.data.review_counter}
                                datas={this.state.reviews} /> */}
                    </Col>

                    {/* <Col lg="8" xl="9">
                            <TabInformation datas={this.state.tabs} />
                            <Projects data={this.state.projects} />
                        </Col> */}
                </Row>
            </Layout>
        );

        if (this.state.data) {
            profile = (
                <Layout
                    title="Profesional Profile"
                    description="Convert Workflow 'test-arsitag' Repository to React with Nextjs">
                    <Cover
                        name={this.state.data.name}
                        count={this.state.data.review_counter} />

                    <Row>
                        <Col lg="4" xl="3">
                            <Information
                                name={this.state.data.name}
                                number={this.state.data.phone_mobile}
                                location={this.state.data.location}
                                website={this.state.data.website} />

                            {/* <Reviews
                                count={this.state.data.review_counter}
                                datas={this.state.reviews} /> */}
                        </Col>

                        {/* <Col lg="8" xl="9">
                            <TabInformation datas={this.state.tabs} />
                            <Projects data={this.state.projects} />
                        </Col> */}
                    </Row>
                </Layout>
            )
        }

        return profile;
    }
}

export default withErrorHandler(Profile, axios);
