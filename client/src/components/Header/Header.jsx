import React from "react";
// import { Link } from 'react-router-dom';
import "./header.css";

function Header() {
  return (
    <section className="header">
      <h1>Ready to tackle your day?</h1>
      {/* <div className="signing-buttons">
            {user ? (
              <button className="sign-out-btn" onClick={handleSignOut}>
                Sign Out
              </button>
            ) : (
              <>
                <Link to="/SignIn">Sign-In</Link>
                <Link to="/SignUp">Sign-Up</Link>
              </>
            )}
          </div> */}
    </section>
  );
}

export default Header;
