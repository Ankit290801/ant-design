import './App.css';
import {Layout, Menu, Breadcrumb, Button, Divider, Row, Col} from 'antd'
import {UserOutlined, LaptopOutlined, NotificationOutlined} from '@ant-design/icons'
import Anime from './Anime';
function App() {
  const {SubMenu} = Menu;
  const {Header, Content, Sider} = Layout;

  return (
    <div className="App">
      <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">HOME</Menu.Item>
        <Menu.Item key="2">BLOGS</Menu.Item>
        <Menu.Item key="3">CREATORS</Menu.Item>
      </Menu>
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key="sub1" icon={<UserOutlined />} title="Categories">
            <Menu.Item key="1">Shonen</Menu.Item>
            <Menu.Item key="2">Komodo</Menu.Item>
            <Menu.Item key="3">Ecchi</Menu.Item>
            <Menu.Item key="4">Comedy</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<LaptopOutlined />} title="Manga Artists">
            <Menu.Item key="5">Eiichiro Oda</Menu.Item>
            <Menu.Item key="6">Osamu Tezuka</Menu.Item>
            <Menu.Item key="7">Akira Toriyama</Menu.Item>
            <Menu.Item key="8">Masashi Kishimoto</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
            <Menu.Item key="9">option9</Menu.Item>
            <Menu.Item key="10">option10</Menu.Item>
            <Menu.Item key="11">option11</Menu.Item>
            <Menu.Item key="12">option12</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>Anime-Directory</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: "100vh",
          }}
        >
          <h2>Anime List</h2>
            
            <Row justify="space-around">
              <Col span={8}>
                <Anime />
              </Col>
            </Row>

            </Content>
          </Layout>
      </Layout>
    </Layout>
    </div>
  );
}



export default App;
