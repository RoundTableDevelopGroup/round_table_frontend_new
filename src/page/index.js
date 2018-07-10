import React from 'react';
import { Row, Col } from 'antd';
import { MainColorLayout } from "../component/layout/main-color-layout";
import { MainNav } from "../component/nav/main-nav";
import { LeaveBlankLayout } from "../component/layout/leave-blank-layout";
import {CardList} from "../component/card/card-list";

export class IndexPage extends React.Component {

    /**
     * 构造
     * @param props - 组件属性
     */
    constructor(props) {

        super(props);

        this.state = {

        };

    }

    /**
     * 渲染函数
     * @returns {*}
     */
    render() {

        let summary = '测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落';

        // 列
        let col1 = (
            <Col
                span={16}>
                <CardList/>
            </Col>
        );
        let col2 = (
            <Col
                span={8}
                className={'pl-12px'}>

            </Col>
        );

        return (
            <MainColorLayout>
                <MainNav/>
                <LeaveBlankLayout>
                    <Row>
                        {col1}
                        {col2}
                    </Row>
                </LeaveBlankLayout>
            </MainColorLayout>
        );

    }

}