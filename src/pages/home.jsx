import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/home.css";
function Home() {
        const navigate = useNavigate();
        const handleClick1 = () => {
                navigate('/createClub');
        };
        const handleClick2 = () => {
                navigate('/createPost');
        };
    return (
        <>
            <h1>Home Page</h1>
            <button onClick={handleClick1} className="create-club"> Create Club </button>
             <button onClick={handleClick2} className="create-post"> Create Post </button>
             <br />
              <br />
              <br />

                         <br />
                         <br />
                         <br />
                         <br />
                         <br />
                         <br />
                         <br />
                         <br />
                         <br />
                         <br />
                         <br />
        </>
    );
}

export default Home;