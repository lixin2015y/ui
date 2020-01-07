import React, {Component} from "react";
import './comment-add.css'
import PropTypes from "prop-types";

export default class CommentAdd extends Component {
    static propTypes = {
        addComment: PropTypes.func.isRequired
    }

    state = {
        userName: '',
        content: ''
    }

    userNameChange = (e) => {
        const userName = e.target.value
        this.setState({
            userName: userName
        })
    }

    contentChange = (e) => {
        const content = e.target.value
        this.setState({
            content: content
        })
    }


    handleSubmit = () => {
        const {userName, content} = this.state
        //封装对象
        const comment = {
            userName: userName,
            content: content
        }
        this.props.addComment(comment)
        this.setState({
            userName: '',
            content: ''
        })
    }


    render() {
        const {userName, content} = this.state
        return (
            <div className="col-md-4">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label>用户名</label>
                        <input type="text" className="form-control" placeholder="用户名" value={userName}
                               onChange={this.userNameChange}/>
                    </div>
                    <div className="form-group">
                        <label>评论内容</label>
                        <textarea className="form-control" rows="6" placeholder="评论内容" value={content}
                                  onChange={this.contentChange}/>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="button" className="btn btn-default pull-right"
                                    onClick={this.handleSubmit}>提交
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}