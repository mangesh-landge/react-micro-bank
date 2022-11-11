import React, { useState, useEffect, useContext, ReactElement } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Avatar from "react-avatar";
import { BellIcon, SelectArrow } from "../../icons/Icons";
import "./index.css";

export default function Navbar() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [profile, setProfile] = useState(false);

  // const { isAuth } = useSelector((state: any) => state?.login);
  const isAuth = true;

  useEffect(() => {
    if (isAuth) {
      // setUserName(user.displayName);
      // setEmail(user.email);
    }
  }, []);

  const handleProfile = () => {
    setProfile(!profile);
  };

  return (
    <div className="sub-cont">
      {/* <div className="nav">
        <div className="micro">Micro</div>
        <div className="bank">Bank</div>
        <div className="separator"></div>
        <div className="comp-name">ABC Pvt. Ltd.</div>
      </div>
      <div className="profile">
        <div className="bell-icon">
          <BellIcon />
        </div>
        <div className="avatar">
          <Avatar name={userName} round={true} size="40" textSizeRatio={2} />
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
                <Link to="/dashboard/edit-profile">Edit Profile </Link>
              </div>
              <hr />
              <div className="items">
                <Link to="/dashboard/settings">Settings </Link>
              </div>
              <hr />
              <div className="items">
                <Link to="/">Logout </Link>
              </div>
            </div>
          ) : null}
        </div>
        <div></div>
      </div> */}
    </div>
  );
}
