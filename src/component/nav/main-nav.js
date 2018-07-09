import React from 'react';
import { Layout, Col, Menu, Input, Dropdown, Avatar, Button } from 'antd';
import { FixedWidthRow } from "../layout/fixed-width-row";

// Header Layout
const { Header } = Layout;

/**
 * MainNav 主导航栏
 */
export class MainNav extends React.Component {

    /**
     * 构造
     * @param props
     */
    constructor(props) {

        super(props);

        // state
        this.state = {
            // 链接读取完毕
            linkLoadDone: true,
            // 用户信息读取完毕
            userLoadDone: true
        };

    }

    /**
     * 渲染函数
     * @returns {*}
     */
    render() {

        // 主行
        let mainRow = (
            <FixedWidthRow>
                <Col
                    span={3} offset={3}>
                    sadsad
                </Col>
                <Col
                    span={5} offset={1}>
                    sadsad
                </Col>
                <Col
                    span={4} offset={2}>
                    sadsa
                </Col>
            </FixedWidthRow>
        );

        return (
            <Header
                className={'z-index-2 bg-color-white box-shadow-c position-fixed w-100'}>
                {mainRow}
            </Header>
        );

    }

}

