import React from 'react';
import { MainColorLayout } from "../component/layout/main-color-layout";
import { MainNav } from "../component/nav/main-nav";
import { LeaveBlankLayout } from "../component/layout/leave-blank-layout";

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
                <MainNav/>
                <LeaveBlankLayout>

                </LeaveBlankLayout>
            </MainColorLayout>
        );

    }

}