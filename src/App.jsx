import { useState } from "react";
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
function App() {
  const location = useLocation();
  return (
    <>
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
