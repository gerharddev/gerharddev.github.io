import React from 'react';
import "./Page.css";

const About: React.FC = () => {
  return (
    <div className="about-container">
      <h1>Hi, I'm Gerhard!</h1>
      <h3>Tech Enthusiast & Problem Solver</h3>

      <p>
        I've been involved in the world of software for over 25 years, and I truly love what I do! I focus on building large-scale systems, crafting robust software architectures, and ensuring seamless cloud solutions.
        <br /><br />
        Currently, I'm a Lead Developer and Solutions Architect at SMS digital GmbH, where I get to play with cool tech and help drive innovation. It's all about finding smart solutions and making things work better.
      </p>

      <h3>What I'm Good At:</h3>

      <div className="expertise-list">
        ✅ <strong>Building Awesome Architectures</strong> – Using tools like C#, .NET, Python, React, and TypeScript to create scalable solutions.<br />  
        ✅ <strong>Cloud & DevOps Magic</strong> – Utilizing AWS, Azure DevOps, and GitHub for version control, CI/CD pipelines, and automation.<br />
        ✅ <strong>Guiding & Inspiring</strong> – Mentoring teams, sharing best practices, and pushing for innovation.
      </div>

      <p>
        I'm super passionate about tackling tough challenges and creating solutions that make a real difference.
      </p>
    </div>
  );
};

export default About;