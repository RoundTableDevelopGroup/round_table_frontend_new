import React from 'react';
import { MainColorLayout } from "./main-color-layout";

/**
 * FixedWidthLayout - 固定宽度布局
 * @props className - css 类
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
            <MainColorLayout
                className={this.className}>
                {this.props.children}
            </MainColorLayout>
        );

    }

}