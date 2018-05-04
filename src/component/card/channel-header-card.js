import React from 'react';
import { Row, Col } from 'antd';

export class ChannelHeaderCard extends React.Component {
    render() {
        return (
            <Row>
                <Col xs={{span: 0, offset: 0}}
                     sm={{span: 0, offset: 0}}
                     md={{span: 0, offset: 0}}
                     lg={{span: 24, offset: 0}}
                     style={{
                         backgroundColor: 'white',
                         boxShadow: '0 0 10px #dddddd',
                         paddingTop: '30px',
                         paddingBottom: '30px'
                     }}>
                    <Row>
                        <Col xs={{span: 0, offset: 0}}
                             sm={{span: 0, offset: 0}}
                             md={{span: 0, offset: 0}}
                             lg={{span: 16, offset: 4}}>
                            <h2>{this.props.channelInfo.name}</h2>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}