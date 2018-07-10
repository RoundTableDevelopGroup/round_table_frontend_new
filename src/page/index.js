import React from 'react';
import { Row, Col } from 'antd';
import { MainColorLayout } from "../component/layout/main-color-layout";
import { MainNav } from "../component/nav/main-nav";
import { LeaveBlankLayout } from "../component/layout/leave-blank-layout";
import {PostCard} from "../component/card/post-card";

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
                span={18}
                className={'bg-color-yellow'}>
                <PostCard
                    title={'测试标题'}
                    time={'2小时前'}
                    channel={'绝地求生'}
                    summary={summary}
                    userInfo={{
                        username: '可见影子'
                    }}
                    liked={true}
                    likeNum={250}/>
            </Col>
        );
        let col2 = (
            <Col
                span={6}
                className={'bg-color-green'}>
sad
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