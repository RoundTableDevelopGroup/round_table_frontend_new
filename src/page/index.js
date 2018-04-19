import React from 'react';
import { Layout } from 'antd';
import { Nav } from "../component/nav";

export class IndexPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <Layout>
                <Nav history={this.props.history}/>
            </Layout>
        );
    }
}