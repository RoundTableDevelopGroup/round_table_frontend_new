import React from 'react';
import { Form, Input, Icon, Checkbox, Button } from 'antd';
import { PasswordTool } from '../../tool/password';

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

    onLoginButtonClick = () => {
        // TODO
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
                    {this.state.passwordHelp?(
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