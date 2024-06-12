import React from "react";
import "./contactUs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import video from "../../Video/contact.mp4";

function ContactUs() {
  return (
    <div className="p-10 h-[100vh] bg-white">
      <div className="h-[85vh] bg-light-green rounded-xl relative flex ">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 w-full h-full object-cover z-0 bg-black opacity-35"></div>
        <div className="flex flex-col z-10">
          <div className="mt-40 ml-24">
            <h1 className="relative font-poppins font-bold text-start text-white text-3xl z-10">
              Let's Get in Touch
            </h1>
          </div>
          <div className="mt-2 ml-24 max-w-md z-10">
            <p className="text-xl text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum eum
            </p>
          </div>
          {/* <div className="absolute bg-[#b9fcee] w-52 h-52 rounded-full top-16 left-10 animate-bumble"></div>
          <div className="absolute bg-[#b9fcee] w-16 h-16 rounded-full top-60 left-56 animate-smallbumble"></div> */}
        </div>
        {/* right */}
        <div className="flex flex-col gap-4 relative top-20  h-fit left-28 font-poppnis ">
          <div>
            <input
              type="text"
              className="w-[30vw] h-[7vh] outline-none text-xl p-3 rounded-lg text-white"
              placeholder="Name"
            />
          </div>
          <div>
            <input
              type="text"
              className="w-[30vw] h-[7vh] outline-none text-xl p-3 rounded-lg text-white "
              placeholder="Email Address"
            />
          </div>
          <div>
            <input
              type="text"
              className="w-[30vw] h-[7vh] outline-none text-xl p-3 rounded-lg text-white"
              placeholder="Phone Number"
            />
          </div>
          <div>
            <textarea
              placeholder="Have anything to say"
              className="placeholder:text-white h-[20vh] w-[30vw] pt-2 text-xl box-border outline-none p-3 rounded-lg text-white"
            ></textarea>
          </div>
          <div className="flex items-center justify-center bg-custom-green rounded-lg ">
            <button className="text-white py-2 px-4 rounded text-xl">
              Send
            </button>
            <FontAwesomeIcon
              icon={faArrowRight}
              className="text-2xl text-light-green"
            />
            <span className="text-2xl relative top-2 right-7 animate-bouncing opacity-45 text-light-green">
              -
            </span>
            <span className="text-2xl relative top-0 right-12 animate-bouncing opacity-45 text-light-green">
              -
            </span>
            <span className="text-2xl relative bottom-2 right-14 animate-bouncing opacity-45 text-light-green">
              -
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
