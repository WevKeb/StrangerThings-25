import React from 'react';
import './CreatePost.css'

const CreatePost = () => {
    return (
        <div className="form-container">
            <form
                // onSubmit={handleSubmit}
                className="form"
            >
                <h2>Create Listing</h2>

                <label>
                    Title:
                    <input
                        type="text"
                        name="title"
                        // value={formData.title}
                        // onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    Description:
                    <textarea
                        name="description"
                        // value={formData.description}
                        // onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    Price:
                    <input
                        type="number"
                        name="price"
                        // value={formData.price}
                        // onChange={handleChange}
                        required
                    />
                </label>

                <label className="checkbox-label">
                    <input
                        type="checkbox"
                        name="willDeliver"
                    // checked={formData.willDeliver}
                    // onChange={handleChange}
                    />
                    Will Deliver
                </label>

                <button type="submit">Create Post!</button>
            </form>
        </div>

    );
};

export default CreatePost;