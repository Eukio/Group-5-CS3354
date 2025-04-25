import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/postPage.css";
import chess_post from '../assets/chess-post.png';
import art_post from '../assets/art-post.png';
import debate_post from '../assets/debate-post.png';
import eco_post from '../assets/eco-post.png';
import stem_post from '../assets/STEM-post.png';
import women_post from '../assets/women-networking-post.png';

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
                        <img src={chess_post} alt="Post1" className="post-image" />
                      </div>
                    <button onClick={handleClick1}> Explore </button>
                </div>
                <div className="added-post">
                    <div className="image-wrapper">
                        <img src={art_post} alt="Post2" className="post-image" />
                    </div>
                    <button onClick={handleClick1}> Explore </button>
                </div>
                <div className="added-post">
                    <div className="image-wrapper">
                        <img src={debate_post} alt="Post3" className="post-image" />
                    </div>
                    <button onClick={handleClick1}> Explore </button>
                </div>
                <div className="added-post">
                    <div className="image-wrapper">
                        <img src={eco_post} alt="Post2" className="post-image" />
                    </div>
                    <button onClick={handleClick1}> Explore </button>
                </div>
                <div className="added-post">
                    <div className="image-wrapper">
                        <img src={stem_post} alt="Post2" className="post-image" />
                    </div>
                    <button onClick={handleClick1}> Explore </button>
                    </div>
                <div className="added-post">
                    <div className="image-wrapper">
                        <img src={women_post} alt="Post2" className="post-image" />
                    </div>
                    <button onClick={handleClick1}> Explore </button>
                </div>
            </div>
        </div>
    );
}

export default PostPage;
