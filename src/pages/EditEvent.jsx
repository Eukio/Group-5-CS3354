import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { db } from '../firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import '../styles/createEvent.css'; // Reuse create event styles

function EditEvent() {
    const { id } = useParams(); // Get the event ID from the URL
    const navigate = useNavigate();
    const [eventDate, setEventDate] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const eventDoc = await getDoc(doc(db, 'Events', id));
                if (eventDoc.exists()) {
                    const eventData = eventDoc.data();
                    setEventDate(eventData.date);
                    setDescription(eventData.description);
                } else {
                    setError('Event not found.');
                }
            } catch (error) {
                console.error('Error fetching event:', error);
                setError('Could not retrieve event details.');
            }
        };

        fetchEvent();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!eventDate || !description) {
            setError('Both date and description are required.');
            return;
        }

        try {
            await updateDoc(doc(db, 'Events', id), {
                date: eventDate,
                description: description,
            });
            //alert('Event updated successfully!');
            navigate('/myEvent'); // Redirect back to My Events
        } catch (err) {
            console.error('Error updating event:', err);
            //setError(err.message);
        }
    };

    return (
        <div className="create-event-container">
            <div className="create-event-box">
                <h2>Edit Event</h2>
                {error && <p className="error-message">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="eventDate">Date:</label>
                        <input
                            type="date"
                            id="eventDate"
                            value={eventDate}
                            onChange={(e) => setEventDate(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description:</label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Update Event</button>
                </form>
            </div>
        </div>
    );
}

export default EditEvent;