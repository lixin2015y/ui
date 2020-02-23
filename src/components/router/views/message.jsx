import React, {Component} from "react";
import PropTypes from "prop-types";

export default class Message extends Component {
    state = {
        messages: []
    }

    componentDidMount() {
        // 模拟发送ajax请求
        setTimeout(() => {
            const data = [
                {id: 1, title: 'Message001'},
                {id: 3, title: 'Message003'},
                {id: 5, title: 'Message005'},
            ]
            this.setState({
                messages: data
            })
        }, 1000)
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.messages.map((m, index) => {
                            return (
                                <li key={index}>
                                    <a href='????'>{m.title}</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}