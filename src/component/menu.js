import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

export default class MenuCom extends Component {
  render() {
    const { menuData, menuInfo } = this.props;
    return (<Menu
      mode = {menuInfo.mode}
      id = {menuInfo.id}
      theme = {menuInfo.theme}
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