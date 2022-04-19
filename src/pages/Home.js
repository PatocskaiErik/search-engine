import React from "react";
import "../styles/Home.css";
import MicIcon from "@mui/icons-material/Mic";
import SearchIcon from "@mui/icons-material/Search";
import AppsIcon from "@mui/icons-material/Apps";

const Home = () => {
  return (
    <div className="home">
      <h1>Homepage</h1>
      <div className="home-header">Gmail, Images</div>
      <div className="home-body">Google</div>
    </div>
  );
};
export default Home;
