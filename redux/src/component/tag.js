import React, { Component } from 'react';
import { Tag } from 'antd';
import filter from '../utils/filter';

export default class CaleTag extends Component {
  render() {
    const dataTemp = this.props.data;
    const tagNow = dataTemp.top ? 'top' : dataTemp.good ? 'good' : dataTemp.tab;
    const tagAttr = filter.tagType(tagNow);
    return (<Tag color={tagAttr.color}>{tagAttr.label}</Tag>);
  }
}