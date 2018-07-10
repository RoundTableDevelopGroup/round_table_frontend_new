import React from 'react';
import { FixedWidthLayout } from "./fixed-width-layout";

export class LeaveBlankLayout extends React.Component {

    // 默认类名
    static defaultClassName = 'pt-80px';

    /**
     * 构造
     * @param props - 组件属性
     */
    constructor(props) {

        super(props);

        // 计算类名
        this.className = this.props.className ?
            `${LeaveBlankLayout.defaultClassName} ${this.props.className}` :
            LeaveBlankLayout.defaultClassName;

    }

    /**
     * 渲染函数
     * @returns {*}
     */
    render() {

        return (
            <FixedWidthLayout className={LeaveBlankLayout.defaultClassName}>
                {this.props.children}
            </FixedWidthLayout>
        );

    }

}