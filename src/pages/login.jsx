import React, { useContext, useState } from 'react';
import '../styles/login.css';
import utdLogo from '../assets/utd-logo1.png';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from '../firebase'; // Import db
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { getDoc, doc } from 'firebase/firestore'; // Import Firestore functions

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { dispatch } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => { // Make the callback async
                const user = userCredential.user;
                const userDocRef = doc(db, 'Users', user.uid);
                const userDoc = await getDoc(userDocRef);

                if (userDoc.exists()) {
                    const userData = userDoc.data();
                    dispatch({ type: "LOGIN", payload: { ...user, displayName: userData.displayName } }); // Merge displayName
                } else {
                    dispatch({ type: "LOGIN", payload: user }); // Or handle this case appropriately
                }
                navigate('/');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error('Login error:', errorCode, errorMessage);
                setError(errorMessage);
            });
    };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo-container">
          <img src={utdLogo} alt="UT Dallas Logo" className="utd-logo" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">UTD Email</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your UTD Email"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Your Password"
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <p className="signup-link">
          Don't have an account? <Link to="/register">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;