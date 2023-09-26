import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/HomePage/Homepage';
import { useState, useEffect } from 'react';
import LoginPage from './pages/LoginPage/LoginPage';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './redux/reducers/userReducer';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if(user) {
        dispatch(login({
          uid: user.uid,
          email: user.email
        }));
      } else {
        dispatch(logout()); 
      } 
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="App"> 
      <Router >
        { 
          !user ? <LoginPage/>: (
            <Routes>
              <Route path='/' element={<Homepage/>} />
              <Route path='/profile' element={<ProfilePage />} />
            </Routes>
            
          )
        }
      </Router>
    
    </div>
  );
}

export default App;
