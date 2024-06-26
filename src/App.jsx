import { useEffect, useState } from "react";
import Nav from "./component/Nav/Nav";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./component/Home/Home";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import Brand from "./component/Brand/Brand";
import Product from "./component/Product/Product";
import Career from "./component/Career/Career";
import Success from "./component/OurSuccess/Success";
import Blog from "./component/Blog/Blog";
import gsap from "gsap";
function App() {
  const location = useLocation();
  useEffect(() => {
    gsap.set(".flair", { xPercent: -50, yPercent: -50 });

    let xTo = gsap.quickTo(".flair", "x", { duration: 0.8, ease: "power3" }),
      yTo = gsap.quickTo(".flair", "y", { duration: 0.8, ease: "power3" });

    window.addEventListener("mousemove", (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    });
  }, []);
  return (
    <>
      <div className="hidden sm:block w-4 h-4 fixed top-0 left-0 pointer-events-none flair bg-custom-green border-custom-green border-2 rounded-full z-20 ">
        <img src="" alt="" />
      </div>
      <Nav />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/brand" element={<Brand />} />
          <Route path="/product" element={<Product />} />
          <Route path="/career" element={<Career />} />
          <Route path="/success" element={<Success />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
