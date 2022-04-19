import React from "react";
import "../styles/Home.css";
import MicIcon from "@mui/icons-material/Mic";
import SearchIcon from "@mui/icons-material/Search";
import AppsIcon from "@mui/icons-material/Apps";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";

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
      </div>
    </div>
  );
};
export default Home;
