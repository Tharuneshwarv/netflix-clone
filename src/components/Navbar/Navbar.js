import React, { useEffect, useState } from 'react'
import './navbar.css'

function Navbar() {
  let [bgColor, setBgColor] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', changeNavbarOnScroll);
    return () => {
      window.removeEventListener('scroll', changeNavbarOnScroll)
    };
  }, []);

  const changeNavbarOnScroll = () => {
    window.scrollY > 100 ? setBgColor(true) : setBgColor(false);
  };

  return (
    <div className={`navbar ${bgColor ? 'navbar__black': ''}`}>
      <div className='navbar__content'>
        <img id='navbar__logo' src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' alt='logo' />
        <img id='navbar__avatar' src='https://i.pinimg.com/originals/61/54/76/61547625e01d8daf941aae3ffb37f653.png' alt='avatar' />
      </div>
    </div>
  )
}

export default Navbar