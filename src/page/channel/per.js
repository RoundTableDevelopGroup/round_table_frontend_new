import React from 'react';
import { Layout, Row, Col } from 'antd';
import { Nav } from '../../component/nav';
import { ChannelHeaderCard } from "../../component/card/channel-header-card";
import request from 'axios';

const { Content } = Layout;

export class ChannelPerPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            channelInfoReady: false,
            channelInfo: null
        }
    }

    componentDidMount() {
        // 发送请求获取频道信息
        request
            .post('/request/channel/get_channel_info_by_id', {
                'id': this.props.match.params.channelId
            })
            .then((response) => {
                if (response.data.success) {
                    this.setState({
                        channelInfoReady: true,
                        channelInfo: {
                            'name': response.data.name,
                            'hot': response.data.hot,
                            'picture': response.data.picture
                        }
                    })
                }
            })
    }

    render() {
        return (
            <Layout>
                <Nav/>
                <Content style={{
                    paddingTop: '64px',
                    backgroundColor: '#f6f6f5'
                }}>
                    {this.state.channelInfoReady?<ChannelHeaderCard channelInfo={this.state.channelInfo}/>:null}
                </Content>
            </Layout>
        );
    }
}