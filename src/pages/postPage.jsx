import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/postPage.css";
import chess_post from '../assets/art-post.png';

function PostPage() {
    const navigate = useNavigate();
    const handleClick1 = () => {
        navigate('/explore');
    };

    return (
        <div className="page">
            <div className = "post-main-heading">
                <h1> Popular Posts </h1>
            </div>
            <div className="all-posts">
                <div className="added-post">
                    <img src={chess_post} alt="post1" className="post-image"/>
                    <button onClick={handleClick1}> Explore </button>
                </div>
            </div>

        </div>
    );
}

export default PostPage;
