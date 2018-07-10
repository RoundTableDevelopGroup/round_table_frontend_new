import React from 'react';
import { Link } from 'react-router-dom';
import { RdCard } from "./rd-card";
import { Icon, Row, Avatar, Button } from 'antd';

/**
 * PostCard - 文章卡片
 * @props link - 文章链接
 * @props id - 文章 id
 * @props title - 标题
 * @props time - 时间
 * @props channel - 频道
 * @props summary - 概述
 * @props userInfo - 用户信息
 *  username - 用户名
 *  address - 个人主页地址
 *  avatar - 头像
 * @props liked - 是否已经喜欢过
 * @props likeNum - 喜欢数量
 * @props login - 用户登录情况
 */
export class PostCard extends React.Component {

    /**
     * 构造
     * @param props - 组件属性
     */
    constructor(props) {

        super(props);

        this.state = {
            // 喜欢数量
            likeNum: this.props.likeNum,
            // 喜欢按钮是否已经点过
            liked: this.props.liked
        };

    }

    /**
     * 当喜欢按钮被点击时回调
     * @param e
     */
    onLikeButtonClick = (e) => {

        // TODO 写喜欢按钮被点击时候的真实回调

    };

    /**
     * 当评论按钮被点击时的回调
     * @param e
     */
    onCommentButtonClick = (e) => {

        // TODO 写评论按钮被点击时候的真实回调

    };

    /**
     * 当分享按钮被点击时的回调
     * @param e
     */
    onShareButtonClick = (e) => {

        // TODO 写分享按钮被点击时的真实回调

    };

    /**
     * 渲染函数
     * @returns {*}
     */
    render() {

        // 行
        let line1 = (
            <div className={'color-plain font-size-15px'}>
                来自频道
                <Link
                    className={'color-plain'}
                    to={this.props.channelLink}>
                    &nbsp;{this.props.channel}
                </Link>
            </div>
        );
        let line2 = (
            <h2>
                <Link
                    className={'color-black text-decoration-none font-size-24px'}
                    to={this.props.link}>
                    {this.props.title}
                </Link>
            </h2>
        );
        // TODO 为阅读全文按钮添加响应
        let line3 = (
            <div>
                <span className={'color-text'}>
                    {this.props.summary}&nbsp;......&nbsp;
                </span>
                <Link
                    to={'#'}
                    className={'color-text'}>
                    阅读全文<Icon type={'down'}/>
                </Link>
            </div>
        );
        // TODO 把用户头像换成真正的头像
        let line4 = (
            <Row
                type={'flex'}
                align={'middle'}
                className={'mt-8px'}>
                <Link
                    to={this.props.userInfo.address}
                    className={'color-plain'}>
                    <Avatar icon={'user'} size={'small'}/>
                    &nbsp;
                    <span className={'font-size-15px'}>
                        <strong>{this.props.userInfo.username}</strong>
                    </span>
                </Link>
                &nbsp;
                <span className={'color-plain font-size-15px'}>
                    {this.props.time}
                </span>
            </Row>
        );
        let line5 = (
            <div className={'mt-8px'}>
                <Button
                    onClick={this.onLikeButtonClick}
                    icon={'heart-0'}
                    className={'color-plain'}>
                    {this.state.likeNum}喜欢
                </Button>
                <Button
                    onClick={this.onCommentButtonClick}
                    icon={'edit'}
                    className={'ml-8px color-plain'}>
                    评论
                </Button>
                <Button
                    onClick={this.onShareButtonClick}
                    icon={'share-alt'}
                    className={'ml-8px color-plain'}>
                    分享
                </Button>
            </div>
        );

        return (
            <RdCard>
                {line1}
                {line2}
                {line3}
                {line4}
                {line5}
            </RdCard>
        );

    }

}