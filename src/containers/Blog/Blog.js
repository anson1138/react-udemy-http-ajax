import React, { Component } from 'react';
// import axios from 'axios';
import Posts from './Posts/Posts';
import NewPosts from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';
import { Route, NavLink, Switch } from 'react-router-dom';

import './Blog.css';

class Blog extends Component {



    render () {


        // console.log(post);
        return (
            <div>
                <header className="Blog">
                    <nav>
                        <ul>
                            {/* <li><a href="/">Home</a></li> */}
                            <li><NavLink
                                to="/"
                                exact
                                activeClassName='my-active'
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}>Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: 'new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                            {/* <li><a href="/new-post">New Post</a></li> */}
                        </ul>
                    </nav>
                </header>
                {/* <Posts /> */}
                {/* <Route path="/"  render={() => <h1>root slash</h1>} /> */}
                {/* <Route path="/new-post" render={() => <h1>new post</h1>} /> */}
                <Route path="/" exact component={Posts} />
                <Switch>
                    <Route path="/new-post" component={NewPosts} />
                    <Route path="/:id" exact component={FullPost} />
                </Switch>

            </div>
        );
    }
}

export default Blog;
