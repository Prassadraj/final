import "./footer.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Footer() {
  const col2Ref = useRef(null);
  const col3Ref = useRef(null);
  const col4Ref = useRef(null);

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);
  //   gsap.from(".logo", {
  //     scale: 0,
  //     duration: 0.5,
  //     skewX: 65,
  //     delay: 0.5,
  //     stagger: {
  //       amount: 1,
  //     },
  //     scrollTrigger: ".logo",
  //   });
  //   gsap.from(".contentt", {
  //     scale: 0,
  //     duration: 0.5,
  //     skewX: 65,
  //     delay: 0.5,
  //     stagger: {
  //       amount: 1,
  //     },
  //     scrollTrigger: ".contentt",
  //   });

  //   const animateColumns = (ref) => {
  //     gsap.from(ref.current.children, {
  //       opacity: 0,
  //       x: 50,
  //       duration: 0.5,
  //       delay: 0.5,
  //       stagger: {
  //         amount: 1,
  //       },
  //       scrollTrigger: {
  //         trigger: ref.current,
  //         start: "top 80%", // Adjust the start position based on your layout
  //       },
  //     });
  //   };

  //   animateColumns(col2Ref);
  //   animateColumns(col3Ref);
  //   animateColumns(col4Ref);
  // }, []);

  return (
    <div className="h-[75vh] bg-light-green">
      <div className="flex justify-around pr-14">
        {/* col 1 */}
        <div className="flex items-center flex-col gap-3 mt-28 col1">
          <div className="glassy-effect-container">
            <img
              src={logo}
              alt="Logo"
              className="glassy-effect logo"
              width="200px"
            />
          </div>
          <p className="text-md max-w-xs text-center font-poppins font-semibold contentt">
            Experience personalized medical care from the comfort of your home.
          </p>
        </div>
        {/* col 2 */}
        <div
          className="flex flex-col items-start mt-16 font-poppins gap-2 col2"
          ref={col2Ref}
        >
          <h1 className="text-xl text-custom-green font-poppins">
            Quick Links
          </h1>
          <Link to="/" className="text-lg hover:underline hover:text-black">
            <p>About</p>
          </Link>
          <Link to="/" className="text-lg hover:underline hover:text-black">
            <p>Contact</p>
          </Link>
          <Link to="/" className="text-lg hover:underline hover:text-black">
            <p>Career</p>
          </Link>
          <Link to="/" className="text-lg hover:underline hover:text-black">
            <p>CSR Policy</p>
          </Link>
          <Link to="/" className="text-lg hover:underline hover:text-black">
            <p>Our Brand</p>
          </Link>
        </div>
        {/* col 3 */}
        <div
          className="flex flex-col items-start mt-16 font-poppins gap-2 col3"
          ref={col3Ref}
        >
          <h1 className="text-xl text-custom-green font-poppins">Products</h1>
          <Link to="/" className="text-lg hover:underline hover:text-black">
            <p>Biochemistry</p>
          </Link>
          <Link to="/" className="text-lg hover:underline hover:text-black">
            <p>Hematology</p>
          </Link>
          <Link to="/" className="text-lg hover:underline hover:text-black">
            <p>POC</p>
          </Link>
          <Link to="/" className="text-lg hover:underline hover:text-black">
            <p>Electrolyte</p>
          </Link>
          <Link to="/" className="text-lg hover:underline hover:text-black">
            <p>Clinical Microbiology</p>
          </Link>
          <Link to="/" className="text-lg hover:underline hover:text-black">
            <p>Pre Analytical Automation</p>
          </Link>
          <Link to="/" className="text-lg hover:underline hover:text-black">
            <p>COVID-19</p>
          </Link>
        </div>
        {/* col 4 */}
        <div
          className="flex flex-col items-start mt-16 font-poppins gap-2 col4"
          ref={col4Ref}
        >
          <h1 className="text-xl text-custom-green font-poppins">Others</h1>
          <Link to="/" className="text-lg hover:underline hover:text-black">
            <p>Help and Support</p>
          </Link>
          <Link to="/" className="text-lg hover:underline hover:text-black">
            <p>Resources</p>
          </Link>
          <Link to="/" className="text-lg hover:underline hover:text-black">
            <p>Residential Address</p>
          </Link>
          <Link to="/" className="text-lg hover:underline hover:text-black">
            <p>Cookie Preferences</p>
          </Link>
          <Link to="/" className="text-lg hover:underline hover:text-black">
            <p>Corporate Address</p>
          </Link>
        </div>
      </div>

      <div className="h-[1px] w-[90%] flex justify-center items-center text-center bg-custom-green mx-auto mt-4"></div>
      <div className="flex justify-between mt-4 pl-16 pr-16">
        <div className="text-3xl text-custom-green flex gap-3">
          <Link className="hover:text-sky-600">
            <FontAwesomeIcon icon={faFacebook} />
          </Link>
          <Link>
            <FontAwesomeIcon
              className="hover:text-red-500"
              icon={faInstagram}
            />
          </Link>
          <Link>
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
          <Link>
            <FontAwesomeIcon className="hover:text-red-500" icon={faYoutube} />
          </Link>
        </div>
        <div className=" text-lg font-poppins font-semibold">
          <p>Everlife CPC 2024 © All Rights Reserved</p>
        </div>
      </div>
      <p className="text-[6px] relative bottom-0 flex justify-center items-center text-name ">
        Prassad Raj
      </p>
    </div>
  );
}

export default Footer;
