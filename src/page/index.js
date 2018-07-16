import React from 'react';
import { Row, Col, Affix } from 'antd';
import { TransparentLayout } from "../component/layout/transparent-layout";
import { MainNav } from "../component/nav/main-nav";
import { LeaveBlankLayout } from "../component/layout/leave-blank-layout";
import { CardList } from "../component/list/card-list";
import { ToolBLock } from "../component/block/tool-block";
import { SideList } from "../component/list/side-list";
import { AboutBlock } from "../component/block/about-block"; 

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
                <ToolBLock history={this.props.history}/>
                <CardList history={this.props.history}/>
            </Col>
        );
        let col2 = (
            <Col
                span={8}
                className={'pl-12px'}>
                <SideList history={this.props.history}/>
                <Affix offsetTop={62}>
                    <AboutBlock history={this.props.history}/>
                </Affix>
            </Col>
        );

        return (
            <TransparentLayout>
                <MainNav history={this.props.history}/>
                <LeaveBlankLayout history={this.props.history}>
                    <Row>
                        {col1}
                        {col2}
                    </Row>
                </LeaveBlankLayout>
            </TransparentLayout>
        );

    }

}