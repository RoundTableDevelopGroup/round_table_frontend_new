import React from 'react';
import { Row } from 'antd';

export class FixedWidthRow extends React.Component {

    // 默认 css 类
    static defaultClassName = 'w-1440px m-0-auto';

    /**
     * 构造
     * @param props
     */
    constructor(props) {

        super(props);

        // 计算 css 类名
        this.className = this.props.className ?
            `${FixedWidthRow.defaultClassName} ${this.props.className}` :
            FixedWidthRow.defaultClassName;

    }

    /**
     * 渲染函数
     * @returns {*}
     */
    render() {

        return (
            <Row className={this.className}>
                {this.props.children}
            </Row>
        );

    }

}