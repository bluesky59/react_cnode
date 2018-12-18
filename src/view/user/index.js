import React, { Component } from 'react';
import { Avatar, Row, Col } from 'antd';
import { connect } from 'react-redux';
import CardList from '../../component/cardList';
import axios from "../../utils/axios";

class User extends Component {
  constructor(args){
    super(args);
    const nowUser = this.props.match.params.loginname;
    this.getBaseData(nowUser);
  }
  getBaseData(username){
    this.props.dispatch((dispatch) => {
      dispatch({
        type:"USER_UPDATE"
      });
      axios.get(`/user/${username}`)
        .then((res)=>{
          dispatch({
            type: 'USER_UPDATE_SUCCESS',
            data: res.data.data,
          })
        })
        .catch(error => {
          dispatch({
            type: 'USER_UPDATE_ERROR',
            data: error,
          })
        })
    });
  }
  shouldComponentUpdate(nextProps){
    let nowName = this.props.match.params.loginname;
    let nextName = nextProps.match.params.loginname;
    if(nowName !== nextName){
      this.getBaseData(nextName);
      return false;
    }
    return true;
  }
  render() {
    const { data, loading } = this.props;
    return <div className={'main-container'}>
      <Avatar className={'user-avatar'} src={data.avatar_url}/>
      <Row className={'user-detail-info'}>
        <Col md={8}>用户名：{data.loginname}</Col>
        <Col md={8}>积分：{data.score}</Col>
        <Col md={8}>注册时间：{data.create_at.split('T')[0]}</Col>
      </Row>
      <CardList
        loading={loading}
        data={data.recent_topics}
        title={'最近创建的话题'}
      />
      <CardList
        loading={loading}
        data={data.recent_replies}
        title={'最近参与的话题'}
      />
    </div>;
  }
}

export default connect(state => (state.user))(User);