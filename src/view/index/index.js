import React, { Component } from 'react';
import { Row, Col, List, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import MenuCom from '../../component/menu';
import CaleTag from '../../component/tag';
import indexData from '../../mock/indexData';
import axios from '../../utils/axios';

const menuArr = [
  {
    label: '全部',
    icon: 'home',
    link: '/index/all',
  },
  {
    label: '置顶',
    icon: 'key',
    link: '/index/top',
  },
  {
    label: '精华',
    icon: 'like',
    link: '/index/good',
  },
  {
    label: '问题',
    icon: 'mail',
    link: '/index/ask',
  },
  {
    label: '分享',
    icon: 'link',
    link: '/index/share',
  },
  {
    label: '招聘',
    icon: 'mail',
    link: '/index/job',
  },
  {
    label: '测试',
    icon: 'link',
    link: '/index/dev',
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

class Index extends Component {
  constructor(){
    super();
    this.queryBaseData();
  }
  queryBaseData() {
    axios.get(`/topics`)
      .then((res)=>{
        console.log(res.data.data);
      })
  }
    render() {
      let nowRouter = this.props.match.params.type;
      let listData = indexData.data.map(item => {
        switch (nowRouter) {
          case 'all': {
            return item;
          }
          case 'top': {
            return item.top ? item : '';
          }
          case 'good': {
            return item.good ? item : '';
          }
          default:{
            return (item.tab === nowRouter) ? item : '';
          }
        }
      }).filter(item => {
        return item !== '';
      });
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
                <List
                  itemLayout="horizontal"
                  dataSource={listData}
                  renderItem = {item=>(<List.Item
                    actions={[
                      "回复:"+item.reply_count,
                      "访问:"+item.visit_count
                    ]}
                    key = {item.id}
                  >
                    <List.Item.Meta
                      avatar={<Avatar src={item.author.avatar_url} />}
                      title = {<div>
                        <CaleTag data={item}/>
                        <Link to={"/details/"+item.id} >{item.title}</Link>
                      </div>}
                      description={(<p>
                        <Link to={"/user/"+item.author.loginname}>{
                          item.author.loginname
                        }</Link>
                        发表于:{item.create_at.split("T")[0]}
                      </p>)}
                    />
                  </List.Item>)}
                />
              </Col>
            </Row>
          </div>
        );
    }
}

export default Index;