import React, { Component } from 'react';
import { Layout } from 'antd';

export default class Footer extends Component {
    render() {
      return (<Layout.Footer className={'footer'}>
        这里是版权信息---2018/12/12
      </Layout.Footer>);
    }
}
