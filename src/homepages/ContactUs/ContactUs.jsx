import React from "react";

function ContactUs() {
  return (
    <div className="p-20 h-[100vh]">
      <div className="h-[80vh]  bg-light-green rounded-xl">
        <div className="h-[80vh] bg-light-green rounded-xl relative">
          <div className="flex flex-col">
            <div className="mt-32 ml-24">
              <h1 className="relative font-poppins font-bold text-start text-custom-green text-3xl z-10">
                Lets Get in Touch
              </h1>
            </div>
            <div className="mt-2 ml-24 max-w-md z-10">
              <p className="text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum eum saepe nulla, laborum consequatur,
              </p>
            </div>
            <div className="absolute bg-[#C1FFF3] w-52 h-52 rounded-full top-10 left-10"></div>
          </div>
        </div>

        {/* right */}
      </div>
    </div>
  );
}

export default ContactUs;
