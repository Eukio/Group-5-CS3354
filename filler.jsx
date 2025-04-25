import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/myEvent.css";
import { db } from '../firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { AuthContext } from '../context/AuthContext';

function MyEvent() {
    const navigate = useNavigate();
    const { currentUser } = useContext(AuthContext);
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            if (!currentUser) return;

            const postsCollection = collection(db, 'Posts'); // Changed from 'Events' to 'Posts'
            const q = query(postsCollection, where('organizerId', '==', currentUser.uid)); // Changed from 'creatorId' to 'organizerId'

            try {
                const querySnapshot = await getDocs(q);
                const eventsData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setEvents(eventsData);
            } catch (error) {
                console.error("Error fetching events:", error);
            }
        };

        fetchEvents();
    }, [currentUser]);

    const handleClick1 = () => {
        navigate('/createEvent'); // Changed from '/createEvent' to '/createPost'
    };
    const handleClick2 = () => {
        navigate('/editEvent'); // Changed from '/editEvent' to '/editPost'
    };
    const handleClick3 = () => {
        navigate('/deleteEvent'); // Changed from '/deleteEvent' to '/deletePost'
    };

    return (
        <div className="page">
            <div className="main-event-heading">
                <h1>My Events</h1>
            </div>
            <div className="joined-events">
                {events.map(event => (
                    <div className="my-event" key={event.id}>
                        {event.createdAt}: {event.description} 
                    </div>
                ))}
            </div>
            <button onClick={handleClick1} className="create-event"> Create Event </button>  {/* Changed button text */}
            <button onClick={handleClick2} className="edit-event"> Edit Event </button>     {/* Changed button text */}
            <button onClick={handleClick3} className="delete-event"> Delete Event </button>   {/* Changed button text */}
        </div>
    );
}

export default MyEvent;