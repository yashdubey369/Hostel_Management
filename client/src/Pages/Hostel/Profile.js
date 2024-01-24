import React from 'react';
import './Profile.css'; 
import { user } from '../../Data/Dummy';

const Profile = () => {
  const userProfile = user[0];
  return (
    <div className="user-profile">
      <h1>User Profile</h1>
      <div className="profile-content">
        <div className="profile-pic">
          <img src={userProfile.userImage} alt="Profile"/>
        </div>
        <div className="user-details">
          <p><span className="field-name">Name:</span><span className="field-answer">   {userProfile.name}
          </span></p>
          <p><span className="field-name">Age: </span>  <span className="field-answer">   {userProfile.age}</span></p>
          <p><span className="field-name">Branch: </span> <span className="field-answer">  {userProfile.branch}</span></p>
          <p><span className="field-name">Sex: </span> <span className="field-answer">    {userProfile.sex}</span></p>
          <p><span className="field-name">Enroll No: </span><span className="field-answer">  {userProfile.enrollNumber}</span></p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
