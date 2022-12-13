import logo from './logo.svg';
import './Simulator.css';
import 'antd/dist/reset.css';
import { Component } from 'react';
import { Layout, Card, Row, Space, Divider, Button } from 'antd';
import {CaretLeftOutlined, CaretRightOutlined} from '@ant-design/icons'
import BasicTile from './BasicTile';

const { Content, Header } = Layout;

class Simulator extends Component {

  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
  }

  generateRegisters = data => {
    return Object.keys(data[this.state.index]['REG']).map((key) => {
      return <BasicTile title={key} value={data[this.state.index]['REG'][key]}></BasicTile>
    })
  }

  generateMemory = data => {
    return Object.keys(data[this.state.index]['MEM']).map((key) => {
      return <BasicTile title={key} value={data[this.state.index]['MEM'][key]}></BasicTile>
    })
  }

  generateCC = data => {
    return Object.keys(data[this.state.index]['CC']).map((key) => {
      return <BasicTile title={key} value={data[this.state.index]['CC'][key]}></BasicTile>
    })
  }

  onClickPre = () => {
    this.setState({
      index: this.state.index -1
     }
    );
  }

  onClickPost = (length) => {
    this.setState({
      index: this.state.index + 1
     }
    );
  }

  render() {

    console.log(this.state.index);

    const data = require('./data/data.json');

    return (
      <div >
        <Layout>
          <Header style={{ height: 0.08 * window.innerHeight, backgroundColor: 'white' }}>
            <Space>
            <Space>
              <Button type="primary" shape="circle" icon={<CaretLeftOutlined />} onClick={this.onClickPre}/>
              <Button type="primary" shape="circle" icon={<CaretRightOutlined />} onClick={this.onClickPost}/>
            </Space>
            <div id="font_head" align="center" style={{ fontWeight: 'bold', fontSize: '20px' }} >
              Y86-64
            </div>
            </Space>
          </Header>
        </Layout>
        <Layout>
          <Content>
            <Row>
              <Card title="Register" bordered={true} style={{ margin: 5, flex: 1, height: 0.8 * window.innerHeight, overflow: 'scroll' }}>
                <div>
                  {this.generateRegisters(data)}
                </div>
              </Card>
              <Card title="Memory" bordered={true} style={{ margin: 5, flex: 1, height: 0.8 * window.innerHeight, overflow: 'scroll' }}>
                <div>
                  {this.generateMemory(data)}
                </div>
              </Card>
              <Card title="Condition Codes" bordered={true} style={{ margin: 5, flex: 1, height: 0.8 * window.innerHeight }}>
                <div>
                  {this.generateCC(data)}
                </div>
              </Card>
            </Row>
          </Content>
          <Content>
            <Row>
              <Card style={{ margin: 5, flex: 1, height: 0.1 * window.innerHeight }}>
                <Space split={<Divider type="vertical" />}>
                  <div style={{ fontWeight: 'bold' }}>
                    PC
                  </div>
                  <div>
                    {data[this.state.index]['PC']}
                  </div>
                </Space>
              </Card>
              <Card style={{ margin: 5, flex: 3, height: 0.1 * window.innerHeight }}>
                Next instruction
              </Card>
              <Card style={{ margin: 5, flex: 2, height: 0.1 * window.innerHeight }}>
                <Space split={<Divider type="vertical" />}>
                  <div style={{ fontWeight: 'bold' }}>
                    Status
                  </div>
                  <div>
                    {data[this.state.index]['STAT']}
                  </div>
                </Space>
              </Card>
            </Row>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default Simulator;
