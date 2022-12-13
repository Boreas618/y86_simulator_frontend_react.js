import { Component } from "react";
import { Card, Space, Divider } from 'antd';

class BasicTile extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const title = this.props.title;
        const value = this.props.value;
        return (
            <Card>
                <Space split={<Divider type="vertical" />}>
                    <div style={{ fontWeight: 'bold' }}>
                        {title}
                    </div>
                    <div>
                        {value}
                    </div>
                </Space>
            </Card>
        );
    }
}

export default BasicTile;