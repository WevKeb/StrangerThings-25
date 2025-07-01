import React from 'react';
import { fetchAllPosts } from '../api/auth';
import './PostsList.css'

const PostsList = ({posts, setPosts}) => {
    
    return (
        <div className="post-card-cnt">
            {posts.map((post)=>
                <div key={post._id} className="post-card">
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                    <p>Price: {post.price}</p>
                    <button className="card-button">More Info</button>
                </div>
                
            )}
        </div>
    );
};

export default PostsList;