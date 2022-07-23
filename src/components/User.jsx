import React from "react";
import logo from "../imgs/logo.jpg";

function User() {
  return (
    <div className="User">
      <div className="logo">
        <img src={logo} alt="logo" srcSet="" />
      </div>
      <div className="info">
        <p>Jotaro</p>
        <a href="#">Logout</a>
      </div>
    </div>
  );
}

export default User;
