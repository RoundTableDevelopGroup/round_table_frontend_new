import React from 'react';
import { Row, Col, Icon, Badge } from 'antd';
import { Link } from 'react-router-dom';

/**
 * IconWithText - 带文字的图标
 * @props icon - 图标类型
 * @props text - 文字
 * @props to - 链接指向
 * @props dot - 是否有小圆点
 */
export class IconWithText extends React.Component {

    /**
     * 构造
     * @param props
     */
    constructor(props) {

        super(props);

        this.state = {
            // 小圆点
            dot: this.props.dot
        };

    }

    /**
     * 链接点击的回调
     * @param e
     */
    onLinkClick = (e) => {

        this.setState((pre) => {
            return {
                dot: pre.dot ? false : pre.dot
            }
        });

    };

    /**
     * 渲染函数
     * @returns {*}
     */
    render() {

        return (
            <Row>
                <Col className={'text-align-center'}>
                    <Link
                        to={this.props.to}
                        onClick={this.onLinkClick}>
                        <div className={'font-size-20px'}>
                            <Icon
                                type={this.props.icon}
                                className={'color-plain'}/>
                        </div>
                        <div>
                            <Badge dot={this.state.dot}>
                                <span className={'color-plain'}>
                                    &nbsp;{this.props.text}&nbsp;
                                </span>
                            </Badge>
                        </div>
                    </Link>
                </Col>
            </Row>
        );

    }
}

