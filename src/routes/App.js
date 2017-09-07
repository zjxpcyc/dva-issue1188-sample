import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'dva/router';
import { connect } from 'dva';

const { Sider, Header, Content } = Layout;

const App = (props) => {
  return props.user.id ? (
    <Layout style={{ height: '100%' }}>
      <Sider>
        <Menu>
          <Menu.Item><Link to="/menu1">菜单1</Link></Menu.Item>
          <Menu.Item><Link to="/menu2">菜单2</Link></Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header />
        <Content style={{ marginTop: '16px' }}>
          {props.children}
        </Content>
      </Layout>
    </Layout>
  ) :
  (<div style={{ padding: '100px', fontSize: '24px', textAlign: 'center' }}> Login Page </div>)
  ;
};

export default connect(s => s.app)(App);
