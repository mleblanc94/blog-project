import React from 'react';
import { useState } from 'react';
import './CreatePost.css';


const CreatePost = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    return(
        <div>
            <h1>Create a post!</h1>
            <div className='body'>
            <div className='create-post-body'>
                <h3>Title:</h3>
                    <textarea type="text" name="blog-title" id='blog-title' rows='1' cols='70'/>
                <h3>Body:</h3>
                    <textarea type="text" name="blog-body" id="blog-body" cols='90' rows='20'/>
            </div>
        </div>
        <div className='button-container'>
            <button>Reset</button>
            <button>Submit</button>
            </div>
        </div>
    )
}

export default CreatePost;