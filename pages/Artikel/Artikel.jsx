import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';

import Layout from '../../hoc/Layout';
import Loading from '../../components/UI/Loading/Loading';

class Artikel extends Component {
    static async getInitialProps(props) {
        return {
            title: 'Artikel',
            description: "Convert Workflow 'test-arsitag' Repository to React with Nextjs",
        }
    }

    constructor(props) {
        super(props)
        this.state = {
            loading: true,
        }
    }

    componentDidMount() {
        this.setState({ loading: false });
    }

    render() {
        let artikel;

        if (this.state.loading) {
            artikel = (
                <Layout
                    title="Artikel"
                    description="Convert Workflow 'test-arsitag' Repository to React with Nextjs">
                    <Card className="card-small">
                        <Loading class="mx-auto" height="36px" width="40%" mb=".75rem" />
                        <Loading height="63px" />
                    </Card>
                </Layout>
            )
        } else {
            artikel = (
                <Layout
                    title="Artikel"
                    description="Convert Workflow 'test-arsitag' Repository to React with Nextjs">
                    <Card className="card-small">
                        <CardTitle className="font-weight-light text-center">
                            Artikel
                        </CardTitle>

                        <CardText className="card-text">
                            Arsitag is a service and online platform that connects home owners with architects and interior designers, providing you the easier way to reach the right professionals.
                        </CardText>
                    </Card>
                </Layout>
            )
        }

        return artikel;
    }
}

export default Artikel;
