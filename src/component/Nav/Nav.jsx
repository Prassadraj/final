import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../images/logo.png";
import "./nav.css";

function Nav() {
  const location = useLocation();
  const [selected, setSelected] = useState("");
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

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

    const handleScroll = () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollTop > lastScrollTop) {
        setIsHidden(true); // scrolling down
      } else {
        setIsHidden(false); // scrolling up
      }

      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop, location.pathname]);

  return (
    <div
      className={`items-center mb-2 md:flex ${isHidden ? "hidden" : ""}`}
      style={{ marginTop: "25px", gap: "110px", marginLeft: "70px" }}
    >
      <div className="left">
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
