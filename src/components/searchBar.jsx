import React, { useState } from 'react';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { useNavigate } from 'react-router-dom'; 
import '../styles/headerAndFooter.css';

const SearchBar = () => {
  const [queryText, setQueryText] = useState('');
  const [results, setResults] = useState([]);
  
  const navigate = useNavigate();
  const search = async (text) => {
    const trimmedText = text.trim().toLowerCase();
    if (!trimmedText) {
      setResults([]);
      return;
    }
  
    try {
      const collectionRef = collection(db, 'Clubs');
      const q = query(collectionRef, orderBy('name'));
      const querySnapshot = await getDocs(q);
  
      const startsWithMatches = [];
      const includesMatches = [];
  
      querySnapshot.forEach((doc) => {
        const club = { id: doc.id, ...doc.data() };
        const name = club.name || '';
        const nameLower = name.toLowerCase();
  
        if (nameLower.startsWith(trimmedText)) {
          startsWithMatches.push(club);
        } else if (nameLower.includes(trimmedText)) {
          includesMatches.push(club);
        }
      });
  
      setResults([...startsWithMatches, ...includesMatches]);
    } catch (error) {
      console.error('Error fetching clubs:', error);
    }
  };
  

  const handleInputChange = (e) => {
    const text = e.target.value;
    setQueryText(text);
    search(text); 
  };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); 
            if (results.length > 0 && queryText.toLowerCase() === results[0].name.toLowerCase())
            {
              navigate(`/club/${results[0].id}`);
            }
          }
    };
    
  return (
    <div className="search-bar">

      
      <input
        type="text"
        placeholder="Enter Club Name"
        value={queryText}
        onChange={handleInputChange} 
        onKeyDown={handleKeyDown}
        className="search-input" 
      />

    
      {results.length > 0 && (
        <ul className="dropdown-results">
          {results.map((club) => (
            <li key={club.id} className="dropdown-item"
            onClick={() => {
              navigate(`/club/${club.id}`);
              setQueryText('');
              setResults([]);
            }}>
              {club.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;