import React, { useState } from 'react';
import '../styles/register.css';
import utdLogo from '../assets/utd-logo1.png';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"; // Import updateProfile
import { auth, db } from '../firebase';
import { useNavigate, Link } from 'react-router-dom';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';

function Register() {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();
    setError('');

    if (!email.endsWith('@utdallas.edu')) {
      setError('Please use your official @utdallas.edu email address.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Update the user's profile
      await updateProfile(user, {
        displayName: displayName,
      });
      console.log('Registration successful:', user);

      // Create a user document in Firestore
      const userDocRef = doc(db, 'Users', user.uid);
      await setDoc(userDocRef, {
        uid: user.uid,
        displayName: displayName,
        email: user.email,
        createdAt: serverTimestamp(),
      });

      navigate('/'); // Redirect
    } catch (error) {
      console.error('Registration error:', error);
      setError(error.message);
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <div className="logo-container">
          <img src={utdLogo} alt="UT Dallas Logo" className="utd-logo" />
        </div>
        <h2>Create an Account</h2>
        <form onSubmit={handleRegister}>
          <div className="input-group">
            <label htmlFor="displayName">Display Name</label>
            <input
              type="text"
              id="displayName"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="Enter your preferred display name"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">UTD Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your @utdallas.edu email"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
              required
              minLength={6} // Example minimum password length
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="register-button">
            Sign Up
          </button>
        </form>
        <p className="login-link">
          Already have an account? <Link to="/login">Log In</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;