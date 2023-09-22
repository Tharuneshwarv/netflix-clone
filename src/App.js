import { Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/HomePage/Homepage';
import { useState, useEffect } from 'react';
import LoginPage from './pages/LoginPage/LoginPage';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => setUser(''), []);

  
    console.log(user);
  return (
    <div className="App"> 
    { 
      !user ? <LoginPage/>: <Homepage />
    }
    </div>
  );
}

export default App;
