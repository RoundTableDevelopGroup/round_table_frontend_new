import React from 'react';
import { Row, Col, Layout } from 'antd';
import '../../css/user/login.css';
import {LoginForm} from "../../component/user/login-form";
import {RegisterForm} from "../../component/user/register-form";

const { Content } = Layout;

export class UserLoginPage extends React.Component {
    constructor(props) {
        super(props);

        // 防止css污染全局样式，添加类名作用域
        document.getElementById('root').className = 'user-login';

        this.state = {
            isRegisterForm: true
        }
    }

    changeFormState = () => {
        this.setState(prevState => ({
            isRegisterForm: !prevState.isRegisterForm
        }));
    };

    render() {
        return (
            <Layout style={{
                height: '100%'
            }}>
                <Content style={{
                    height: '100%'
                }}>
                    <Row type={'flex'} align={'middle'} justify={'center'} style={{
                        height: '100%'
                    }}>
                        <Row style={{
                            width: '25%'
                        }}>
                            {this.state.isRegisterForm?
                                (<RegisterForm history={this.props.history} onLoginLinkClick={this.changeFormState}/>):
                                (<LoginForm hittory={this.props.history} onRegisterLinkClick={this.changeFormState}/>)
                            }
                        </Row>
                    </Row>
                </Content>
            </Layout>
        );
    }
}