import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../src/pages/Home';
import CreatePost from './pages/CreatePost';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import { BlogProvider } from './context/BlogContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/createPost',
        element: <CreatePost />
      },
      {
        path: '/profile',
        element: <Profile />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <BlogProvider>
    <RouterProvider router={router} />
    </BlogProvider>
);
