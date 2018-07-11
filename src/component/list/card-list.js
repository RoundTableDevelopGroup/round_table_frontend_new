import React from 'react';
import { Row, Col, Button } from 'antd';
import { PostCard } from "../card/post-card";
import { LoadingCard } from "../card/loading-card";
import { CarouselCard } from "../card/carousel-card";
import { CarouselText } from "../interactive/carousel-text";

/**
 * CardList - 卡片列表
 * @props source - 源 url
 * @props login - 用户登录情况
 */
export class CardList extends React.Component {

    /**
     * 构造
     * @param props - 组件属性
     */
    constructor(props) {

        super(props);

        this.state = {
            // 卡片
            cards: [],
            // 是否在加载中
            loading: false
        };

    }

    /**
     * 组件初始化
     */
    componentDidMount() {

        // TODO 发送请求获取卡片
        // TODO 将 Carousel 替换成卡片
        // 先假装获取一张卡片
        this.setState({
            cards: [{
                type: 'carousel',
                items: [(
                    <CarouselText
                        title={'title 1'}/>
                ), (
                    <CarouselText
                        title={'title 2'}/>
                ), (
                    <CarouselText
                        title={'title 3'}/>
                ), (
                    <CarouselText
                        title={'title 4'}/>
                )]
            }, {
                type: 'post',
                title: '测试标题',
                time: '2小时前',
                channelLink: '#',
                link: '#',
                channel: '绝地求生',
                summary: '测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落',
                userInfo: {
                    username: '可见影子',
                    address: '#'
                },
                liked: true,
                linkNum: 250
            }, {
                type: 'post',
                title: '测试标题',
                time: '2小时前',
                channelLink: '#',
                link: '#',
                channel: '绝地求生',
                summary: '测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落',
                userInfo: {
                    username: '可见影子',
                    address: '#'
                },
                liked: true,
                linkNum: 250
            }, {
                type: 'post',
                title: '测试标题',
                time: '2小时前',
                channelLink: '#',
                link: '#',
                channel: '绝地求生',
                summary: '测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落',
                userInfo: {
                    username: '可见影子',
                    address: '#'
                },
                liked: true,
                linkNum: 250
            }, {
                type: 'post',
                title: '测试标题',
                time: '2小时前',
                channelLink: '#',
                link: '#',
                channel: '绝地求生',
                summary: '测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落',
                userInfo: {
                    username: '可见影子',
                    address: '#'
                },
                liked: true,
                linkNum: 250
            }, {
                type: 'post',
                title: '测试标题',
                time: '2小时前',
                channelLink: '#',
                link: '#',
                channel: '绝地求生',
                summary: '测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落',
                userInfo: {
                    username: '可见影子',
                    address: '#'
                },
                liked: true,
                linkNum: 250
            }]
        });

    }

    /**
     * 加载更多按钮的响应
     * @param e
     */
    loadMoreButtonClick = (e) => {

        // TODO 增量读取数据
        this.setState({
            loading: true
        });
        setTimeout(() => {
            this.setState((pre) => {
                let cards = [];
                for (let i = 0; i < pre.cards.length; i++)
                    cards.push(pre.cards[i]);
                cards.push({
                    type: 'post',
                    title: '测试标题222',
                    time: '2小时前',
                    channelLink: '#',
                    link: '#',
                    channel: '绝地求生',
                    summary: '测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落测试段落',
                    userInfo: {
                        username: '可见影子',
                        address: '#'
                    },
                    liked: true,
                    linkNum: 250
                });
                return {
                    cards: cards,
                    loading: false
                };
            });
        }, 2000);

    };

    /**
     * 渲染函数
     * @returns {*}
     */
    render() {

        // 加载更多按钮
        let loadMoreButton = (
            <div className={'mb-20px'}>
                <Button
                    className={'w-100 border-none box-shadow-little'}
                    onClick={this.loadMoreButtonClick}>
                    加载更多
                </Button>
            </div>
        );

        return (
            <Row>
                <Col>
                    {this.state.cards.map((card, no) => {
                        switch (card.type) {
                            case 'post':
                                return (
                                    <PostCard
                                        key={no}
                                        link={card.link}
                                        id={card.id}
                                        title={card.title}
                                        time={card.time}
                                        channel={card.channel}
                                        channelLink={card.channelLink}
                                        summary={card.summary}
                                        userInfo={card.userInfo}
                                        liked={card.liked}
                                        likeNum={card.likeNum}
                                        login={this.props.login}/>
                                );
                            case 'carousel':
                                return (
                                    <CarouselCard
                                        key={no}
                                        items={card.items}/>
                                );
                            default:
                                return null;
                        }
                    })}
                    {this.state.loading ?
                        (<LoadingCard/>) : null
                    }
                    {this.state.loading ?
                        null : loadMoreButton}
                </Col>
            </Row>
        );

    }

}