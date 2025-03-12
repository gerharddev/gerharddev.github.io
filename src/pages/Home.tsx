import React from "react";
import "./Page.css"; // Shared styles for all pages

const Home: React.FC = () => {
  return (
    <div className="page-container">
      <h1>Welcome to Home</h1>
      <p>This is the Home Page.</p>
    </div>
  );
};

export default Home;
