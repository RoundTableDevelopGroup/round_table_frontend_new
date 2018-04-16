import React from 'react';
import { Layout, Icon, Row, Col, Menu, Input, Dropdown, Badge, Avatar } from 'antd';
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
                    <Col span={8} offset={1}>
                        <Menu mode={'horizontal'} style={{
                            lineHeight: '62px',
                        }}>
                            <Menu.Item key={'index'}><Link to={'/'}>首页</Link></Menu.Item>
                            <Menu.SubMenu title={'游戏频道'}>
                                <Menu.ItemGroup title={'全部频道'}>
                                    <Menu.Item key={'pubg'}><Link to={'/channel/pubg'}>绝地求生</Link></Menu.Item>
                                    <Menu.Item key={'lol'}><Link to={'/channel/lol'}>英雄联盟</Link></Menu.Item>
                                    <Menu.Item key={'r6'}><Link to={'/channel/r6'}>彩虹六号:围攻</Link></Menu.Item>
                                    <Menu.Item key={'hs'}><Link to={'/channel/hs'}>炉石传说</Link></Menu.Item>
                                    <Menu.Item key={'ow'}><Link to={'/channel/ow'}>守望先锋</Link></Menu.Item>
                                    <Menu.Item key={'hos'}><Link to={'/channel/hos'}>风暴英雄</Link></Menu.Item>
                                    <Menu.Item key={'single'}><Link to={'/channel/single'}>单机主机</Link></Menu.Item>
                                    <Menu.Item key={'mc'}><Link to={'/channel/mc'}>我的世界</Link></Menu.Item>
                                </Menu.ItemGroup>
                            </Menu.SubMenu>
                            <Menu.Item key={'match'}><Link to={'/match'}>赛事</Link></Menu.Item>
                        </Menu>
                    </Col>
                    <Col span={4} offset={3}>
                        <Input.Search placeholder={'搜索'}/>
                    </Col>
                    <Col span={3} offset={1}>
                        <Dropdown overlay={(
                            <Menu style={{
                                top: '14px'
                            }}>
                                <Menu.Item><Link to={'/user'}>个人中心</Link></Menu.Item>
                                <Menu.Item><Link to={'/user/message'}>站内信</Link></Menu.Item>
                                <Menu.Item><Link to={'/user/logout'}>注销</Link></Menu.Item>
                            </Menu>
                        )} placement={'bottomCenter'}>
                            <Badge dot><Avatar icon={'user'}/></Badge>
                        </Dropdown>
                    </Col>
                </Row>
            </Header>
        );
    }
}