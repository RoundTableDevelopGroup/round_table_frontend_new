import React from 'react';
import { RdBlock } from "./rd-block";
import { Row, Col } from 'antd';
import { IconWithText } from "../interactive/icon-with-text";

export class ToolBLock extends React.Component {

    /**
     * 构造
     * @param props - 组件属性
     */
    constructor(props) {

        super(props);

        this.state = {};

    }

    /**
     * 组件初始化
     */
    componentDidMount() {

        // TODO 获取组件状态

    }

    render() {

        // 列
        // TODO 添加实际链接，根据实际添加小圆点情况
        let col1 = (
            <Col span={6}>
                <IconWithText
                    icon={'edit'}
                    text={'发帖'}
                    to={'#'}
                    dot={false}/>
            </Col>
        );
        let col2 = (
            <Col span={6}>
                <IconWithText
                    icon={'home'}
                    text={'个人中心'}
                    to={'#'}
                    dot={true}/>
            </Col>
        );
        let col3 = (
            <Col span={6}>
                <IconWithText
                    icon={'notification'}
                    text={'消息'}
                    to={'#'}
                    dot={true}/>
            </Col>
        );
        let col4 = (
            <Col span={6}>
                <IconWithText
                    icon={'flag'}
                    text={'反馈'}
                    to={'#'}
                    dot={false}/>
            </Col>
        );

        return (
            <RdBlock>
                <Row>
                    {col1}
                    {col2}
                    {col3}
                    {col4}
                </Row>
            </RdBlock>
        );

    }

}