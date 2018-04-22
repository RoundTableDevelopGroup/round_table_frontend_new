import React from 'react';
import { Form } from 'antd';

export class LoginBlock extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form>
                <Form.Item>

                </Form.Item>
            </Form>
        );
    }
}