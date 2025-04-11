import './App.css';
import Login from './pages/login';
import Home from './pages/home';
import Register from './pages/register';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

function App() {

  const {currentUser} = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  console.log(currentUser);

  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path='/'>
              <Route index element={<RequireAuth><Home /></RequireAuth>} /> {/* Handle / with RequireAuth */}
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/home' element={<RequireAuth><Home /></RequireAuth>} /> {/* Redundant but explicit */}
            </Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
