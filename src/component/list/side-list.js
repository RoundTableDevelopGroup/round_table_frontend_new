import React from 'react';
import { Row, Col } from 'antd';
import { LoginHintBlock } from "../block/login-hint-block";

/**
 * SideList
 * @props source - 源请求地址
 */
export class SideList extends React.Component {

    /**
     * 构造
     * @param props - 组件属性
     */
    constructor(props) {

        super(props);

        this.state = {
            // 块信息
            items: []
        };

    }

    /**
     * 组件初始化
     */
    componentDidMount() {

        // TODO 发送请求
        this.setState({
            items: [{
                type: 'loginHint',
                num: '24w'
            }]
        });

    }

    /**
     * 渲染函数
     * @returns {*}
     */
    render() {

        return (
            <Row>
                <Col>
                    {this.state.items.map((item, key) => {
                        switch (item.type) {
                            case 'loginHint':
                                return (
                                    <LoginHintBlock
                                        key={key}
                                        num={item.num}/>
                                );
                            default:
                                return null;
                        }
                    })}
                </Col>
            </Row>
        );

    }

}