import React from 'react';
import { fetchAllPosts } from '../api/auth';
import { useState } from 'react';
import './PostsList.css'

const PostsList = ({ posts, setPosts, user }) => {
    const [selectedPost, setSelectedPost] = useState(null);

    console.log(user, 'this is the logged in user');
    return (
        <div className="post-card-cnt">
            {posts.map((post) =>
                <div key={post._id} className="post-card">
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                    <p>Price: {post.price}</p>
                    <button
                        className="card-button"
                        onClick={() => {
                            // console.log(user);
                            setSelectedPost(post);

                        }}
                    >More Info</button>
                </div>
            )}

            {selectedPost && (
                <div className='modal-backdrop'>
                    <div className='modal'>
                        <h2>Title: {selectedPost.title}</h2>
                        <h5>Listed By: {selectedPost.author.username}</h5>
                        <div>
                            Will Deliver: {selectedPost.willDeliver ? 'Yes' : 'No'}
                        </div>
                        <div>Location: {selectedPost.location}</div>
                        <div>Description: {selectedPost.description}</div>
                        <button
                            onClick={() => {
                                setSelectedPost(null)
                            }}>Close
                        </button>
                        {selectedPost.author.username === user.username && (

                            <button className='delete-btn'>Delete</button>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default PostsList;