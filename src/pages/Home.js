import React from "react";
import "../styles/Home.css";
import AppsIcon from "@mui/icons-material/Apps";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import Search from "../components/Search";

const Home = () => {
  return (
    <div className="home">
      <div className="home-header">
        <Link to="/gmail">Gmail</Link>
        <Link to="/images">Images</Link>
        <AppsIcon />
        <Avatar />
      </div>
      <div className="home-body">
        <img
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt="logo"
        />
        <div className="home-input-container">
          <Search />
        </div>
      </div>
    </div>
  );
};
export default Home;
