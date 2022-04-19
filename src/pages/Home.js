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
      <div className="home-body">Google</div>
    </div>
  );
};
export default Home;
