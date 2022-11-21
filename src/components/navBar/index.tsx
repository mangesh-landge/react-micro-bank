import React, { useState, useEffect, useContext, ReactElement } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Avatar from "react-avatar";
import { BellIcon, SelectArrow } from "../../icons/Icons";
import "./index.css";
import MicroBankNavLogo from "../../assets/file/Micro_bank.svg";
import NotificationNavLogo from "../../assets/file/Notification.svg";

export default function Navbar() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("Mangesh Landge");
  const [email, setEmail] = useState("mangesh.landge@perennialsys.com");
  const [profile, setProfile] = useState(false);

  const { isAuth } = useSelector((state: any) => state?.login);
  // const isAuth = true;

  useEffect(() => {
    if (isAuth) {
      // setUserName(user.displayName);
      // setEmail(user.email);
    }
  }, []);

  const handleProfile = () => {
    setProfile(!profile);
  };

  const handleNavigateToHome = () => {
    navigate("/");
  };

  return (
    <div className="sub-cont">
      <div className="nav">
        <div onClick={() => handleNavigateToHome()} className="nav-logo">
          <div className="micro">Micro</div>
          <div className="bank">Bank</div>
        </div>
        <div className="separator"></div>
        <div className="comp-name">ABC Pvt. Ltd.</div>
      </div>
      <div className="profile">
        <div className="bell-icon">
          <BellIcon />
        </div>
        <div className="avatar">
          <Avatar
            fgColor="#ffffff"
            name={userName}
            round={true}
            size="40"
            textSizeRatio={2}
          />
        </div>
        <div className="dropdown">
          <button className="drop-btn" onClick={handleProfile}>
            <SelectArrow />
          </button>
          {profile ? (
            <div className="dropdown-content">
              <div className="avatar-big">
                <Avatar
                  name={userName}
                  round={true}
                  size="80"
                  textSizeRatio={2}
                  color="#D90429"
                />
              </div>
              <div className="username">{userName}</div>
              <div className="email">{email}</div>
              <hr />

              <div className="items">
                <Link to="/edit-profile">Edit Profile </Link>
              </div>
              <hr />
              <div className="items">
                <Link to="/settings">Settings </Link>
              </div>
              <hr />
              <div className="items">
                <Link to="/">Logout </Link>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
