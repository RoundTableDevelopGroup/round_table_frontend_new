import React from 'react';
import { Row, Col } from 'antd';

/**
 * RdCard - 圆桌卡片基类
 * @props className - css 类
 */
export class RdCard extends React.Component {

    // 默认 css 类
    static defaultClassName = 'mb-10px p-16px-20px box-shadow-little';

    /**
     * 构造
     * @param props - 组件属性
     */
    constructor(props) {

        super(props);

        this.className = this.props.className ?
            `${RdCard.defaultClassName} ${this.props.className}` :
            RdCard.defaultClassName;

    }

    /**
     * 渲染函数
     * @returns {*}
     */
    render() {
        return (
            <Row
                className={this.className}>
                <Col>

                </Col>
            </Row>
        );
    }

}