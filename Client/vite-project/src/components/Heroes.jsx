import React from "react";
import HeroesImg from '../assets/HeroesImg.png';
import { User } from "lucide-react";
const Heroes = () => {
  return (
    <>
      <div className="heroes-container">
        <div className="hero-container">
          <h1 style={{fontWeight: "bold"}}>Explore our <span style={{color: "blue"}}>10000+</span><br/> Online courses for all</h1>
          <p>Learn DSA, Web Development, Python & AI – All in One Place</p>
          <div className="d-flex search-bar" role="search">
          <input type="search" className="form-control rounded-start-pill" placeholder="Search your course here..." aria-label="Search"/>
          <button class="btn btn-primary rounded-end-pill" type="submit">Search</button>
          </div>
        </div>
        <div className="image-section">
          <img src={HeroesImg} className="image-hero"/>
        </div>
      </div>
    </>
  );
};

export default Heroes;
