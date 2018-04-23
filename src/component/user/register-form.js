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
            password: ''
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
        let passwordHash = PasswordTool.getHashWithSalt(this.state.password, PasswordTool.getRandomSalt());
        // TODO
    };

    render() {
        return (
            <div>
                <Form>
                    <Form.Item>
                        <Input prefix={<Icon type={'user'}/>}
                               placeholder={' 用户名'}
                               value={this.state.username}
                               onChange={this.onUsernameChange}/>
                    </Form.Item>
                    <Form.Item>
                        <Input prefix={<Icon type={'key'}/>}
                               placeholder={' 密码'}
                               type={'password'}
                               value={this.state.password}
                               onChange={this.onPasswordChange}/>
                    </Form.Item>
                    <Form.Item>
                        <Checkbox>记住我</Checkbox>
                        <a style={{
                            float: 'right',
                            color: 'grey'
                        }} onClick={this.props.onLoginLinkClick}>转到登录</a>
                        <Button type={'primary'} style={{
                            width: '100%'
                        }} onClick={this.onLoginButtonClick}>注册</Button>
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