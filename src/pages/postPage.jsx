import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/postPage.css";
import chess_post from '../assets/chess-post.png';


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
                    <div className="image-wrapper">
                        <img src={chess_post} alt="Post" className="post-image" />
                      </div>
                    <button onClick={handleClick1}> Explore </button>
                </div>
            </div>
        </div>
    );
}

export default PostPage;
