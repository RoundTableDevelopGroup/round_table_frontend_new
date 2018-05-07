import React from 'react';
import { Row, Col, Divider, Button } from 'antd';

export class ChannelHeaderCard extends React.Component {
    render() {
        return (
            <Row style={{
                backgroundColor: 'white',
                boxShadow: '0 0 10px #cccccc',
                marginTop: '20px',
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
                    <Row>
                        <Col span={10}>
                            <div style={{
                                fontWeight: 'bold',
                                fontSize: '18px',
                                float: 'right'
                            }}>关注</div>
                            <div style={{
                                fontWeight: 'bold',
                                fontSize: '25px',
                                float: 'right'
                            }}>123</div>
                        </Col>
                        <Col span={4}>
                            <Divider type={'vertical'} style={{
                                height: '60px',
                                left: '20%'
                            }}/>
                        </Col>
                        <Col span={10}>
                            <div style={{
                                fontWeight: 'bold',
                                fontSize: '18px'
                            }}>热度</div>
                            <div style={{
                                fontWeight: 'bold',
                                fontSize: '25px'
                            }}>789</div>
                        </Col>
                    </Row>
                    <Row style={{
                        marginTop: '20px'
                    }}>
                        <Col span={24}>
                            <Button style={{
                                width: '100%'
                            }}>关注</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}