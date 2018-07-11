import React from 'react';
import { Row, Col } from 'antd';
import { LoginHintBlock } from "../block/login-hint-block";
import { CarouselText } from "../interactive/carousel-text";
import { SmallMatchBlock } from "../block/small-match-block";

/**
 * SideList
 * @props source - 源请求地址
 */
export class SideList extends React.Component {

    /**
     * 构造
     * @param props - 组件属性
     */
    constructor(props) {

        super(props);

        this.state = {
            // 块信息
            items: []
        };

    }

    /**
     * 组件初始化
     */
    componentDidMount() {

        // TODO 发送请求
        this.setState({
            items: [{
                type: 'loginHint',
                num: '24w'
            }, {
                type: 'testPicture',
                title: '重要赛事宣传图',
                height: '200px'
            }, {
                type: 'smallMatch',
                items: [{
                    name: '南航杯炉石全职业赛',
                    time: 'X天后',
                    link: '#'
                }, {
                    name: '南航吃鸡王大赛',
                    time: 'X天后',
                    link: '#'
                }, {
                    name: '南航杯炉石全职业赛',
                    time: 'X天后',
                    link: '#'
                }, {
                    name: '南航吃鸡王大赛',
                    time: 'X天后',
                    link: '#'
                }]
            }]
        });

    }

    /**
     * 渲染函数
     * @returns {*}
     */
    render() {

        return (
            <Row>
                <Col>
                    {this.state.items.map((item, key) => {
                        switch (item.type) {
                            case 'loginHint':
                                return (
                                    <LoginHintBlock
                                        key={key}
                                        num={item.num}/>
                                );
                            case 'testPicture':
                                return (
                                    <CarouselText
                                        key={key}
                                        title={item.title}
                                        height={item.height}
                                        className={'mb-10px'}/>
                                );
                            case 'smallMatch':
                                return (
                                    <SmallMatchBlock
                                        key={key}
                                        items={item.items}/>
                                );
                            default:
                                return null;
                        }
                    })}
                </Col>
            </Row>
        );

    }

}