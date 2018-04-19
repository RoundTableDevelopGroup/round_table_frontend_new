import React from 'react';
import { Layout, Icon, Row, Col, Menu, Input, Dropdown, Badge, Avatar } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;

export class MainNav extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loadDone: false
        }
    }

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
                    <Col xs={{span: 12, offset: 6}} sm={{span: 12, offset: 6}} md={{span: 12, offset: 6}}
                         lg={{span: 4, offset: 0}} xl={{span: 4, offset: 0}} xxl={{span: 4, offset: 0}}>
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
                    <Col xs={{span: 0}} sm={{span: 0}} md={{span: 0}}
                         lg={{span: 7, offset: 1}} xl={{span: 6, offset: 1}} xxl={{span: 6, offset: 1}}>
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
                    <Col xs={{span: 0}} sm={{span: 0}} md={{span: 0}}
                         lg={{span: 5, offset: 1}} xl={{span: 6, offset: 1}} xll={{span: 6, offset: 1}}>
                        <Input.Search placeholder={'搜索'}/>
                    </Col>
                    <Col xs={{span: 0}} sm={{span: 0}} md={{span: 0}}
                         lg={{span: 4, offset: 2}} xl={{span: 4, offset: 2}} xxl={{span: 4, offset: 2}}>
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
                    <Col xs={{span: 2, offset: 4}} sm={{span: 2, offset: 4}} md={{span: 2, offset: 4}}
                         lg={{span: 0}} xl={{span: 0}} xxl={{span: 0}}>
                        <Dropdown overlay={(
                            <Menu style={{
                                top: '14px'
                            }}>
                                <Menu.Item><Link to={'/user'}>首页</Link></Menu.Item>
                                <Menu.SubMenu title={'全部频道'}>
                                    <Menu.Item><Link to={'/channel/pubg'}>绝地求生</Link></Menu.Item>
                                    <Menu.Item><Link to={'/channel/lol'}>英雄联盟</Link></Menu.Item>
                                    <Menu.Item><Link to={'/channel/r6'}>彩虹六号:围攻</Link></Menu.Item>
                                    <Menu.Item><Link to={'/channel/hs'}>炉石传说</Link></Menu.Item>
                                    <Menu.Item><Link to={'/channel/ow'}>守望先锋</Link></Menu.Item>
                                    <Menu.Item><Link to={'/channel/hos'}>风暴英雄</Link></Menu.Item>
                                    <Menu.Item><Link to={'/channel/single'}>单机主机</Link></Menu.Item>
                                    <Menu.Item><Link to={'/channel/mc'}>我的世界</Link></Menu.Item>
                                </Menu.SubMenu>
                                <Menu.Item><Link to={'/match'}>赛事</Link></Menu.Item>
                                <Menu.SubMenu title={'个人中心'}>
                                    <Menu.Item>首页</Menu.Item>
                                    <Menu.Item>站内信</Menu.Item>
                                    <Menu.Item>注销</Menu.Item>
                                </Menu.SubMenu>
                            </Menu>
                        )} placement={'bottomRight'}>
                            <Button><Icon type={'down'}/></Button>
                        </Dropdown>
                    </Col>
                </Row>
            </Header>
        );
    }
}