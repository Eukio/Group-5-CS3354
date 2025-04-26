import React, { useContext} from 'react'
import '../styles/headerAndFooter.css';
import { AuthContext } from '../context/AuthContext';

export default function Footer() {
  const { currentUser } = useContext(AuthContext);
  return (
    <div class="footer">
        <p>EMAIL: <a href="mailto:{currentUser?.email || 'yourcontact@utdallas.edu'}">{currentUser?.email || 'yourcontact@utdallas.edu'}</a></p>
        <p>Contact: (999) 999-9999</p>
    </div>
  );
}
