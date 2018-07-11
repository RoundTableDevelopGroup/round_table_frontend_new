import React from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';

export class AboutBlock extends React.Component {

    /**
     * 构造
     * @param props - 组件属性
     */
    constructor(props) {

        super(props);

        this.state = {};

    }

    /**
     * 渲染函数
     * @returns {*}
     */
    render() {

        // 行
        let line1 = (
            <div className={'text-align-center'}>
                <Link to={'#'} className={'color-plain'}>社区规范</Link>
                &nbsp;·&nbsp;
                <Link to={'#'} className={'color-plain'}>举报反馈</Link>
                &nbsp;·&nbsp;
                <Link to={'#'} className={'color-plain'}>小黑屋</Link>
            </div>
        );
        let line2 = (
            <div className={'text-align-center mt-8px'}>
                <Link to={'#'} className={'color-plain'}>开发者日志</Link>
                &nbsp;·&nbsp;
                <Link to={'#'} className={'color-plain'}>关于我们</Link>
            </div>
        );
        let line3 = (
            <div className={'text-align-center mt-8px color-plain'}>
                ©2018 RoundTable.cn. All rights reserved.
            </div>
        );

        return (
            <Row className={'mt-10px'}>
                <Col>
                    {line1}
                    {line2}
                    {line3}
                </Col>
            </Row>
        );

    }

}