import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { useSelector } from 'react-redux'
import { selectUser } from '../../redux/reducers/userReducer'
import './ProfilePage.css';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
function ProfilePage() {
  const user = useSelector(selectUser);

  return (
    <div className='profilepage'>
        <Navbar />
        
        <div className='profilepage__content'>
          <h1>Edit Profile</h1>
          <div className='profilepage__info'>
            <img className='profilepage__avatar' src='https://i.pinimg.com/originals/61/54/76/61547625e01d8daf941aae3ffb37f653.png'/>
            <div className='profilepage__details'>
              <h3> {user?.email}</h3>
              <div className='profilepage__plans'>
                <h3>Current Plan: Premium</h3>
              </div>
              {/* <button className='profilepage__signout' onClick={() => signOut(auth)}>Sign Out</button> */}
            </div>
          </div>
        </div>
        
    </div>
  )
}

export default ProfilePage