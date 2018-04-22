import React from 'react';
import { Row, Col, Layout } from 'antd';
import '../../css/user/login.css';

const { Content } = Layout;

export class UserLoginPage extends React.Component {
    constructor(props) {
        super(props);

        // 防止css污染全局样式，添加类名作用域
        document.getElementById('root').className = 'user-login';

        this.state = {

        }
    }

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

                    </Row>
                </Content>
            </Layout>
        );
    }
}