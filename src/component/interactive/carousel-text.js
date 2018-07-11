import React from 'react';

/**
 * CarouselText - 伪装成图片的旋转木马文字
 * @props className - css 类名
 * @props style - 样式
 * @props height - 高度 (string)
 * @props title - 标题
 */
export class CarouselText extends React.Component {

    // 默认 css 类名
    static defaultClassName = 'w-100 bg-color-plain overflow-hidden text-align-center';
    // 默认高度
    static defaultHeight = '350px';

    /**
     * 构造
     * @param props - 组件属性
     */
    constructor(props) {

        super(props);

        this.state = {};

        this.className = this.props.className ?
            `${CarouselText.defaultClassName} ${this.props.className}` :
            CarouselText.defaultClassName;

    }

    /**
     * 渲染函数
     * @returns {*}
     */
    render() {

        return (
            <div
                style={{
                    height: this.props.height ?
                        this.props.height :
                        CarouselText.defaultHeight,
                    lineHeight: this.props.height ?
                        this.props.height :
                        CarouselText.defaultHeight
                }}
                className={this.className}>
                <h1 className={'color-white'}>{this.props.title}</h1>
            </div>
        );

    }

}