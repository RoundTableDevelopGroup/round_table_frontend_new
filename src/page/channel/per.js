import React from 'react';
import { Layout, Row, Col } from 'antd';
import { Nav } from '../../component/nav';
import { ChannelHeaderCard } from "../../component/card/channel-header-card";
import request from 'axios';
import { IndexCardList } from "../../component/card/index-card-list";

const { Content } = Layout;

export class ChannelPerPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            channelInfoReady: false,
            channelInfo: null
        }
    }

    componentDidMount() {
        // 发送请求获取频道信息
        request
            .post('/request/channel/get_channel_info_by_id', {
                'id': this.props.match.params.channelId
            })
            .then((response) => {
                if (response.data.success) {
                    this.setState({
                        channelInfoReady: true,
                        channelInfo: {
                            'name': response.data.name,
                            'hot': response.data.hot,
                            'picture': response.data.picture,
                            'description': response.data.description,
                            'type': response.data.type
                        }
                    })
                }
            })
    }

    componentWillReceiveProps(nextProps) {
        // 发送请求获取频道信息
        request
            .post('/request/channel/get_channel_info_by_id', {
                'id': nextProps.match.params.channelId
            })
            .then((response) => {
                if (response.data.success) {
                    this.setState({
                        channelInfoReady: true,
                        channelInfo: {
                            'name': response.data.name,
                            'hot': response.data.hot,
                            'picture': response.data.picture,
                            'description': response.data.description,
                            'type': response.data.type
                        }
                    })
                }
            })
    }

    render() {
        return (
            <Layout>
                <Nav history={this.props.history}/>
                <Content className={'fixed-width'} style={{
                    paddingTop: '64px',
                    backgroundColor: '#f6f6f5',
                    width: '100%'
                }}>
                    <Row>
                        <Col span={24} style={{
                            backgroundColor: 'white',
                            boxShadow: '0 0 10px #dddddd'
                        }}>
                            <Row className={'fixed-width'}>
                                <Col span={20} offset={2}>
                                    {this.state.channelInfoReady?
                                        <ChannelHeaderCard
                                            channelInfo={this.state.channelInfo}
                                            channelId={this.props.match.params.channelId}
                                            history={this.props.history}/>:
                                        null
                                    }
                                </Col>
                            </Row>
                        </Col>
                    </Row>
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