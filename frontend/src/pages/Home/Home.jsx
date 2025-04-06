import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import Search from "../../components/Search/Search";
const Home = () => {
  return (
    <div className="home-container">
      <div className="description">
        <div className="features">
          <h1 className="h-title">First off all, My features</h1>
          <ul className="ul">
            <li className="li">
              You can download songs and listen to it later
            </li>
            <li className="li">Very friendly user interface - UI</li>
            <li className="li">High preformance experience</li>
          </ul>
        </div>
        <div className="signup">
          <Link className="link-signup" to="/authantication">
            Sign Up
          </Link>
          <p className="r" style={{color:"whitesmoke",textAlign:"right"}}>To get <span className="uniqe">download</span> feature you should sign up</p>
        </div> 
      </div>
      <Search/>
    </div>
  );
};

export default Home;
