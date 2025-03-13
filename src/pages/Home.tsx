import React from "react";
import "./Page.css";
import imageSrc from "../assets/ModernBio.png"; // Adjust the path to your image

const Home: React.FC = () => {
  return (
    <div className="page-container">
      <img src={imageSrc} alt="Description of the image" className="home-image" />
    </div>
  );
};

export default Home;
