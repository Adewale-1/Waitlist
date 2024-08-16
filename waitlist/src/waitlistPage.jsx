import React from "react";
import "./App.css";
import mockup from "./assets/mobile.png"; // Replace with the correct path
import logo from "./assets/icon.png"; // Make sure to import your logo
import linkedinIcon from "./assets/linkedin.png"; // Replace with your LinkedIn icon path
import instagramIcon from "./assets/instagram.png"; // Replace with your Instagram icon path

function WaitlistLandingPage() {
  const handleJoinWaitlistClick = () => {
    window.location.href = "https://tally.so/r/wLbg5O";
  };

  return (
    <div className="container">
      <header className="header">
        <img src={logo} alt="Luna Logo" className="logo" />
      </header>
      <main className="content">
        <div className="text-content">
          <h1>A better productivity app</h1>
          <p>
            Yinsight is designed to help people learn and is built on 2 core principles:
          </p>
          <ul>
            <li>Completely manual (for your own good)</li>
            <li>
              An incredible user experience (so that you don't mind it being so
              manual)
            </li>
          </ul>
          <button className="waitlist-button" onClick={handleJoinWaitlistClick}>
            Join the Waitlist
          </button>
        </div>
        <div className="mockup">
          <img src={mockup} alt="App Mockup" />
        </div>
      </main>
      <footer className="footer">
        <span>Connect on</span>
        <a href="https://www.linkedin.com/company/astreos-learning/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
        </a>
        <a href="https://www.instagram.com/learnwithyinsight/" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="Instagram" className="social-icon" />
        </a>
      </footer>
    </div>
  );
}

export default WaitlistLandingPage;
