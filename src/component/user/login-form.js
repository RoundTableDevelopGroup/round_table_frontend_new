import React from 'react';
import { Form, Input, Icon, Checkbox, Button, message } from 'antd';
import { PasswordTool } from '../../tool/password';
import request from 'axios';

/**
 * @props history: 路由历史
 * @props onRegisterLinkClick: 注册链接回调
 */
export class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            usernameFail: false,
            usernameHelp: '',

            password: '',
            passwordFail: false,
            passwordHelp: ''
        };

        console.log(this.props.history);
    }

    onUsernameChange = (e) => {
        this.setState({
            username: e.target.value
        });
    };

    onPasswordChange = (e) => {
        this.setState({
            password: e.target.value
        });
    };

    onLoginButtonClick = () => {
        // 发送请求获取用户名对应的盐
        request
            .post('/request/user/get_salt', {
                username: this.state.username
            })
            .then((response) => {
                // 如果获取盐成功了
                if (response.data.success) {
                    // 发送请求进行登录校验
                    request
                        .post('/request/user/login', {
                            username: this.state.username,
                            password: PasswordTool.getHashWithSalt(this.state.password, response.data.salt)
                        })
                        .then((response2) => {
                            if (response2.data.success) {
                                this.setState({
                                    usernameFail: false,
                                    passwordFail: false
                                });
                                message.success('登录成功，即将为您跳转');
                                setTimeout(() => {
                                    this.props.history.push('/');
                                }, 2000)
                            } else {
                                switch (response2.data.error_code) {
                                    case 200:
                                        this.setState({
                                            usernameFail: true
                                        });
                                        message.error('用户不存在');
                                        break;
                                    case 201:
                                        this.setState({
                                            usernameFail: true,
                                            passwordFail: true
                                        });
                                        message.error('用户名或密码错误');
                                        break;
                                    default:
                                        message.error('未知错误');
                                        break;
                                }
                            }
                        });
                } else {
                    switch (response.data.error_code) {
                        case 200:
                            this.setState({
                                usernameFail: true
                            });
                            message.error('用户不存在');
                            break;
                        default:
                            message.error('未知错误');
                            break;
                    }
                }
            });
    };

    render() {
        return (
            <div>
                <Form>
                    {this.state.usernameFail?(
                        <Form.Item
                            hasFeedback
                            validateStatus={'error'}
                            help={this.state.usernameHelp}>
                            <Input prefix={<Icon type={'user'}/>}
                                   placeholder={' 用户名'}
                                   value={this.state.username}
                                   onChange={this.onUsernameChange}/>
                        </Form.Item>
                    ):(
                        <Form.Item>
                            <Input prefix={<Icon type={'user'}/>}
                                   placeholder={' 用户名'}
                                   value={this.state.username}
                                   onChange={this.onUsernameChange}/>
                        </Form.Item>
                    )}
                    {this.state.passwordFail?(
                        <Form.Item
                            hasFeedback
                            validateStatus={'error'}
                            help={this.state.passwordHelp}>
                            <Input prefix={<Icon type={'key'}/>}
                                   placeholder={' 密码'}
                                   type={'password'}
                                   value={this.state.password}
                                   onChange={this.onPasswordChange}/>
                        </Form.Item>
                    ):(
                        <Form.Item>
                            <Input prefix={<Icon type={'key'}/>}
                                   placeholder={' 密码'}
                                   type={'password'}
                                   value={this.state.password}
                                   onChange={this.onPasswordChange}/>
                        </Form.Item>
                    )}
                    <Form.Item>
                        <Checkbox>记住我</Checkbox>
                        <a style={{
                            float: 'right',
                            color: 'grey'
                        }} onClick={this.props.onRegisterLinkClick}>注册账号</a>
                        <Button type={'primary'} style={{
                            width: '100%'
                        }} onClick={this.onLoginButtonClick}>登录</Button>
                        <a style={{
                            color: 'grey'
                        }}>社交账号登录</a>
                        <a style={{
                            float: 'right',
                            color: 'grey'
                        }}>忘记密码?</a>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}