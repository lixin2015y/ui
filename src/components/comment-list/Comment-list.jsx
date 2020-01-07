import React, {Component} from "react";
import CommentItem from "../comment-item/Comment-item";
import PropTypes from "prop-types"
import './comment-list.css'

export default class CommentList extends Component {

    static propTypes = {
        comments: PropTypes.array.isRequired,
        deleteComment: PropTypes.func.isRequired
    }

    render() {
        const comments = this.props.comments
        const display = this.props.comments.length === 0 ? 'block' : 'none'
        return (
            <div className="col-md-8">
                <h3 className="reply">评论回复：</h3>
                <h2 style={{display: display}}>暂无评论，点击左侧添加评论！！！</h2>
                <ul className="list-group">
                    {comments.map((comment, index) =>
                        <CommentItem comment={comment} key={index} deleteComment={this.props.deleteComment} index={index}/>
                        )}
                </ul>
            </div>
        )
    }
}