import React, { Component } from 'react';
import { Row, Col, List, Avatar } from 'antd';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MenuCom from '../../component/menu';
import CaleTag from '../../component/tag';
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

let type;

class Index extends Component {
  constructor(args){
    super(args);
    this.state = {
      page: 1,
      limit: 10,
      total: 100,
    };
    type = this.props.match.params.type;
    this.queryBaseData(this.state.page, type);
  }
  shouldComponentUpdate(nextProps, nextState){
    if (nextProps.match.params.type !== type) {
      type = nextProps.match.params.type;
      this.setState({
        page: 1,
      });
      this.queryBaseData(nextState.page, type);
      return false;
    }
    if (this.state.page !== nextState.page) {
      this.queryBaseData(nextState.page, type);
      return false;
    }
    return true;
  }
  queryBaseData(page, tab) {
    const { limit } = this.state;
    this.props.dispatch((dispatch) => {
      dispatch({
        type:"LIST_UPDATE"
      });
      axios.get(`/topics?tab=${tab}&page=${page}&limit=${limit}`)
        .then((res)=>{
          dispatch({
            type: 'LIST_UPDATE_SUCCESS',
            data: res.data.data,
          })
        })
        .catch(error => {
          dispatch({
            type: 'LIST_UPDATE_ERROR',
            data: error,
          })
        })
    });
  }
  render() {
    const { loading, data } = this.props;
    const { page, limit, total } = this.state;
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
              loading={loading}
              itemLayout="horizontal"
              dataSource={data}
              pagination = {loading ? false : {
                current: page,
                pageSize: limit,
                total: total,
                onChange:((current)=>{
                  this.setState({
                    page: current
                  });
                })
              }}
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

export default connect(state => (state.list))(Index);
