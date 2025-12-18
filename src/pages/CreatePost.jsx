import React from 'react';
import { useState } from 'react';
import './CreatePost.css';
import { useBlog } from '../context/BlogContext';

const CreatePost = () => {

    const { addBlog, Blogs } = useBlog();

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const reset = () => {
        setTitle('');
        setBody('');
    }

    return(
        <div>
            <h1>Create a post!</h1>
            <div className='body'>
            <div className='create-post-body'>
                <h3>Title:</h3>
                    <textarea type="text" name="blog-title" id='blog-title' rows='1' cols='70' value={title} onChange={(e) => setTitle(e.target.value)}/>
                <h3>Body:</h3>
                    <textarea type="text" name="blog-body" id="blog-body" cols='90' rows='20' value={body} onChange={(e) => setBody(e.target.value)}/>
            </div>
        </div>
        <div className='button-container'>
            <button onClick={() => reset()}>Reset</button>
            <button onClick={() => addBlog(title, body)}>Submit</button>
            </div>
        </div>
    )
}

export default CreatePost;