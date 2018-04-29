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
            <Layout>
                <Nav history={this.props.history}/>
                <Content style={{
                    paddingTop: '64px',
                    backgroundColor: '#f6f6f5'
                }}>
                    <Row>
                        <Col xs={{span: 0, offset: 0}}
                             sm={{span: 0, offset: 0}}
                             md={{span: 0, offset: 0}}
                             lg={{span: 12, offset: 3}}>
                            <IndexCardList/>
                        </Col>
                    </Row>
                </Content>
            </Layout>
        );
    }
}