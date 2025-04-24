import './App.css';
import Login from './pages/login';
import Home from './pages/home';
import Register from './pages/register';
import CreateClub from './pages/createClub';
import ClubDetails from './pages/clubDetails';

import ClubsPage from './pages/clubsPage';

import User from './pages/user';

import Header from './components/header';
import Footer from './components/footer';

import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

function RequireAuth({ children }) {
  const { currentUser } = useContext(AuthContext);
  return currentUser ? children : <Navigate to="/login" />;
}

function AppContent() {
  const location = useLocation();

  // Hide header and footer on login and register pages
  const hideHeaderFooter = location.pathname === '/login' || location.pathname === '/register';

  return (
    <>
      {!hideHeaderFooter && <Header />}

      <Routes>
        {/*<Route path="/" element={<RequireAuth><Home /></RequireAuth>} />*/}
        <Route path="/" element={<RequireAuth><ClubsPage /></RequireAuth>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/club/:id" element={<ClubDetails />} />
        <Route path="/user" element={<User />} />
    
        <Route path="/home" element={<RequireAuth><Home /></RequireAuth>} />
        <Route path="/createClub" element={<RequireAuth><CreateClub /></RequireAuth>} />
      </Routes>

      {!hideHeaderFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
