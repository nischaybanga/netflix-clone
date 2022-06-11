import React from "react";
import "./Nav.css";
import avtaar from "./images/Netflix-avatar.png";
import {useState,useEffect} from "react";
function Nav() {
    const [navbarBlack, setNavbarBlack] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY>100){
      setNavbarBlack(true);
      }
      else{
        setNavbarBlack(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${navbarBlack&&'navBlack'}`}>
      <img
        className="navLogo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />
      <img className="navAvatar" src={avtaar} alt="Avatar"/>
    </div>
  );
}

export default Nav;
