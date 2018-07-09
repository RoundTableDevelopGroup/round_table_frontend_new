import React from 'react';
import { Layout } from 'antd';

/**
 * MainColorLayout - 具有主背景颜色的 Layout
 * @props className - css 类
 */
export class MainColorLayout extends React.Component {

    /**
     * 默认类名
     * @type {string}
     */
    static defaultClassName = 'bg-color-main';

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