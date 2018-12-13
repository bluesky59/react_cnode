import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Index from '../view/index/index';
import Book from '../view/book/index';
import About from '../view/about/index';
import Details from '../view/details/index';
import User from '../view/user/index';

class RouterIndex extends Component{
    render() {
        return (
            <Switch>
                <Route path='/' exact render={() =>(
                    <Redirect to='/index'/>
                )}/>
                <Route path='/index' component={Index}/>
                <Route path='/book' component={Book}/>
                <Route path='/about' component={About}/>
                <Route path='/user' component={User}/>
                <Route path='/detail' component={Details}/>
            </Switch>
        )
    }
}

export default RouterIndex;