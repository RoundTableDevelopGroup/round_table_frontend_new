import React from 'react';
import { Row, Col } from 'antd';

/**
 * RdBlock - 圆桌块 组件
 * @props className - css 类
 * @props style - 样式
 */
export class RdBlock extends React.Component {

    // 默认 css 类
    static defaultClassName = 'mb-10px p-10px  box-shadow-little bg-color-white';

    /**
     * 构造
     * @param props - 组件属性
     */
    constructor(props) {

        super(props);

        this.className = this.props.className ?
            `${RdBlock.defaultClassName} ${this.props.className}` :
            RdBlock.defaultClassName;

    }

    /**
     * 渲染函数
     * @returns {*}
     */
    render() {

        return (
            <Row
                className={this.className}
                style={this.props.style}>
                <Col>
                    {this.props.children}
                </Col>
            </Row>
        );

    }

}