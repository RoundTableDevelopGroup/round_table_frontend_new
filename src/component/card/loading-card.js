import React from 'react';
import { RdCard } from "./rd-card";
import { Spin } from 'antd';

export class LoadingCard extends React.Component {

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

        return (
            <RdCard className={'text-align-center'}>
                <Spin/>
            </RdCard>
        );

    }

}