import React from 'react';
import { Row, Col } from 'antd';
import { PostCard } from "./post-card";

export class IndexCardList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <Row>
                <Col>
                    <PostCard/>
                    <PostCard/>
                </Col>
            </Row>
        );
    }
}