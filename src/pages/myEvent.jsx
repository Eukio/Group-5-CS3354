import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/myEvent.css";
import { db } from '../firebase';
import { collection, getDocs, query, where, doc, deleteDoc } from 'firebase/firestore';
import { AuthContext } from '../context/AuthContext';

function MyEvent() {
    const navigate = useNavigate();
    const { currentUser } = useContext(AuthContext);
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            if (!currentUser) return;

            const postsCollection = collection(db, 'Events'); // Changed from 'Events' to 'Posts'
            const q = query(postsCollection, where('creatorId', '==', currentUser.uid)); // Changed from 'creatorId' to 'organizerId'

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
        navigate('/createEvent');
    };

    const handleClick2 = (id) => {
        navigate(`/editEvent/${id}`); // Navigate to the EditEvent page
    };

    const handleClick3 = async (id) => {
        try {
            await deleteDoc(doc(db, 'Events', id));
            setEvents(events.filter(event => event.id !== id)); // Update local state
            //alert("Event deleted successfully!");
        } catch (error) {
            console.error("Error deleting event:", error);
            //alert("Error deleting event.");
        }
    };

    const getPossessiveUserName = (displayName) => {
        if (!displayName) return "User's"; // Default if no name
        const lastChar = displayName.slice(-1).toLowerCase();
        if (lastChar === 's') {
            return `${displayName}'`;
        } else {
            return `${displayName}'s`;
        }
    };

    return (
        <div className="page" >
            <div className="main-event-heading">
                <h1>{getPossessiveUserName(currentUser?.displayName) || 'User'} Events</h1>
            </div>
            <div className="joined-events">
                {events.map(event => (
                    <div className="my-event" key={event.id}>
                        <div className="event-details">
                            {event.date}: {event.description}
                        </div>
                        <div className="event-actions">
                            <button onClick={() => handleClick2(event.id)} className="edit-event"> Edit Event </button>
                            <button onClick={() => handleClick3(event.id)} className="delete-event"> Delete Event </button>
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={handleClick1} className="create-event"> Create Event </button>
        </div>
    );
}

export default MyEvent;