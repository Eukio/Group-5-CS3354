import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/postPage.css";
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
                <div className="added-posts">

                    <button onClick={handleClick1} className="explore-button"> Explore </button>
                </div>
            </div>

        </div>
    );
}

export default PostPage;
