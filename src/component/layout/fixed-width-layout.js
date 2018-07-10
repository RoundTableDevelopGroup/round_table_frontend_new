import React from 'react';
import { TransparentLayout } from "./transparent-layout";

/**
 * FixedWidthLayout - 固定宽度布局
 * @props className - css 类
 * @props style - 样式
 */
export class FixedWidthLayout extends React.Component {

    /**
     * 默认类名
     * @type {string}
     */
    static defaultClassName = 'w-1000px h-100 m-0-auto';

    /**
     * 构造
     * @param props - 组件属性
     */
    constructor(props) {

        super(props);

        // 求的拼接得到的类名
        this.className = this.props.className ?
            `${FixedWidthLayout.defaultClassName} ${this.props.className}` :
            FixedWidthLayout.defaultClassName;

    }

    /**
     * 渲染函数
     * @returns {*}
     */
    render() {

        return (
            <TransparentLayout
                className={this.className}
                style={this.props.style}>
                {this.props.children}
            </TransparentLayout>
        );

    }

}