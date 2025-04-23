import './App.css';
import Login from './pages/login';
import Home from './pages/home';
import Register from './pages/register';
import CreateClub from './pages/CreateClub';
import CreatePost from './pages/CreatePost';
import CreateEvent from './pages/CreateEvent';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

function App() {
  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  console.log(currentUser);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RequireAuth><Home /></RequireAuth>} />
          <Route path='/home' element={<RequireAuth><Home /></RequireAuth>} />
          <Route path='/create-club' element={<RequireAuth><CreateClub /></RequireAuth>} />
          <Route path='/create-post' element={<RequireAuth><CreatePost /></RequireAuth>} />
          <Route path='/create-event' element={<RequireAuth><CreateEvent /></RequireAuth>} />
          
          {/* Public routes */}
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
