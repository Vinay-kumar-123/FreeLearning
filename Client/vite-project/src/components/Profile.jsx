import React, { useEffect, useState, useRef } from "react";
import userLogo from "../assets/user.png";
import { useSelector } from "react-redux";
import store from "../redux/store";

const Profile = () => {
  const { user } = useSelector((store) => store.auth);
  const [image, setImage] = useState("");
  const fileInputRef = useRef();
  const handleClick = () => {
    fileInputRef.current.click();
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    setImage(url);
    localStorage.setItem("profileImage", url);
  };
  
 useEffect(() =>{
   const userData = localStorage.getItem("profileImage");
   if(userData){
     setImage(userData);
    }
 }, [])
  return (
    <div className="profile-main-container px-lg-0">
      <div className="profile-container">
        <div className="profile">
          <div className="profile-image">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageChange}
              style={{ display: "none" }}
              accept="image/*"
            />
            <img
              src={image || userLogo}
              alt="userPhoto"
              className="profile-logo"
              onClick={handleClick}
              style={{
                cursor: "pointer",
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "2px solid #ccc",
              }}
            />
          </div>
          <div className="user-info">
            <h1 className="user-name">Welcome, {user?.name}</h1>
            <p className="user-email">
              <span style={{ fontWeight: "bold" }}>Email :</span> {user?.email}
            </p>
            <p className="user-role">
              <span style={{ fontWeight: "bold" }}>Role :</span> {user?.role}
            </p>
            <p className="user-bio">
              <span style={{ fontWeight: "bold" }}>Bio :</span> {user?.bio}
            </p>
            <button className="btn btn-primary">Edit profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
