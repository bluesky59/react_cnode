import React, { Component } from 'react';
import { Avatar, Row, Col } from 'antd';
import userData from '../../mock/userData';
import CardList from '../../component/cardList';

class User extends Component {
    render() {
      const data = userData.data;
      return <div className={'main-container'}>
        <Avatar className={'user-avatar'} src={data.avatar_url}/>
        <Row>
          <Col md={8}>用户名：{data.loginname}</Col>
          <Col md={8}>积分：{data.score}</Col>
          <Col md={8}>注册时间：{data.create_at.split('T')[0]}</Col>
        </Row>
        <CardList
          data={data.recent_topics}
          title={'最近创建的话题'}
        />
        <CardList
          data={data.recent_replies}
          title={'最近参与的话题'}
        />
      </div>;
    }
}

export default User;