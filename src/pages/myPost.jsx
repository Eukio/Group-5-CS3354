import React from 'react';
import { useNavigate } from 'react-router-dom';
import women_post from '../assets/women-networking-post.png';
import "../styles/myPost.css";


function MyPost() {
    const navigate = useNavigate();
    const handleClick1 = () => {
        navigate('/createPost');
    };
    const handleClick2 = () => {
        navigate('/editPost');
    };
    const handleClick3 = () => {
        navigate('/deletePost');
    };
    return (
        <div className="page">
            <div className="main-post-heading">
                <h1>My Posts</h1>
            </div>
            <div className="joined-posts">
                <div className="image-wrapper1">
                    <img src={women_post} alt="Post1" className="post-image" />
                 </div>
            </div>
            <button onClick={handleClick1} className="create-post"> Create Post </button>
            <button onClick={handleClick2} className="edit-post"> Edit Post </button>
            <button onClick={handleClick3} className="delete-post"> Delete Post </button>
        </div>
    );
}

export default MyPost;