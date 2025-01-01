import React from "react";
import { Link } from "react-router-dom";
import "../styles/SelectAuthPage.css";

const SelectAuthPage = () => {
  return (
    <div className="select-auth-container">
      <h1>Welcome to QuestLance/Seller</h1>
      <div className="auth-options">
        <Link to="/seller-login">
          <button className="btn-auth">Log In</button>
        </Link>
        <Link to="/seller-reg">
          <button className="btn-auth">Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default SelectAuthPage;
