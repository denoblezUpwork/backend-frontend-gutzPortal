import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginForm from './pages/Login';
import AdminPage from './pages/Admin';
import UserPage from './pages/User';
import { AuthContext } from './context/AuthContext';
import axios from 'axios';
import Cookies from 'js-cookie';

function App() {
  const [user, setUser] = useState(null); // Initialize user state
  const [loading, setLoading] = useState(true); // Initialize loading state

  useEffect(() => {
    // Check if user is authenticated
    const checkAuth = async () => {
      try {
        // Check cookies for user data
        const storedUser = Cookies.get('user');
        if (storedUser) {
          setUser(JSON.parse(storedUser)); // Set user state from cookies
        } else {
          const response = await axios.get('/api/users/profile');
          setUser(response.data.user); // Set user state if authenticated
          Cookies.set('user', JSON.stringify(response.data.user)); // Store user data in cookies
        }
      } catch (error) {
        console.error('Authentication check failed:', error);
      }
      setLoading(false); // Set loading state to false after authentication check
    };

    checkAuth();
  }, []);

  // Function to handle user logout
  const handleLogout = async () => {
    try {
      localStorage.removeItem('user'); // Remove user data from localStorage
      await axios.post('/api/users/logout');
      setUser(null); // Clear user state
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  // Function to handle storing user data in cookies
  const storeUserDataInCookies = (userData) => {
    Cookies.set('user', JSON.stringify(userData)); // Store user data in cookies
  };

  if (loading) {
    return <div>Loading...</div>; // Render loading indicator until authentication state is determined
  }

  return (
    <AuthContext.Provider value={{ user, setUser: (userData) => { setUser(userData); storeUserDataInCookies(userData); }, handleLogout }}>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route
              path="/admin"
              element={user && user.role === 'admin' ? <AdminPage /> : <Navigate to="/" />}
            />
            <Route
              path="/user"
              element={user && user.role === 'user' ? <UserPage /> : <Navigate to="/" />}
            />
            {/* Redirect to login page if no route matches */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
