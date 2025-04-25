import React from 'react';
//import { useNavigate } from 'react-router-dom';
import "../styles/postPage.css";
import banner from '../assets/banner.png';
function PostPage() {

    return (
        <div className="page">
            <div className = "post-main-heading">
                <div className="main-img"><img src={banner} alt="Campus" /></div>
                <div className="main-text"> Popular Posts </div>
            </div>

        </div>
    );
}

export default PostPage;