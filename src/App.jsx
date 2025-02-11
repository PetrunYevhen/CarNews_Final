import './App.css';

import React from 'react';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';

import Blog from './components/Blog/Blog';
import BlogPost from './components/BlogPost/BlogPost';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Main from './components/Main/Main';
import Register from './components/Register/Register';

const App = () => {
    return (
        <Router>
            <Header />

            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blogPost" element={<BlogPost />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
