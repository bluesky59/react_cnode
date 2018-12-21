import React, { Component } from 'react';
import RouterIndex from './router/index';
import Header from './component/header';
import Footer from './component/footer';
import './static/less/index.css';

class App extends Component {
  render() {
    return (
      <div className={'container'}>
        <Header/>
        <div className={'main-body'}>
          <RouterIndex/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
