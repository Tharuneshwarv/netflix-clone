import React from 'react'
import './navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar__content'>
        <img id='navbar__logo' src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' alt='logo' />
        <img id='navbar__avatar' src='https://i.pinimg.com/originals/61/54/76/61547625e01d8daf941aae3ffb37f653.png' alt='avatar' />
      </div>
    </div>
  )
}

export default Navbar