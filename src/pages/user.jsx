import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/user.css";

function User() {
    const navigate = useNavigate();
    const handleClick1 = () => {
        navigate('/login');
    };
    return (
        <div className="page">
            <div className="profile-container">
                <div className="avatar">
                  < i class="fa-solid fa-user"></i>
                </div>
                <div class="profile">
                   <p><strong>Name:</strong> April Smith</p>
                   <p><strong>Email ID:</strong> yourcontact@utdallas.edu</p>
                </div>
            </div>
            <div className="joined-clubs">
                <p><Strong>Group Leader </strong></p>

            </div>
            <button onClick={handleClick1} className="sign-out"> Sign out </button>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        </div>
    );
}

export default User;
