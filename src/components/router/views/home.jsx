import React, {Component} from "react";
import MyNavLink from "../components/myNavLink";
import {Route, Switch, Redirect} from "react-router-dom"
import Message from "./message";
import News from "./news";

export default class Home extends Component {
    render() {
        return (
            <div>
                <div>Home组件内容</div>
                <div>
                    <ul className="nav nav-tabs">
                        <li><MyNavLink to='/home/news'>news</MyNavLink></li>
                        <li><MyNavLink to='/home/message'>message</MyNavLink></li>
                    </ul>
                </div>
                <div>
                    <Switch>
                        <Route path='/home/news' component={News}/>
                        <Route path='/home/message' component={Message}/>
                        <Redirect to='/home/news'/>
                    </Switch>
                </div>
            </div>
        )
    }
}