import React from 'react';
import { Layout, Row, Col } from 'antd';
import { Nav } from "../component/nav";
import { IndexCardList } from "../component/card/index-card-list";

const { Content } = Layout;

export class IndexPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <Layout style={{
                backgroundColor: '#f6f6f5'
            }}>
                <Nav history={this.props.history}/>
                <Content className={'fixed-width'}
                    style={{
                    paddingTop: '64px',
                    backgroundColor: '#f6f6f5'
                }}>
                    <Row>
                        <Col span={12} offset={3}>
                            <IndexCardList/>
                        </Col>
                    </Row>
                </Content>
            </Layout>
        );
    }
}