import React, { Component } from 'react';
import { Card, List, Avatar } from 'antd';
import { Link } from 'react-router-dom';

export default class CardList extends Component {
  render() {
    const { title, data } = this.props;
    return (<Card
      title={title}
      type="inner"
    >
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item key={item.id}>
            <Avatar src={item.author.avatar_url}/>
            <Link className={'user-nick'} to={`/user/${item.author.loginname}`}>{item.author.loginname}</Link>
            <Link to={`/details/${item.id}`}>{item.title}</Link>
            <span className={'action-date'}>最后回复时间：{item.last_reply_at.split('T')[0]}</span>
          </List.Item>
        )}
      />
    </Card>);
  }
}