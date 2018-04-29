import React from 'react';
import { Row, Col, Tag, Icon, Avatar, Button } from 'antd';

export class PostCard extends React.Component {
    render() {
        return (
            <Row style={{
                marginTop: '20px',
                padding: '20px 20px 20px 20px',
                backgroundColor: 'white',
                boxShadow: '0 0 10px #eeeeee'
            }}>
                <Col>
                    <h2>若风直播绝地求生疑开挂？网友：透视穿墙看对面的装备？</h2>
                    <div>
                        <span style={{
                            color: 'grey'
                        }}>一小时前，来自频道:&nbsp;</span>
                        <Tag color={'red'}>绝地求生</Tag>
                    </div>
                    <br/>
                    <div>
                        绝地求生大火后很多游戏主播都转型吃鸡，
                        其中若风属于比较成功的那种，曾经多次打上亚服第一的位置，
                        第一这个位置让许多观众认可了他的实力，但也让许多人怀疑他开外挂，
                        然而就在直播中若风一句话把他推上了风口浪尖。
                        原因是因为在一个鱼塘局若风天命圈在毒圈外一个玩家拿消音枪打若风，
                        若风随口说了一句VSS都玩起来啦？但是当若风看到对局回放时才发现那个人背着VSS，
                        并且是用消音M16打的若风。
                        <a>阅读全文<Icon type={'down'}/></a>
                    </div>
                    <br/>
                    <Row type={'flex'} align={'middle'}>
                        <Avatar icon={'user'} size={'small'}/>
                        <span style={{
                            fontSize: '16px',
                            color: 'grey'
                        }}>&nbsp;<strong>可见影子</strong></span>
                        <span style={{
                            fontSize: '14px',
                            color: 'grey'
                        }}>&nbsp;你因坠落而倒地</span>
                    </Row>
                    <br/>
                    <div>
                        <Button icon={'heart-o'}>250&nbsp;喜欢</Button>&nbsp;
                        <Button icon={'edit'}>评论</Button>&nbsp;
                        <Button icon={'share-alt'}>分享</Button>
                    </div>
                </Col>
            </Row>
        );
    }
}