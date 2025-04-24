import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/myEvent.css";
function MyClub() {
    const navigate = useNavigate();
    const handleClick1 = () => {
        navigate('/createEvent');
    };
    const handleClick2 = () => {
        navigate('/editEvent');
    };
    const handleClick3 = () => {
        navigate('/deleteEvent');
    };
    return (
        <div className="page">
            <div className="main-event-heading">
                <h1>My Events</h1>
            </div>
            <div className="joined-events">
                <div className="my-event"> April 17: E-Sports Competition </div>
                <div className="my-event"> April 21: Women in Networking: General meeting </div>
            </div>
            <button onClick={handleClick1} className="create-event"> Create Event </button>
            <button onClick={handleClick2} className="edit-event"> Edit Event </button>
            <button onClick={handleClick3} className="delete-event"> Delete Event </button>
        </div>
    );
}

export default MyClub;