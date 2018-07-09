import React from 'react';
import { Layout } from 'antd';
import { FixedWidthLayout } from "../component/layout/fixed-width-layout";
import { MainColorLayout } from "../component/layout/main-color-layout";

export class IndexPage extends React.Component {

    /**
     * 构造
     * @param props - 组件属性
     */
    constructor(props) {

        super(props);

    }

    /**
     * 渲染函数
     * @returns {*}
     */
    render() {

        return (
            <MainColorLayout>

            </MainColorLayout>
        );

    }

}