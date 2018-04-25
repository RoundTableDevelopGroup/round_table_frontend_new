import React from 'react';
import { Row, Layout, Col } from 'antd';
import '../../css/user/login.css';
import { LoginForm } from "../../component/user/login-form";
import { RegisterForm } from "../../component/user/register-form";
import logo5 from '../../img/logo/logo5.png';

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
                        <Col xs={{span: 20, offset: 0}}
                             sm={{span: 16, offset: 0}}
                             md={{span: 12, offset: 0}}
                             lg={{span: 8, offset: 0}}>
                            <div style={{
                                padding: '30px',
                                backgroundColor: 'white',
                                boxShadow: '0 0 10px #cccccc'
                            }}>

                                <img alt={'logo'} src={logo5} style={{
                                    display: 'block',
                                    margin: 'auto',
                                    width: '50%',
                                    height: 'auto'
                                }}/>
                                <br/>
                                {this.state.isRegisterForm?
                                    (<RegisterForm history={this.props.history} onLoginLinkClick={this.changeFormState}/>):
                                    (<LoginForm hittory={this.props.history} onRegisterLinkClick={this.changeFormState}/>)
                                }
                            </div>
                        </Col>
                    </Row>
                </Content>
            </Layout>
        );
    }
}