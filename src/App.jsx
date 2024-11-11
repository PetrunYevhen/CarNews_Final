import React from 'react';
import styles from "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header/Header';
import Blog from "./components/Blog/Blog";
import BlogPost from "./components/BlogPost/BlogPost";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";


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
