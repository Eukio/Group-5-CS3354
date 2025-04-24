import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/myClub.css";
function MyClub() {
        const navigate = useNavigate();
        const handleClick1 = () => {
                navigate('/createclub');
        };

    return (
        <div className="page">
            <div className="main-heading">
                <h1>My Clubs</h1>
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
            <button onClick={handleClick1} className="create-club"> Create Club </button>
             <br />
              <br />
              <br />

                         <br />
                         <br />
                         <br />
                         <br />
                         <br />
                         <br />
                         <br />
                         <br />
                         <br />
                         <br />
                         <br />
        </div>
    );
}

export default MyClub;