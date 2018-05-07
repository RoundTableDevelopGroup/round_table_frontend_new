import React from 'react';
import { Layout, Row, Col } from 'antd';
import { Nav } from '../../component/nav';

const { Content } = Layout;

export class ChannelIndexPage extends React.Component {
    render() {
        return (
            <Layout>
                <Nav history={this.props.history}/>
                <Content style={{
                    paddingTop: '64px',
                    backgroundColor: '#f6f6f5'
                }}>
                    <Row>
                        <Col>

                        </Col>
                    </Row>
                </Content>
            </Layout>
        );
    }
}