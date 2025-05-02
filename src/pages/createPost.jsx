import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase'; 
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '../firebase';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import '../styles/createPost.css';

function CreatePost() {
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const { currentUser } = useContext(AuthContext);
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      setError('');
  
      if (!description || !image) {
        setError('description and image are required.');
        return;
      }
  
      try {
        // Upload the image to Firebase Storage
        const storageRef = ref(storage, `posts/${image.name}`);
        const snapshot = await uploadBytes(storageRef, image);
        const imageUrl = await getDownloadURL(snapshot.ref);
  
        // Create the club document in Firestore
        const postsCollection = collection(db, 'Posts');
        const postData = {
          description: description,
          postImgUrl: imageUrl,
          organizerId: currentUser.uid,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
        };
  
        const newPostRef = await addDoc(postsCollection, postData);
        console.log('Post created successfully! Post ID:', newPostRef.id);
        navigate('/myPost');
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

    return (
        <div className="create-post-container">
          <div className="create-post-box">
            <h2>Create a New Post</h2>
            <form onSubmit={handleSubmit}>
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
                <label htmlFor="image">Image:</label>
                <input
                  type="file"
                  id="image"
                  accept="image/*"
                  onChange={handleImageChange}
                  required
                />
              </div>
              {error && <p className="error-message">{error}</p>}
              <button type="submit">Post</button>
            </form>
          </div>
        </div>
      );
}

export default CreatePost;