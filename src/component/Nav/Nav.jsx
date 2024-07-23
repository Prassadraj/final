import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../images/logo.png";
import "./nav.css";
import { CategoryContext } from "../Context/CategoryContext";

function Nav() {
  const location = useLocation();
  const [selected, setSelected] = useState("");
  const [isHidden, setIsHidden] = useState(false);
  const { setSelectedCategory } = useContext(CategoryContext);

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
  }, [location.pathname]);

  return (
    <div
      className={`hidden md:flex sticky top-0 bg-white h-fit w-full z-50 items-center justify-between px-10 shadow-md`}
    >
      <div className="left py-2">
        <Link to="/">
          <img width="140px" height="70px" src={logo} alt="Logo" />
        </Link>
      </div>
      <div
        className="flex"
        style={{
          gap: "51px",
          fontFamily: "Poppins, sans-serif",
          fontWeight: "500",
          fontSize: "15px",
        }}
      >
        <div className="nav-item">
          <Link
            className={`cursor-pointer ${
              selected === "home" ? "selected" : ""
            }`}
            to="/"
          >
            Home
          </Link>
        </div>
        <div className="nav-item">
          <Link
            className={`cursor-pointer ${
              selected === "about" ? "selected" : ""
            }`}
            to="/about"
          >
            About
          </Link>
        </div>
        <div className="nav-item">
          <Link
            className={`cursor-pointer ${
              selected === "brand" ? "selected" : ""
            }`}
            to="/brand"
          >
            Our Brands
          </Link>
        </div>
        <div className="nav-item">
          <Link
            className={`cursor-pointer ${
              selected === "product" ? "selected" : ""
            }`}
            to="/product"
            onClick={() => setSelectedCategory("Biochemistry")}
          >
            Products
          </Link>
        </div>
        <div className="nav-item">
          <Link
            className={`cursor-pointer ${
              selected === "career" ? "selected" : ""
            }`}
            to="/career"
          >
            Career
          </Link>
        </div>
        <div className="nav-item">
          <Link
            className={`cursor-pointer ${
              selected === "success" ? "selected" : ""
            }`}
            to="/success"
          >
            Our Success
          </Link>
        </div>
        <div className="nav-item">
          <Link
            className={`cursor-pointer ${
              selected === "blog" ? "selected" : ""
            }`}
            to="/blog"
          >
            Blog
          </Link>
        </div>
        <div className="nav-item">
          <Link
            className={`cursor-pointer ${
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
