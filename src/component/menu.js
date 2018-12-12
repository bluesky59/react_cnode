import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

export default class MenuCom extends Component {
  render() {
    const { menuData } = this.props;
    return (<Menu
      mode='horizontal'
      className='header-nav'
      theme='light'
    >
      {menuData.map((item, index) => {
        return (
          <Menu.Item key={index}>
            <Icon type={item.icon} />{item.label}
            <Link to={item.link}/>
          </Menu.Item>
        )
      })}
    </Menu>);
  }
}