import React, { useEffect, useState } from 'react'
import './navbar.css'
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/reducers/userReducer';

function Navbar() {
  let [bgColor, setBgColor] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener('scroll', changeNavbarOnScroll);
    return () => {
      window.removeEventListener('scroll', changeNavbarOnScroll)
    };
  }, []);

  const changeNavbarOnScroll = () => {
    window.scrollY > 100 ? setBgColor(true) : setBgColor(false);
  };

  const logOutEvent = (event) => {
    event.preventDefault();
    signOut(auth).then(() => console.log("logout Successful..."))
    .catch((error) => alert("logOut unsuccessful"));
  }

  return (
    <div className={`navbar ${bgColor ? 'navbar__black': ''}`}>
      <div className='navbar__content'>
        <img id='navbar__logo' src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' alt='logo'  onClick={(e) => navigate("/")}/>
        <div className='navbar__right'>
          <button className='navbar__logout' onClick={(e) => logOutEvent(e)}>Log Out</button>
          <img id='navbar__avatar' src='https://i.pinimg.com/originals/61/54/76/61547625e01d8daf941aae3ffb37f653.png' alt='avatar' onClick={(e) => navigate("/profile")}/>
        </div> 
      </div>
    </div>
  )
}

export default Navbar