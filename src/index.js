import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { MiniApp } from "@mngaminh/mini-app-sdk-test";

const Root = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleLoginFailure = () => {
    console.error("Login failed");
    alert("Login failed. Please try again.");
  };

  return (
    <div>
      {!isLoggedIn ? (
        <MiniApp
          appid="your-app-id"
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
        </MiniApp>
      ) : (
        <App />
      )}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);
