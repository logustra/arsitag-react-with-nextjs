import React, { Component } from 'react';
import swal from 'sweetalert';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        constructor(props) {
            super(props)
            this.state = {
                error: null,
            }
        }

        componentWillMount() {
            axios.interceptors.request.use(req => {
                this.setState({ error: null });
                return req;
            });

            axios.interceptors.response.use(res => res, error => {
                this.setState({ error });
            });
        }

        render() {
            if(this.state.error) {
                swal("", `${this.state.error.message}`, "error");
            }

            return <WrappedComponent {...this.props} />;
        }
    }
}

export default withErrorHandler;
