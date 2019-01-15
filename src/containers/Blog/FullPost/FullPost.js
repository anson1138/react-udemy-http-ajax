import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null
    }

    postDeleteHandler = () => {
        axios.delete('/posts/' + this.props.id)
            .then(response => {
                console.log(response)
            });

    }
    componentDidMount() {
        console.log(this.props.match.params.id)
        if (this.props.match.params.id) {
            // only fetch data if loadedPost is null or is different postid
            // otherwise you can end up infinit loop fetching data b/c
            // componentDidUpdate gets invoked everytime state is updated
            // which it is w/ setState so put if condition here to avoid
            // infinite loop of network fetching of data to axios method.
            if (!this.state.loadedPost || this.state.loadedPost.id !== this.props.match.params.id) {
            // if (!this.state.loadedPost || this.state.loadedPost.id !== this.props.id) {
                axios.get('/posts/' + this.props.match.params.id)
                // axios.get('/posts/' + this.props.id)
                .then(response => {
                    // console.log(response)
                    this.setState({loadedPost: response.data})
                })

            }
        }
    }
    render () {
        let post = <p stype={{textAlign: 'center'}}>Please click Post!</p>;
        if (this.props.match.params.id) {
            post = <p stype={{textAlign: 'center'}}>Loading...</p>;
        }
        if (this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.postDeleteHandler}>Delete</button>
                    </div>
                </div>

            );
        if (this.state.deletePost) {
            post = <p stype={{ textAlign: 'center' }}>Please click Post one more time!</p>;
        }

        }
        return post;
    }
}

export default FullPost;
