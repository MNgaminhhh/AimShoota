import React from "react";
import logo from "../../assets/logo.png";
import { Mdk } from "@interlinklabs/mdk";

function Home({ regAim, preAim }) {
  const loginId = Mdk.getLoginId();
  const handleLogout = () => {
    Mdk.logOut();
    window.location.reload();
  };

  return (
    <div className="container">
      <div className="home-container">
        <img src={logo} alt="Logo" className="logo" />

        <div className="login-info">
          <h1>Welcome, {loginId || "Guest"}</h1>
        </div>

        <div className="buttons-container">
          <button className="start-button" onClick={regAim}>
            Regular Aim
            <div className="start-button-helper-text">(Click LMB to shoot)</div>
          </button>
          <button className="start-button" onClick={preAim}>
            Pre Aim
            <div className="start-button-helper-text">
              (Hold RMB to aim and LMB to shoot)
            </div>
          </button>
        </div>

        <div className="logout-container">
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
