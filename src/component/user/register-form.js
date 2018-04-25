import React from 'react';
import { Form, Input, Icon, Checkbox, Button } from 'antd';
import { PasswordTool } from "../../tool/password";
import request from 'axios';

/**
 * @props history: 路由历史
 * @props onLoginLinkClick: 登录链接回调
 */
export class RegisterForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            usernameFail: false,
            usernameHelp: '',

            password: '',
            passwordFail: false,
            passwordHelp: '',

            password2: '',
            password2Fail: false,
            password2Help: ''
        }
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

    onPassword2Change = (e) => {
        this.setState({
            password2: e.target.value
        });
    };

    onLoginButtonClick = () => {
        // let passwordHash = PasswordTool.getHashWithSalt(this.state.password, PasswordTool.getRandomSalt());

        // 正则表达式
        let usernameRegex = /^[a-zA-Z][a-zA-Z0-9_]{7,19}$/;
        let passwordRegex = /^[a-zA-Z0-9`~!@#$%^&*()\-=_+[\]{};:'",.<>/?]{8,20}$/;

        // 使用正则表达式验证用户名和密码看是否符合要求
        let usernameRegexSuccess = usernameRegex.test(this.state.username);
        let passwordRegexSuccess = passwordRegex.test(this.state.password);

        // 判断两次输入的密码是否相同
        let passwordAsSame = this.state.password === this.state.password2;

        // 如果三者都为true
        if (usernameRegexSuccess && passwordRegexSuccess && passwordAsSame) {
            this.setState({
                usernameFail: false,
                usernameHelp: '',
                passwordFail: false,
                passwordHelp: '',
                password2Fail: false,
                password2Help: ''
            });

            // TODO
        } else {
            if (usernameRegexSuccess) {
                this.setState({
                    usernameFail: false,
                    usernameHelp: ''
                });
            } else {
                this.setState({
                    usernameFail: true,
                    usernameHelp: '用户名应该由字母和数字组成，并且以字母开头，长度在8-20位间'
                });
            }

            if (passwordRegexSuccess) {
                this.setState({
                    passwordFail: false,
                    passwordHelp: ''
                });
            } else {
                this.setState({
                    passwordFail: true,
                    passwordHelp: '密码应该由字母、数字和符号组成，长度在8-20位间'
                });
            }

            if (passwordAsSame) {
                this.setState({
                    password2Fail: false,
                    password2Help: ''
                });
            } else {
                this.setState({
                    password2Fail: true,
                    password2Help: '两次输入的密码不一致'
                });
            }
        }
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
                    {this.state.password2Fail?(
                        <Form.Item
                            hasFeedback
                            validateStatus={'error'}
                            help={this.state.password2Help}>
                            <Input prefix={<Icon type={'key'}/>}
                                   placeholder={' 再次输入密码'}
                                   type={'password'}
                                   value={this.state.password2}
                                   onChange={this.onPassword2Change}/>
                        </Form.Item>
                    ):(
                        <Form.Item>
                            <Input prefix={<Icon type={'key'}/>}
                                   placeholder={' 再次输入密码'}
                                   type={'password'}
                                   value={this.state.password2}
                                   onChange={this.onPassword2Change}/>
                        </Form.Item>
                    )}
                    <Form.Item>
                        <a style={{
                            color: 'grey'
                        }}>社交账号登录</a>
                        <a style={{
                            float: 'right',
                            color: 'grey'
                        }} onClick={this.props.onLoginLinkClick}>转到登录</a>
                        <Button type={'primary'} style={{
                            width: '100%'
                        }} onClick={this.onLoginButtonClick}>注册</Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}