import React from 'react';
import { useNavigate } from 'react-router-dom';

function User() {
    const navigate = useNavigate();
    const handleClick1 = () => {
        navigate('/login');
    };
    return (
        <>
            <h1>User Page</h1>
            <button onClick={handleClick1} className="posts"> Sign out </button>
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
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </>
    );
}

export default User;