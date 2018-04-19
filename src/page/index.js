import React from 'react';
import { Layout } from 'antd';
import { MainNav } from "../component/nav";

export class IndexPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <Layout>
                <MainNav/>
            </Layout>
        );
    }
}