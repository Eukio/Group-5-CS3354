import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase'; 
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '../firebase';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import '../styles/createClub.css';

function CreateClub() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [numberOfMembers, setNumberOfMembers] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const { currentUser } = useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    if (!name || !description || !image) {
      setError('Club name, description, and image are required.');
      return;
    }

    try {
      // Upload the image to Firebase Storage
      const storageRef = ref(storage, `clubs/${image.name}`);
      const snapshot = await uploadBytes(storageRef, image);
      const imageUrl = await getDownloadURL(snapshot.ref);

      // Create the club document in Firestore
      const clubsCollection = collection(db, 'Clubs');
      const clubData = {
        name: name,
        description: description,
        logoUrl: imageUrl,
        organizerId: currentUser.uid,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
        memberCount: numberOfMembers ? parseInt(numberOfMembers, 10) : 0,
      };

      const newClubRef = await addDoc(clubsCollection, clubData);
      console.log('Club created successfully! Club ID:', newClubRef.id);
      navigate('/');
    } catch (err) {
      console.error('Error creating club:', err);
      setError(err.message);
    }
  };

  const handleImageChange = (event) => {
    if (event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  const handleNumberOfMembersChange = (event) => {
    setNumberOfMembers(event.target.value);
  };

  return (
    <div className="create-club-container">
      <div className="create-club-box">
        <h2>Create a New Club</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Club Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
          <div className="form-group">
            <label htmlFor="image">Club Logo/Image:</label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="numberOfMembers">Number of Members (Optional):</label>
            <input
              type="number"
              id="numberOfMembers"
              value={numberOfMembers}
              onChange={handleNumberOfMembersChange}
              min="0"
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit">Create Club</button>
        </form>
      </div>
    </div>
  );
}

export default CreateClub;