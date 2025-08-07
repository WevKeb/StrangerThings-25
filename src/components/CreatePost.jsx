import React from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { createNewPost } from '../api/auth';
import './CreatePost.css'

const CreatePost = () => {
    const [post, setPost] = useState({
        title: '',
        description: '',
        price: 0,
        willDeliver: false
    });


    return (
        <div className="form-container">
            <form
                className="form"
                onSubmit={async (e) => {
                    e.preventDefault(); // prevent page reload
                    try {
                        const result = await createNewPost(post);
                        console.log(result, 'should be returned obj');
                        if (result.success === true) {
                            toast.success("Successfully created new post!")
                            setPost({
                                title: '',
                                description: '',
                                price: 0,
                                willDeliver: false
                            })
                        }
                    } catch (error) {
                        console.error('Error creating post:', error);
                        toast.error("Error creating new post");
                    }
                }}
            >

                <h2>Create Listing</h2>

                <label>
                    Title:
                    <input
                        type="text"
                        name="title"
                        value={post.title}
                        onChange={(e) => {
                            setPost({ ...post, title: e.target.value })
                        }}
                        required
                    />
                </label>

                <label>
                    Description:
                    <textarea
                        name="description"
                        value={post.description}
                        onChange={(e) => {
                            setPost({ ...post, description: e.target.value })
                        }}
                        required
                    />
                </label>

                <label>
                    Price:
                    <input
                        type="number"
                        name="price"
                        value={post.price}
                        onChange={(e) => {
                            setPost({ ...post, price: e.target.value })
                        }}
                        required
                    />
                </label>

                <label className="checkbox-label">
                    <input
                        type="checkbox"
                        name="willDeliver"
                        checked={post.willDeliver}
                        onChange={(e) => {
                            setPost({ ...post, willDeliver: e.target.checked })
                        }}
                    />
                    Will Deliver
                </label>

                <button type="submit">Create Post!</button>
            </form>
        </div >

    );
};

export default CreatePost;