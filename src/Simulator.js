import logo from './logo.svg';
import './Simulator.css';
import 'antd/dist/reset.css';
import { Component } from 'react';
import { Layout, Card, Row, Space, Divider, Button } from 'antd';
import {CaretLeftOutlined, CaretRightOutlined} from '@ant-design/icons'
import BasicTile from './BasicTile';

const { Content, Header } = Layout;

//这是本项目的主体部分
class Simulator extends Component {

  constructor(props) {
    super(props);
    //index的值为当前是第几帧，作为一个状态（state）
    this.state = {
      index: 0
    };
  }

  //生成寄存器一栏的15个寄存器
  generateRegisters = data => {
    //Object.keys(data[this.state.index]['REG'])获得所有寄存器的名称
    //.map()将寄存器映射到BasicTile
    return Object.keys(data[this.state.index]['REG']).map((key) => {
      return <BasicTile title={key} value={data[this.state.index]['REG'][key]}></BasicTile>
    })
  }

  //生成一系列内存，同上
  generateMemory = data => {
    return Object.keys(data[this.state.index]['MEM']).map((key) => {
      return <BasicTile title={key} value={data[this.state.index]['MEM'][key]}></BasicTile>
    })
  }

  //生成状态码，同上
  generateCC = data => {
    return Object.keys(data[this.state.index]['CC']).map((key) => {
      return <BasicTile title={key} value={data[this.state.index]['CC'][key]}></BasicTile>
    })
  }

  //按页面顶部的"<"按钮的回调函数（即按下后执行的动作）
  onClickPre = () => {
    this.setState({
      index: this.state.index -1
     }
    );
  }

  //按页面顶部的">"按钮的回调函数（即按下后执行的动作）
  onClickPost = (length) => {
    this.setState({
      index: this.state.index + 1
     }
    );
  }

  render() {

    //打开JSON文件
    const data = require('./data/data.json');

    //主要界面
    //<Header>是标题，引用自antd包，必须放置在布局容器<Layout>中
    //<Content>是内容，引用自antd包，必须放置在布局容器<Layout>中
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
