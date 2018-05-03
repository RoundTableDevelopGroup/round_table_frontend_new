import React from 'react';
import { Upload, Icon, message, Button } from 'antd';

export class MatchIndexPage extends React.Component {
    render() {
        return (
            <div>
                <Upload name={'image'}
                    action={'/request/file/image_upload'}
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
                        <Icon type="upload" /> Click to Upload
                    </Button>
                </Upload>
            </div>
        )
    }
}