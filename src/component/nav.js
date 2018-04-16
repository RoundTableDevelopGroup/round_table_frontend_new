import React from 'react';
import { Layout, Icon, Row, Col } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;

export class MainNav extends React.Component {
    render() {
        return (
            <Header style={{
                zIndex: 2,
                backgroundColor: 'white',
                boxShadow: '0 0 10px #cccccc',
                position: 'fixed',
                width: '100%'
            }}>
                <Row>
                    <Col span={4}>
                        <Row type={'flex'} justify={'center'} align={'middle'}>
                            <Col>
                                <Link to={'/'} style={{
                                    fontSize: '20px',
                                    color: 'grey',
                                    textDecoration: 'none'
                                }}>
                                    <Icon type={'chrome'}/> 圆桌
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Header>
        );
    }
}