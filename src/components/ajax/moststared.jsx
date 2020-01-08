import React, {Component} from "react";
import axios from 'axios'

export default class MostStared extends Component {
    constructor(props) {
        super(props);
        this.state = {
            respName: '',
            respUrl: ''
        }
    }

    componentDidMount() {
        // 使用axios
        // axios.get('https://api.github.com/search/repositories?q=react&sort=stars')
        //     .then(response => {
        //         this.setState({
        //             respName: response.data.items[0].name,
        //             respUrl: response.data.items[0].html_url
        //         })
        //     }).catch((error) => {
        //     console.log(error.message)
        // })

        // 使用fetch
        fetch('https://api.github.com/search/repositories?q=react&sort=stars')
            .then(response => {
                return response.json()
            }).then(data => {
            const {html_url, name} = data.items[0]
            this.setState({
                respName: name,
                respUrl: html_url
            })
        })
    }

    render() {
        const {respName, respUrl} = this.state
        if (!respName) {
            return (
                <div>
                    <p>loading....</p>
                </div>
            )
        } else {
            return (
                <p>the most stared resposity is <a href={respUrl}>{respName}</a></p>
            )
        }
    }
}