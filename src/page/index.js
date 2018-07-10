import React from 'react';
import { Row, Col } from 'antd';
import { TransparentLayout } from "../component/layout/transparent-layout";
import { MainNav } from "../component/nav/main-nav";
import { LeaveBlankLayout } from "../component/layout/leave-blank-layout";
import { CardList } from "../component/card/card-list";
import { ToolBLock } from "../component/block/tool-block";
import img from '../img/timg.jpeg';

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

        // 列
        let col1 = (
            <Col
                span={16}>
                <ToolBLock/>
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
            <TransparentLayout>
                <MainNav/>
                <LeaveBlankLayout>
                    <Row>
                        {col1}
                        {col2}
                    </Row>
                </LeaveBlankLayout>
            </TransparentLayout>
        );

    }

}