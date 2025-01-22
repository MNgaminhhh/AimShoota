import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Mdk from "@interlinklabs/mdk";

const Root = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleLoginFailure = () => {
    console.error("Login failed");
  };

  return (
    <div>
      {!isLoggedIn ? (
        <Mdk
          appid="id__de19s0g6gqc7o7e5pbdh"
          onSuccess={handleLoginSuccess}
          onFailure={handleLoginFailure}
        >
          {({ open }) => (
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <button
                onClick={open}
                style={{ padding: "10px 20px", fontSize: "16px" }}
              >
                Login to Continue
              </button>
            </div>
          )}
        </Mdk>
      ) : (
        <App />
      )}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);
