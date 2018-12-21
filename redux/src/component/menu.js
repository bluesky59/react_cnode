import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link, withRouter } from 'react-router-dom';

class MenuCom extends Component {
  constructor(args){
    super(args);
    this.state = {
      nowMenu: this.getNowMenu(),
    }
  }
  getNowMenu(){
    return this.props.location.pathname;
  }
  shouldComponentUpdate(nextProps){
    if(nextProps.location.pathname !== this.state.nowMenu){
      this.setState({
        nowMenu: nextProps.location.pathname
      })
      return false;
    }
    return true;
  }
  render() {
    const { menuData, menuInfo } = this.props;
    return (<Menu
      mode = {menuInfo.mode}
      id = {menuInfo.id}
      theme = {menuInfo.theme}
      selectedKeys = {[this.state.nowMenu]}
    >
      {menuData.map((item) => {
        return (
          <Menu.Item key={item.link}>
            <Icon type={item.icon} />{item.label}
            <Link to={item.link}/>
          </Menu.Item>
        )
      })}
    </Menu>);
  }
}

export default withRouter(props => {
  const { menuData, menuInfo, location } = props;
  return <MenuCom
    menuData={menuData}
    menuInfo={menuInfo}
    location={location}
  />
});