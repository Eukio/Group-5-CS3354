import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/myClub.css";
function MyClub() {
    const navigate = useNavigate();
    const handleClick1 = () => {
        navigate('/createClub');
    };
    const handleClick2 = () => {
        navigate('/editClub');
    };
    const handleClick3 = () => {
        navigate('/deleteClub');
    };
    return (
        <div className="page">
            <div className="main-heading">
                <h1>My Clubs</h1>
            </div>
            <div className="joined-clubs">
                <div className="heading-club">
                    <p><strong> Group Leader </strong></p>
                </div>
                <div className="group"> E-Sports Club </div>
                <div className="group"> Rock Climbing Club </div>
               <div className="heading-club">
                   <p><strong> Group Member </strong></p>
               </div>
               <div className="group"> CS AI Club </div>
               <div className="group"> Women Networking </div>
            </div>
            <button onClick={handleClick1} className="create-my-club"> Create Club </button>
            <button onClick={handleClick2} className="edit-club"> Edit Club </button>
            <button onClick={handleClick3} className="delete-club"> Delete Club </button>
        </div>
    );
}

export default MyClub;