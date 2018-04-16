import React from 'react';
import { Layout } from 'antd';
import { MainNav } from "../component/nav";

export class IndexPage extends React.Component {
    render() {
        return (
            <Layout>
                <MainNav/>
            </Layout>
        );
    }
}