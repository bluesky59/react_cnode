import React, { Component } from 'react';
import { Row, Col } from 'antd';
import MenuCom from '../../component/menu';

const menuArr = [
  {
    label: '全部',
    icon: 'home',
    link: '/index/all',
  },
  {
    label: '问答',
    icon: 'key',
    link: '/index/ask',
  },
  {
    label: '精华',
    icon: 'like',
    link: '/index/good',
  },
  {
    label: '招聘',
    icon: 'mail',
    link: '/index/job',
  },
  {
    label: '测试',
    icon: 'link',
    link: '/index/test',
  },
];

const menuAttr = {
  mode: 'vertical',
  id: 'main-nav',
  theme: 'light',
};

const menuXsAttr = {
  mode: 'horizontal',
  id: 'main-xs-nav',
  theme: 'light',
};

let data = [];
for (let i = 0; i++ ;i < 60) {
  data.push({
    label: `这是第${i}条数据`,
    id: i,
  });
  console.log(i);
}
data.push({
  label: `这是第1条数据`,
  id: 1,
});
console.log(data);

class Index extends Component {
    render() {
        return (
          <div>
            <Row>
              <Col xs={24} md={0}>
                <MenuCom menuData={menuArr} menuInfo={menuXsAttr}>></MenuCom>
              </Col>
            </Row>
            <Row className={'main-nav-warp'}>
              <Col xs={0} md={6}>
                <MenuCom menuData={menuArr} menuInfo={menuAttr}>></MenuCom>
              </Col>
              <Col xs={24} md={18}>
                {data.map((item, index) => {
                  return (<li key={index}>{item.label}</li>)
                })}
              </Col>
            </Row>
          </div>
        );
    }
}

export default Index;