import React from 'react';
import { Layout } from 'antd';

/**
 * TransparentLayout - 透明 Layout
 * @props className - css 类
 * @props style - 样式
 */
export class TransparentLayout extends React.Component {

    /**
     * 默认类名
     * @type {string}
     */
    static defaultClassName = 'bg-transparent';

    /**
     * 构造
     * @param props - 组件属性
     */
    constructor(props) {

        super(props);

        this.className = this.props.className ?
            `${TransparentLayout.defaultClassName} ${this.props.className}` :
            TransparentLayout.defaultClassName

    }

    /**
     * 渲染函数
     * @returns {*}
     */
    render() {
        return (
            <Layout
                className={this.className}
                style={this.props.style}>
                {this.props.children}
            </Layout>
        );
    }

}