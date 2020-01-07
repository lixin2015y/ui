import React, {Component} from "react";
import CommentAdd from "../comment-add/Comment-add";
import CommentList from "../comment-list/Comment-list";


export default class App extends Component {
    state = {
        comments: [
            {userName: 'Tom', content: '挺好的'},
            {userName: 'Jack', content: '挺好的111'}
        ]
    }


    addComment = (comment) => {
        const comments = this.state.comments
        comments.unshift(comment)
        this.setState({comments: comments})
    }


    deleteComment = (index) => {
        const comments = this.state.comments
        comments.splice(index, 1)
        this.setState({comments: comments})
    }

    render() {
        const {comments} = this.state
        return (
            <div>
                <div>
                    <header className="site-header jumbotron">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12">
                                    <h1>请发表对React的评论</h1>
                                </div>
                            </div>
                        </div>
                    </header>
                    <div className="container">
                        <CommentAdd addComment={this.addComment}/>
                        <CommentList comments={comments} deleteComment={this.deleteComment}/>
                    </div>
                </div>
            </div>
        )
    }


}