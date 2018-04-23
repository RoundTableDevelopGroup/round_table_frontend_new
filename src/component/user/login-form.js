import React from 'react';
import { Form, Input, Icon, Checkbox, Button, Avatar } from 'antd';

export class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <Form>
                    <Form.Item>
                        <Input prefix={<Icon type={'user'}/>} placeholder={' 用户名'}/>
                    </Form.Item>
                    <Form.Item>
                        <Input prefix={<Icon type={'key'}/>} placeholder={' 密码'}/>
                    </Form.Item>
                    <Form.Item>
                        <Checkbox>记住我</Checkbox>
                        <a style={{
                            float: 'right',
                            color: 'grey'
                        }}>注册账号</a>
                        <Button type={'primary'} style={{
                            width: '100%'
                        }}>登录</Button>
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