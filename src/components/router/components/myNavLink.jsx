import React, {Component} from "react";
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom"
import activeClass from './demo.css'

export default class MyNavLink extends Component {
    render() {
        return (
            <NavLink {...this.props} activeClassName='activeClass'/>
        )
    }
}