import React, { useState } from 'react';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { useNavigate } from 'react-router-dom'; 

const SearchBar = () => {
  const [queryText, setQueryText] = useState('');
  const [results, setResults] = useState([]);
  
  const navigate = useNavigate();
  const search = async (text) => {
    const trimmedText = text.trim();
    if (!trimmedText) {
      setResults([]);
      return;
    }

    try {
      const collectionRef = collection(db, 'Clubs');

      const q = query(collectionRef,orderBy('name'));

      const querySnapshot = await getDocs(q);

      // Map the results into an array
      const res = [];
      querySnapshot.forEach((doc) => {
        const club = { id: doc.id, ...doc.data() };
        if (club.name.toLowerCase().includes(trimmedText.toLowerCase())) {
          res.push(club);
        }
      });

      setResults(res);
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
            if (results.length > 0 || queryText.equals(results[0].name)) {
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
            <li key={club.id} className="dropdown-item">
              {club.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;