import React from 'react';
import { Layout, message, Row, Col, Menu, Input, Dropdown, Avatar, Button } from 'antd';
import request from 'axios';
import logo2 from '../img/logo/logo2.png';

const { Header } = Layout;

/**
 * @props history: 路由历史
 */
export class Nav extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            linkLoadDone: false,
            linkInfo: null,
            userLoadDone: false,
            userInfo: null
        }
    }

    componentDidMount() {
        // 获取频道信息
        request
            .get('/request/channel/get_hot_channel')
            .then((response) => {
                this.setState({
                    linkLoadDone: true,
                    linkInfo: response.data
                });
            });
        // 获取用户登录信息
        request
            .get('/request/user/get_login_state')
            .then((response) => {
                if (response.data.success) {
                    this.setState({
                        userLoadDone: true,
                        userInfo: {
                            'login': true
                        }
                    });
                } else {
                    this.setState({
                        userLoadDone: true,
                        userInfo: {
                            'login': false
                        }
                    });
                }
            });
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
                {this.state.linkLoadDone&&this.state.userLoadDone?
                    <Row className={'fixed-width'}>
                        <Col span={3} offset={3}>
                            <span>
                                <img alt={'logo'} src={logo2} width={'40px'} style={{
                                    paddingBottom: '18px'
                                }}/>
                                <span style={{
                                    fontSize: '30px',
                                    fontFamily: '幼圆'
                                }}>圆桌</span>
                            </span>
                        </Col>
                        <Col span={5} offset={1}>
                            <Menu mode={'horizontal'}
                                style={{ lineHeight: '63px' }}
                                onClick={(e) => {
                                    this.props.history.push(e.key);
                                }}>
                                <Menu.SubMenu title={'游戏频道'}>
                                    <Menu.ItemGroup title={'热门频道'}>
                                        {this.state.linkInfo.map((item) => {
                                            return <Menu.Item key={'/channel/' + item.id}>{item.name}</Menu.Item>
                                        })}
                                    </Menu.ItemGroup>
                                    <Menu.Item key={'/channel'}>查看更多</Menu.Item>
                                </Menu.SubMenu>
                                <Menu.Item key={'/match'}>赛事</Menu.Item>
                            </Menu>
                        </Col>
                        <Col span={4} offset={2}>
                            <Input.Search placeholder={'发现'}
                                onSearch={
                                    context => console.log(context)
                                }/>
                        </Col>
                        <Col span={3} offset={0}
                             align={'right'}>
                            {this.state.userInfo.login?
                                <Dropdown overlay={(
                                    <Menu style={{
                                        marginTop: '15px'
                                    }} onClick={(e) => {
                                        switch (e.key) {
                                            case 'home':
                                            case 'setting':
                                                this.props.history.push('/user/' + e.key);
                                                break;
                                            case 'logout':
                                                request
                                                    .get('/request/user/logout')
                                                    .then((response) => {
                                                        if (response.data.success) {
                                                            message.success('注销成功');
                                                            setTimeout(() => {
                                                                this.props.history.push('/user/login');
                                                            }, 2000);
                                                        }
                                                    });
                                                break;
                                            default:
                                                break;
                                        }
                                    }}>
                                        <Menu.Item key={'home/self'}>&nbsp;&nbsp;个人主页&nbsp;&nbsp;</Menu.Item>
                                        <Menu.Item key={'setting'}>&nbsp;&nbsp;设置&nbsp;&nbsp;</Menu.Item>
                                        <Menu.Item key={'logout'}>&nbsp;&nbsp;注销&nbsp;&nbsp;</Menu.Item>
                                    </Menu>
                                )} placement={'bottomCenter'}>
                                    <Avatar icon={'user'}/>
                                </Dropdown>:
                                <Button onClick={() => {
                                    this.props.history.push('/user/login')
                                }}>加入圆桌</Button>
                            }
                        </Col>
                    </Row>:''
                }
            </Header>
        );
    }
}