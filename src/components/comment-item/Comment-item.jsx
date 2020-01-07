import React, {Component} from "react";
import './comment-item.css'
import PropTypes from "prop-types";

export default class CommentItem extends Component {
    static propTypes = {
        comment: PropTypes.object.isRequired,
        deleteComment: PropTypes.func.isRequired,
        index: PropTypes.number.isRequired
    }
    handleClick = () => {
        const userName = this.props.comment.userName
        if (window.confirm(`确定删除${userName}的评论吗?`)) {
            this.props.deleteComment(this.props.index)
        }
    }

    render() {
        const {comment} = this.props
        return (
            <li className="list-group-item">
                <div className="handle">
                    <a href="javascript:;" onClick={this.handleClick}>删除</a>
                </div>
                <p className="user"><span>{comment.userName}</span><span>说:</span></p>
                <p className="centence">{comment.content}</p>
            </li>
        )
    }
}