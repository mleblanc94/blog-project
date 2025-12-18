import React from 'react';
import { useState, useContext, createContext } from 'react';

const BlogContext = createContext(null);

export const BlogProvider = ({ children }) => {

    const [blogs, setBlogs] = useState([]);

    const addBlog = (title, body) => {
        setBlogs((prevBlogs) => {
            return [
                ...prevBlogs,
                {
                    id: Math.random(),
                    title: title,
                    body: body
                }
            ]
        })
    }

    const deleteBlog = (id) => {
        setBlogs((prevBlogs) => {
            return prevBlogs.filter((blog) => blog.id !== id);
        })
    }

    const value = {addBlog, deleteBlog, blogs};

    return(
        <BlogContext.Provider value={value}>
            {children}
        </BlogContext.Provider>
    )

}

export const useBlog = () => {
    const ctx = useContext(BlogContext);
    if (!ctx) throw new Error('There is no ctx!');
    return ctx;
}