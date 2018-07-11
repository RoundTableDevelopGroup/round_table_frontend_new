import React from 'react';
import { Button } from 'antd';
import {RdBlock} from "./rd-block";

/**
 * LoginHintBlock - 登录提示块
 * @props num - 注册人数
 */
export class LoginHintBlock extends React.Component {

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
            <RdBlock>
                <div className={'p-16px-20px'}>
                    <h2 className={'text-align-center color-plain'}>
                        寻找属于你的游戏世界<br/>
                        即刻加入圆桌
                    </h2>
                    <br/>
                    <div>
                        <Button className={'w-100'} type={'primary'}>
                            注册
                        </Button>
                    </div>
                    <br/>
                    <div>
                        <Button className={'w-100'}>
                            已有账号&nbsp;?&nbsp;现在登录
                        </Button>
                    </div>
                    <br/>
                    <div className={'text-align-center color-grey'}>
                        已有 {this.props.num ? this.props.num : 0} 位骑士加入圆桌
                    </div>
                </div>
            </RdBlock>
        );

    }

}