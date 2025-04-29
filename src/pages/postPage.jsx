import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import "../styles/postPage.css";

function PostPage() {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);

    const handleClick1 = () => {
        navigate('/explore');
    };

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const postsCollection = collection(db, 'Posts');
                const postsSnapshot = await getDocs(postsCollection);
                const postsList = postsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setPosts(postsList);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div className="page">
            <div className="post-main-heading">
                <h1>Popular Posts</h1>
            </div>
            <div className="all-posts">
                {posts.map((post) => (
                    <div key={post.id} className="added-post">
                        <div className="image-wrapper">
                            <img src={post.postImgUrl} alt={post.title || "Post"} className="post-image" />
                        </div>
                        {post.title && <p className="post-title">{post.title}</p>}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PostPage;
