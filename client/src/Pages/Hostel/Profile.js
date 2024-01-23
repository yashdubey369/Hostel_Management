import React from 'react';
import './Profile.css'; 
import { user } from '../../Data/Dummy';

const Profile = () => {
 

  const userProfile = user[0];
  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <p>Name: {userProfile.name}</p>
      <p>Age: {userProfile.age}</p>
      <p>Branch: {userProfile.branch}</p>
      <p>Sex: {userProfile.sex}</p>
      <p>Enrollment Number: {userProfile.enrollNumber}</p>
    </div>
  );
};

export default Profile;
