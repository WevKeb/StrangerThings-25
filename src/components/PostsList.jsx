import React from 'react';
import { fetchAllPosts } from '../api/auth';

const PostsList = ({posts, setPosts}) => {
    
    return (
        <div>
            {posts.map((post)=>
                <div key={post._id}>
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                    <p>{post.price}</p>
                </div>
                
            )}
        </div>
    );
};

export default PostsList;