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
    console.error("Login failedd");
  };

  return (
    <div>
      {!isLoggedIn ? (
        <Mdk
          appid="id__hl0k5j8r1rp5mz35ggb0"
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
