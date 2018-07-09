import React from 'react';
import { Upload, message, Button, Icon } from 'antd';

export class AdminFilePage extends React.Component {
    render() {
        return (
            <div>
                <div style={{
                    paddingLeft: '200px',
                    paddingTop: '100px'
                }}>
                    <h2>/media/img/site</h2>
                    <Upload name={'image'}
                        action={'/request/file/site_image_upload'}
                        onChange={(info) => {
                            if (info.file.status !== 'uploading') {
                                console.log(info.file, info.fileList);
                            }
                            if (info.file.status === 'done') {
                                message.success(`${info.file.name} file uploaded successfully`);
                            } else if (info.file.status === 'error') {
                                message.error(`${info.file.name} file upload failed.`);
                            }
                        }}>
                        <Button>
                            <Icon type={'upload'}/>
                            Upload Site Image
                        </Button>
                    </Upload>
                </div>
                <br/>
                <br/>
                <div style={{
                    paddingLeft: '200px',
                    paddingTop: '100px'
                }}>
                    <h2>/media/img/user</h2>
                    <Upload name={'image'}
                            action={'/request/file/user_image_upload'}
                            onChange={(info) => {
                                if (info.file.status !== 'uploading') {
                                    console.log(info.file, info.fileList);
                                }
                                if (info.file.status === 'done') {
                                    message.success(`${info.file.name} file uploaded successfully`);
                                } else if (info.file.status === 'error') {
                                    message.error(`${info.file.name} file upload failed.`);
                                }
                            }}>
                        <Button>
                            <Icon type={'upload'}/>
                            Upload User Image
                        </Button>
                    </Upload>
                </div>
            </div>
        );
    }
}