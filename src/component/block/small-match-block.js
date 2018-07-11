import React from 'react';
import { RdCard } from "../card/rd-card";
import { Link } from 'react-router-dom';

/**
 * 小型赛事块
 * @props items - 赛事信息数组
 *  name - 赛事名
 *  link - 链接
 *  time - 时间
 */
export class SmallMatchBlock extends React.Component {

    constructor(props) {

        super(props);

        this.state = {};

    }

    render() {

        let title = (
            <h2 className={'color-text'}>推荐赛事</h2>
        );
        let items = this.props.items ?
            this.props.items.map((item, no) => {
                return (
                    <div
                        key={no}
                        className={'mt-3px'}>
                        <span>
                            <Link
                                to={item.link}
                                className={'color-plain'}>
                                {item.name}
                            </Link>
                        </span>
                        <span className={'float-right color-plain'}>
                            {item.time}
                        </span>
                    </div>
                );
            }) : null;
        let seeMore = (
            <div className={'mt-3px'}>
                <span>
                    <Link
                        to={'#'}
                        className={'color-plain'}>
                        查看更多
                    </Link>
                </span>
            </div>
        );

        return (
            <RdCard>
                {title}
                {items}
                {seeMore}
            </RdCard>
        );

    }

}