import logo from './logo.svg';
import './Simulator.css';
import 'antd/dist/reset.css';
import { Component } from 'react';
import { Layout, Card, Row } from 'antd';

const { Sider, Content, Header, Footer } = Layout;

class Simulator extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div >
        <Layout>
          <Header style={{ height: 0.08 * window.innerHeight, backgroundColor: 'white' }}>
            <div id="font_head" align="center" style={{ fontWeight: 'bold', fontSize: '20px' }} >
              Y86-64
            </div>
          </Header>
        </Layout>
        <Layout>
          <Content>
            <Row>
              <Card title="Register" bordered={true} style={{ margin: 5, flex: 1, height: 0.8 * window.innerHeight }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
              <Card title="Memory" bordered={true} style={{ margin: 5, flex: 1, height: 0.8 * window.innerHeight }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
              <Card title="Condition Codes" bordered={true} style={{ margin: 5, flex: 1, height: 0.8 * window.innerHeight }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </Row>
          </Content>
          <Content>
            <Row>
              <Card style={{ margin: 5, flex: 1, height: 0.1 * window.innerHeight }}>
                PC
              </Card>
              <Card style={{ margin: 5, flex: 3, height: 0.1 * window.innerHeight }}>
                Next instruction
              </Card>
              <Card style={{ margin: 5, flex: 2, height: 0.1 * window.innerHeight }}>
                Status
              </Card>
            </Row>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default Simulator;
