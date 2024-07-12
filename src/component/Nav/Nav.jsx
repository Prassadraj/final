import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../images/logo.png";
import "./nav.css";
function Nav() {
  const location = useLocation();
  const [selected, setSelected] = useState("");
  console.log(selected);
  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setSelected("home");
        break;
      case "/about":
        setSelected("about");
        break;
      case "/brand":
        setSelected("brand");
        break;
      case "/product":
        setSelected("product");
        break;
      case "/career":
        setSelected("career");
        break;
      case "/success":
        setSelected("success");
        break;
      case "/blog":
        setSelected("blog");
        break;
      case "/contact":
        setSelected("contact");
        break;
      default:
        setSelected("");
        break;
    }
    // loading section

    // // Show loading indicator for 0.5 seconds whenever location changes
    // setIsLoading(true);
    // const loadingTimeout = setTimeout(() => {
    //   setIsLoading(false);
    // }, 300);

    // return () => {
    //   clearTimeout(loadingTimeout);
    // };
  }, [location.pathname]);
  return (
    <div
      className=" items-center mb-2 hidden md:flex"
      style={{ marginTop: "25px", gap: "110px", marginLeft: "70px" }}
    >
      <div className="left">
        <Link to="/">
          <img width="140px" height="70px" src={logo} alt="" />
        </Link>
      </div>
      <div
        className=" flex"
        style={{
          gap: "51px",
          fontFamily: "Poppins, sans-serif",
          fontWeight: "500",
          fontSize: "15px",
        }}
      >
        <div className="nav-item">
          <Link
            className={`cursor-pointer  ${
              selected === "home" ? "selected" : ""
            }`}
            to="/"
          >
            Home
          </Link>
        </div>
        <div className="nav-item">
          <Link
            className={`cursor-pointer  ${
              selected === "about" ? "selected" : ""
            }`}
            to="/about"
          >
            About
          </Link>
        </div>
        <div className="nav-item">
          <Link
            className={`cursor-pointer  ${
              selected === "brand" ? "selected" : ""
            }`}
            to="/brand"
          >
            Our Brands
          </Link>
        </div>
        <div className="nav-item">
          <Link
            className={`cursor-pointer  ${
              selected === "product" ? "selected" : ""
            }`}
            to="/product"
          >
            Products
          </Link>
        </div>
        <div className="nav-item">
          <Link
            className={`cursor-pointer  ${
              selected === "career" ? "selected" : ""
            }`}
            to="/career"
          >
            Career
          </Link>
        </div>
        <div className="nav-item">
          <Link
            className={`cursor-pointer  ${
              selected === "success" ? "selected" : ""
            }`}
            to="/success"
          >
            Our Success
          </Link>
        </div>
        <div className="nav-item">
          <Link
            className={`cursor-pointer  ${
              selected === "blog" ? "selected" : ""
            }`}
            to="/blog"
          >
            Blog
          </Link>
        </div>
        <div className="nav-item">
          <Link
            className={`cursor-pointer  ${
              selected === "contact" ? "selected" : ""
            }`}
            to="/contact"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
