import React from 'react';
 import { useNavigate } from 'react-router-dom';
 import "../styles/createPost.css";

 function CreatePost() {
     const navigate = useNavigate();
     const handleClick1 = () => {
         navigate('/login');
     };
     return (
         <div className="page">
             <h1> CreatePost </h1>

         </div>
     );
 }

 export default CreatePost;