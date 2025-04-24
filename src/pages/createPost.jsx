import React from 'react';
 import { useNavigate } from 'react-router-dom';
 import "../styles/createPost.css";

 function CreatePost() {
     const navigate = useNavigate();
     const handleClick1 = () => {
         navigate('/home');
     };
     return (
         <div className="page">
             <div className="create-post-heading">
                 <h1>Create Post</h1>
             </div>

         </div>
     );
 }

 export default CreatePost;