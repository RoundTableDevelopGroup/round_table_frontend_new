import React from 'react';
import { Layout, Col, Menu, Input, Dropdown, Avatar, Button } from 'antd';
import { FixedWidthRow } from "../layout/fixed-width-row";
import { Link } from 'react-router-dom';
import logo from '../../img/logo/logo2.png';

// Header Layout
const { Header } = Layout;
// Menu.SubMenu Item ItemGroup
const { Item, ItemGroup, SubMenu } = Menu;
// Input.Search
const { Search } = Input;

/**
 * MainNav 主导航栏
 */
export class MainNav extends React.Component {

    /**
     * 构造
     * @param props
     */
    constructor(props) {

        super(props);

        // state
        this.state = {
            /*
                链接信息
                [{
                    id: "pubg",
                    name: "绝地求生"
                },...]
             */
            linkInfo: [],

            // 链接读取完毕
            linkLoadDone: false,
            // 用户信息读取完毕
            userLoadDone: false,
            // 用户信息
            userInfo: {
                // 是否登录
                login: false
            }
        };

    }

    /**
     * 组件初始化
     */
    componentDidMount() {

        // TODO request of navbar info
        // 设置 state
        this.setState({
            linkInfo: [{
                id: 'pubg',
                name: '绝地求生'
            }],
            linkLoadDone: true,
            userLoadDone: true,
            userInfo: {
                login: false
            }
        });

    }

    /**
     * 菜单选项被单击的时候的回调
     * @param e - event
     */
    onMenuItemClick = (e) => {

        // 跳转
        this.props.history.push(e.key);

    };

    /**
     * 当搜索框运作的时候
     * @param e - event
     */
    onSearch = (e) => {

        // TODO do some thing when search bar worked
        console.log(e);

    };

    /**
     * 当加入圆桌按钮被点击的回调
     * @param e
     */
    onJoinRoundTableButtonClick = (e) => {

        this.props.history.push('/user/login/');

    };

    /**
     * 当用户头像的下拉栏内容被点击的时候的回调
     * @param e
     */
    onUserDropDownItemClick = (e) => {

        switch (e.key) {
            case 'home':
            case 'setting':
                this.props.history.push('/user/' + e.key);
                break;
            case 'logout':
                // TODO the request of logout
                break;
            default:
                break;
        }

    };

    /**
     * 渲染函数
     * @returns {*}
     */
    render() {

        // overlay
        let overlay = (
            <Menu
                className={'mt-15px'}
                onClick={this.onUserDropDownItemClick}>
                <Item key={'home/self'}>&nbsp;&nbsp;个人主页&nbsp;&nbsp;</Item>
                <Item key={'setting'}>&nbsp;&nbsp;设置&nbsp;&nbsp;</Item>
                <Item key={'logout'}>&nbsp;&nbsp;注销&nbsp;&nbsp;</Item>
            </Menu>
        );
        // 用户头像
        let userAvatar = (
            <Dropdown
                overlay={overlay}
                placement={'bottomCenter'}>
                <Avatar icon={'user'}/>
            </Dropdown>
        );
        // 加入圆桌按钮
        let joinRoundTaleButton = (
            <Button onClick={this.onJoinRoundTableButtonClick}>加入圆桌</Button>
        );

        // cols
        let col1 = (
            <Col
                span={3} offset={1}>
                <Link
                    to={'/'}
                    className={'color-grey text-decoration-none'}>
                    <span>
                        <img
                            alt={'logo'}
                            src={logo}
                            className={'w-40px pb-18px'}/>
                        <span
                            className={'font-size-30px'}>
                            圆桌
                        </span>
                    </span>
                </Link>
            </Col>
        );
        let col2 = (
            <Col
                span={4} offset={1}>
                <Menu
                    mode={'horizontal'}
                    className={'line-height-63px'}
                    onClick={this.onMenuItemClick}>
                    <SubMenu
                        title={'游戏频道'}>
                        <ItemGroup
                            title={'热门频道'}>
                            {this.state.linkInfo.map((item) => {
                                return (
                                    <Item key={'/channel/' + item.id}>{item.name}</Item>
                                );
                            })}
                        </ItemGroup>
                        <Item key={'/channel'}>查看更多</Item>
                    </SubMenu>
                    <Item key={'/match'}>赛事</Item>
                </Menu>
            </Col>
        );
        let col3 = (
            <Col
                span={8} offset={1}>
                <Search
                    placeholder={'发现'}
                    onSearch={this.onSearch}/>
            </Col>
        );
        let col4 = (
            <Col
                span={3} offset={0}
                align={'right'}>
                {this.state.userInfo.login ?
                    userAvatar : joinRoundTaleButton
                }
            </Col>
        );

        // 主行
        let mainRow = (
            <FixedWidthRow>
                {col1}
                {col2}
                {col3}
                {col4}
            </FixedWidthRow>
        );

        return (
            <Header
                className={'z-index-2 bg-color-white box-shadow-little position-fixed w-100'}>
                {mainRow}
            </Header>
        );

    }

}

