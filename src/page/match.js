import React from 'react';
import { TransparentLayout } from "../component/layout/transparent-layout";
import { LeaveBlankLayout } from "../component/layout/leave-blank-layout";
import { Col } from 'antd';
import {ToolBLock} from "../component/block/tool-block";
import {CardList} from "../component/list/card-list";
import {SideList} from "../component/list/side-list";

export class MatchPage extends React.Component {

    // 构造
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {

        let leftCol = (
            <Col span={16}>
                <ToolBLock history={this.props.history}/>
                <CardList
                    history={this.props.history}
                    source={'/request/card-list/match'}/>
            </Col>
        );
        let rightCol = (
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
                        {leftCol}
                        {rightCol}
                    </Row>
                </LeaveBlankLayout>
            </TransparentLayout>
        );

    }
}