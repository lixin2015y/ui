import React, {Component} from "react";
import logo from '../logo.svg'

export default class App extends Component {
    render() {
        return (
            <div>
                <img  className='logo' src={logo}/>
                <p className='title'>react组件</p>
            </div>
        )
    }
}
