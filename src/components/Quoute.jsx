import  { useState } from "react";
import axios from "axios";
import userImage from "../user-image.jpg";
import "../App.css";
import Profile from "../pages/Profile";
import { NavLink } from "react-router-dom";

const Quoute = () => {
  const [quote,setQuote] = useState();
  const handleQuote = async () => {
    const res = await axios.get("https://api.quotable.io/random");
    setQuote(res.data.content);
  };

  return (
    <div className="container">
      <div className="box">
        <i className="fas fa-quote-left fa2"></i>
        <div className="text">
          <i className="fas fa-quote-right fa1"></i>
          <div>
            <h3>🌩️<span>Quote of the day</span>🌩️</h3>
            <p>{quote}</p>
            <button onClick={handleQuote}>Next</button>
          </div>
        </div>
      </div>
      <footer className="footer">
        Created with ❤️ by Snehasish
      </footer>
      {/* Floating circle icon */}
      <NavLink to="/about">

      <div className="floating-icon" >
        <img src={userImage} alt="User" className="user-image" />
      </div>
      </NavLink>


    </div>
  );
};

export default Quoute;