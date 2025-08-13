import React from 'react';
import { fetchAllPosts } from '../api/auth';
import { useState } from 'react';
import { deletePost } from '../api/auth';
import { toast } from 'react-toastify';
import './PostsList.css'

const PostsList = ({ posts, setPosts, user, setDeletedPost }) => {
    const [selectedPost, setSelectedPost] = useState(null);

    const updateAllPosts = async () => {
        try {
            const postsToSet = await fetchAllPosts();
            setPosts(postsToSet);
        } catch (error) {
            console.error(error);
        }
    };

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
                        <div>ID: {selectedPost._id}</div>
                        <div>Is Active: {selectedPost.active ? 'Yes' : 'No'}</div>
                        <button
                            onClick={() => {
                                setSelectedPost(null)
                            }}>Close
                        </button>
                        {selectedPost.author.username === user.username && (

                            <button
                                className='delete-btn'
                                onClick={async (e) => {
                                    // e.preventDefault();
                                    try {
                                        await deletePost(selectedPost._id);
                                        setSelectedPost(null);
                                        setDeletedPost(true);
                                        toast.success('Post deleted successfully');
                                    } catch (error) {
                                        console.error(error);
                                        toast.error('Failed to delete post');
                                    }
                                }}
                            >Delete</button>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default PostsList;