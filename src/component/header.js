import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';

export default class Header extends Component {
    render() {
        return (
            <Layout.Header>
                <Row class={'header-container'}>
                    <Col md={6} xs={24}>
                        <h1 className={'header-logo'}>cNode</h1>
                    </Col>
                    <Col md={18} xs={0}/>
                </Row>
            </Layout.Header>
        );
    }
}
