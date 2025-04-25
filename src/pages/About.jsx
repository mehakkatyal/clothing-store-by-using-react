import "./about.css"
import React from "react";
import Nav from "../components/nav"; // or "./nav" depending on your file name

const About = () => {
  return (
    <>
     <Nav />
    
      <div className="ab">
        <div className="heading">
        
          <h1>About Us</h1>
        </div>
        <div className="box">
          <div className="paragraph">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quas magnam qui omnis maiores quidem minus nulla, earum sequi cum, ipsa, quos eius! Incidunt inventore reiciendis provident minima veniam ad!
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit dolorum reprehenderit, accusantium voluptatum facilis cumque impedit, ab voluptas facere cum dolor, corporis nam. Est dignissimos explicabo, similique fugit velit perferendis!
            </p>
            <h3>By: Mehak</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
