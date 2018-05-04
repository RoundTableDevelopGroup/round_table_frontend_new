import React from 'react';
import { Layout, Row, Col } from 'antd';
import { Nav } from '../../component/nav';

const { Content } = Layout;

export class ChannelIndexPage extends React.Component {
    render() {
        return (
            <Layout>
                <Nav/>
                <Content style={{
                    paddingTop: '64px',
                    backgroundColor: '#f6f6f5'
                }}>
                    <Row>
                        <Col xs={{span: 0, offset: 0}}
                             sm={{span: 0, offset: 0}}
                             md={{span: 0, offset: 0}}
                             lg={{span: 24, offset: 0}}>

                        </Col>
                    </Row>
                </Content>
            </Layout>
        );
    }
}