import React from 'react';
import { Layout } from 'antd';

export class MainColorLayout extends React.Component {

    /**
     * 默认类名
     * @type {string}
     */
    static defaultClassName = 'main-bg-color';

    /**
     * 构造
     * @param props - 组件属性
     */
    constructor(props) {

        super(props);

        this.className = this.props.className ?
            `${MainColorLayout.defaultClassName} ${this.props.className}` :
            MainColorLayout.defaultClassName

    }

    /**
     * 渲染函数
     * @returns {*}
     */
    render() {
        return (
            <Layout
                className={this.className}>
                {this.props.children}
            </Layout>
        );
    }

}