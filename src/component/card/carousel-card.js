import React from 'react';
import { Carousel } from 'antd';

/**
 * CarouselCard - 旋转木马卡片
 * @props items
 *  [{JSX}, {JSX}]
 * @props className - css 类名
 * @props style - 样式
 */
export class CarouselCard extends React.Component {

    // 默认类名
    static defaultClassName = 'box-shadow-little mb-10px';

    /**
     * 构造
     * @param props - 组件属性
     */
    constructor(props) {

        super(props);

        this.state = {};

        this.className = this.props.className ?
            `${CarouselCard.defaultClassName} ${this.props.className}` :
            CarouselCard.defaultClassName;

    }

    /**
     * 渲染函数
     */
    render() {

        if (this.props.items && this.props.items.length > 0)
            return (
                <Carousel
                    effect={'fade'}
                    autoplay
                    className={this.className}
                    style={this.props.style}>
                    {this.props.items.map((item, no) => {
                        return (
                            <div key={no}>
                                {item}
                            </div>
                        );
                    })}
                </Carousel>
            );
        else
            return null;

    }

}