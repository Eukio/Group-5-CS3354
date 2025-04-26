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

            const postsCollection = collection(db, 'Events');
            const q = query(postsCollection, where('creatorId', '==', currentUser.uid));

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
        navigate(`/editEvent/${id}`);
    };

    const handleClick3 = async (id) => {
        try {
            await deleteDoc(doc(db, 'Events', id));
            setEvents(events.filter(event => event.id !== id));
        } catch (error) {
            console.error("Error deleting event:", error);
        }
    };

    const getPossessiveUserName = (displayName) => {
        if (!displayName) return "User's";
        const lastChar = displayName.slice(-1).toLowerCase();
        return lastChar === 's' ? `${displayName}'` : `${displayName}'s`;
    };

    const isFutureEvent = (eventDate) => {
        const today = new Date();
        const eventDateObj = new Date(eventDate);
        today.setHours(0, 0, 0, 0);
        eventDateObj.setHours(0, 0, 0, 0);
        return eventDateObj >= today;
    };

    const futureEvents = events
        .filter(event => isFutureEvent(event.date))
        .sort((a, b) => new Date(a.date) - new Date(b.date));

    const pastEvents = events
        .filter(event => !isFutureEvent(event.date))
        .sort((a, b) => new Date(b.date) - new Date(a.date));

    const formatDate = (dateString) => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString + 'T00:00:00').toLocaleDateString(undefined, options);
    };

    return (
        <div className="page">
            <div className="main-event-heading">
                <h1>{getPossessiveUserName(currentUser?.displayName)} Events</h1>
            </div>

            <div className="joined-events">
                {futureEvents.length > 0 ? (
                    <div className="event-card-wrapper">
                        {futureEvents.map(event => (
                            <div className="my-event" key={event.id}>
                                <div className="event-details">
                                    {formatDate(event.date)}: {event.description}
                                </div>
                                <div className="event-actions">
                                    <button onClick={() => handleClick2(event.id)} className="edit-event">Edit Event</button>
                                    <button onClick={() => handleClick3(event.id)} className="delete-event">Delete Event</button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="no-events-wrapper">
                        <p className="no-events-message">No upcoming events yet!</p>
                    </div>
                )}
            </div>

            {pastEvents.length > 0 && (
                <div className="past-events-section">
                    <h2 className="past-heading">Past Events</h2>
                    <div className="event-card-wrapper">
                        {pastEvents.map(event => (
                            <div className="my-event past-event" key={event.id}>
                                <div className="event-details">
                                    {formatDate(event.date)}: {event.description}
                                </div>
                                <div className="event-actions">
                                    <button onClick={() => handleClick3(event.id)} className="delete-event">Delete Event</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <button onClick={handleClick1} className="create-event">Create Event</button>
        </div>
    );
}

export default MyEvent;
