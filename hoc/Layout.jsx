import React, { Component } from 'react';
import Aux from './Aux';
import { Container } from 'reactstrap';

import Head from '../components/Head/Head';
// import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';

import '../themes/Colors';
import '../themes/Global';

class Layout extends Component {
    render() {
        return (
            <Aux>
                <Head title={this.props.title} description={this.props.description}/>
                {/* <Navigation /> */}
                <main>
                    <Container>
                        {this.props.children}
                    </Container>
                </main>
                <Footer />
            </Aux>
        )
    }
}

export default Layout;
