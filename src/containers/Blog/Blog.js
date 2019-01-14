import React, { Component } from 'react';
// import axios from 'axios';
import Posts from './Posts/Posts';
import { Route } from 'react-router-dom';

import './Blog.css';

class Blog extends Component {



    render () {


        // console.log(post);
        return (
            <div>
                <header className="Blog">
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New Post</a></li>
                        </ul>
                    </nav>
                </header>
                {/* <Posts /> */}
                {/* <Route path="/"  render={() => <h1>root slash</h1>} /> */}
                {/* <Route path="/new-post" render={() => <h1>new post</h1>} /> */}
                <Route path="/" exact component={Posts} />

            </div>
        );
    }
}

export default Blog;
