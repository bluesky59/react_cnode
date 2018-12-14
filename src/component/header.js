import React, { Component } from 'react';
import { Layout, Row, Col, Divider, Dropdown, Icon, Button } from 'antd';
import MenuCom from './menu';

const menuArr = [
  {
    label: '首页',
    icon: 'home',
    link: '/index/all',
  },
  {
    label: '课程',
    icon: 'book',
    link: '/book',
  },
  {
    label: '关于',
    icon: 'info',
    link: '/about',
  },
];

const menuAttr = {
  mode: 'horizontal',
  id: 'header-nav',
  theme: 'light',
};

const menuXsAttr = {
  mode: 'vertical',
  id: 'header-xs-nav',
  theme: 'light',
};

export default class Header extends Component {
    render() {
        return (
            <Layout.Header>
                <Row>
                    <Col md={6} xs={24}>
                        <h1 className={'header-logo'}>cNode</h1>
                    </Col>
                  <Col md={18} xs={0}>
                    <Divider type="vertical" className={'hedaer-divider'} />
                    <MenuCom menuData={menuArr} menuInfo={menuAttr}>></MenuCom>
                  </Col>
                  <Col md={0} xs={1} className={'header-xs-menu'}>
                    <Dropdown
                      overlay={<MenuCom menuData={menuArr}  menuInfo={menuXsAttr}>></MenuCom>}
                      trigger={['click', 'touchmove']}
                    >
                      <Button><Icon type="bars"/></Button>
                    </Dropdown>
                  </Col>
                </Row>
            </Layout.Header>
        );
    }
}
