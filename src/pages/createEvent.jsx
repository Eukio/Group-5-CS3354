import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { AuthContext } from '../context/AuthContext';
import '../styles/createEvent.css'; // reuse same styling

function CreateEvent() {
  const [eventDate, setEventDate] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const { currentUser } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!eventDate || !description) {
      setError('Both date and description are required.');
      return;
    }

    try {
      const eventsCollection = collection(db, 'Events');
      const eventData = {
        date: eventDate,
        description,
        creatorId: currentUser.uid,
        createdAt: serverTimestamp(),
      };

      const newEventRef = await addDoc(eventsCollection, eventData);
      console.log('Event created successfully! Event ID:', newEventRef.id);
      navigate('/myEvent');
    } catch (err) {
      console.error('Error creating event:', err);
      setError(err.message);
    }
  };

  return (
    <div className="create-club-container">
      <div className="create-club-box">
        <h2>Create a New Event</h2>
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
          {error && <p className="error-message">{error}</p>}
          <button type="submit">Create Event</button>
        </form>
      </div>
    </div>
  );
}

export default CreateEvent;
