import React from 'react';
import { useBlog } from '../context/BlogContext';
import './Home.css'

const Home = () => {

    const { blogs, deleteBlog } = useBlog();

    return(
        <div>
            <h1>Blogs</h1>
            <div className='blog-area'>
            {blogs.length === 0 || blogs.length === undefined ?
            <p>No blogs to display!</p> :
            blogs.map((blog) => {
                return (
                    <div className='body-container'>
                    <div className="blog-post">
                        <h2>{blog.title}</h2>
                        <h6>{blog.body}</h6>
                        <button onClick={() => deleteBlog(blog.id)}>Delete</button>
                    </div>
                    </div>
                )
            })
            }
            </div>
            </div>
    )
}

export default Home;