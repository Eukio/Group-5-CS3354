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
                <div className="heading">
                   <p><strong> Group Leader </strong></p>
                </div>
                <div className="group"> E-Sports Club </div>
                <div className="heading">
                    <p><strong> Group Member </strong></p>
                </div>
                <div className="group"> CS AI Club </div>
                <div className="group"> Women Networking </div>
            </div>

            <button onClick={handleClick1} className="sign-out"> Sign out </button>

        </div>
    );
}

export default User;
