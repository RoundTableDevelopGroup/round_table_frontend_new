import React from 'react';
import { Row, Col, Divider, Button } from 'antd';
import axios from 'axios';

export class ChannelHeaderCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            attentionButtonActive: false,
            attentionButtonLoadDown: false,
            userLogin: false,

            attentionNumLoadDown: false,
            attentionNum: 0,
            attentionAccurate: null,

            hotDegreeLoadDown: false,
            hotDegree: 0
        }
    }

    componentDidMount() {
        // 发送请求看用户是否已经关注过这个频道
        axios
            .post('/request/channel/is_user_attention_the_channel', {
                channel: this.props.channelId
            })
            .then((response) => {
                if (response.data.success) {
                    if (response.data.attention) {
                        this.setState({
                            attentionButtonLoadDown: true,
                            attentionButtonActive: true,
                            userLogin: true
                        });
                    } else {
                        this.setState({
                            attentionButtonLoadDown: true,
                            attentionButtonActive: false,
                            userLogin: true
                        });
                    }
                } else {
                    switch (response.data.error_code) {
                        case 200:
                            this.setState({
                                attentionButtonLoadDown: true,
                                attentionButtonActive: false,
                                userLogin: false
                            });
                            break;
                        default:
                            break;
                    }
                }
            });

        // 发送请求获取频道的关注量
        axios
            .post('/request/channel/get_channel_attention_num', {
                channel: this.props.channelId
            })
            .then((response) => {
                if (response.data.success) {
                    this.setState({
                        attentionNumLoadDown: true,
                        attentionNum: response.data.num,
                        attentionAccurate: response.data.accurate
                    });
                }
            });

        // 发送请求获取频道的热度
        axios
            .post('/request/channel/get_channel_hot_degree', {
                channel: this.props.channelId
            })
            .then((response) => {
                if (response.data.success) {
                    this.setState({
                        hotDegreeLoadDown: true,
                        hotDegree: response.data.num
                    });
                }
            });
    }

    render() {
        if (this.state.hotDegreeLoadDown && this.state.attentionNumLoadDown && this.state.attentionButtonLoadDown) {
            return (
                <Row style={{
                    backgroundColor: 'white',
                    padding: '20px 40px'
                }}>
                    <Col span={5}>
                        <img src={this.props.channelInfo.picture} className={'responsive-img'} style={{
                            boxShadow: '0 0 10px #aaaaaa'
                        }}/>
                    </Col>
                    <Col span={13} offset={1}>
                        <div style={{
                            fontWeight: 'bold',
                            fontSize: '28px',
                            color: 'black'
                        }}>{this.props.channelInfo.name}&nbsp;</div>
                        <p style={{
                            fontSize: '15px',
                            paddingTop: '5px'
                        }}>{this.props.channelInfo.description}</p>
                    </Col>
                    <Col span={4} offset={1}>
                        <Row style={{
                            marginTop: '10px'
                        }}>
                            {this.state.attentionNumLoadDown?
                                (<Col span={10}>
                                    <div style={{
                                        fontWeight: 'bold',
                                        fontSize: '18px',
                                    }}>关注</div>
                                    <div style={{
                                        fontWeight: 'bold',
                                        fontSize: '25px',
                                    }}>{this.state.attentionNum}</div>
                                </Col>):null
                            }
                            {this.state.attentionNumLoadDown&&this.state.hotDegreeLoadDown?
                                (<Col span={4}>
                                    <Divider type={'vertical'} style={{
                                        height: '60px',
                                        right: '50%'
                                    }}/>
                                </Col>):null
                            }
                            {this.state.hotDegreeLoadDown?
                                (<Col span={10}>
                                    <div style={{
                                        fontWeight: 'bold',
                                        fontSize: '18px'
                                    }}>热度</div>
                                    <div style={{
                                        fontWeight: 'bold',
                                        fontSize: '25px'
                                    }}>{this.state.hotDegree}</div>
                                </Col>):null
                            }
                        </Row>
                        <Row style={{
                            marginTop: '20px'
                        }}>
                            <Col span={24}>
                                {this.state.attentionButtonLoadDown?
                                    this.state.attentionButtonActive?(
                                        <Button type={'primary'} style={{
                                            width: '100%'
                                        }} onClick={() => {
                                            axios
                                                .post('/request/channel/user_un_attention_channel', {
                                                    channel: this.props.channelId
                                                })
                                                .then((response) => {
                                                    if (response.data.success) {
                                                        this.setState(preState => ({
                                                            attentionButtonActive: false,
                                                            attentionNum: this.state.attentionAccurate?
                                                                (parseInt(preState.attentionNum) - 1).toString():
                                                                preState.attentionNum
                                                        }));
                                                    }
                                                })
                                        }}>取消关注</Button>
                                    ):this.state.userLogin?
                                        (<Button style={{
                                            width: '100%'
                                        }} onClick={() => {
                                            axios
                                                .post('/request/channel/user_attention_channel', {
                                                    channel: this.props.channelId
                                                })
                                                .then((response) => {
                                                    if (response.data.success) {
                                                        this.setState(preState => ({
                                                            attentionButtonActive: true,
                                                            attentionNum: this.state.attentionAccurate?
                                                                (parseInt(preState.attentionNum) + 1).toString():
                                                                preState.attentionNum
                                                        }));
                                                    }
                                                })
                                        }}>关注</Button>):
                                        (<Button style={{
                                            width: '100%'
                                        }} onClick={() => {
                                            this.props.history.push('/user/login')
                                        }}>关注</Button>):null
                                }
                            </Col>
                        </Row>
                    </Col>
                </Row>
            );
        } else {
            return (
                <div>

                </div>
            );
        }
    }
}