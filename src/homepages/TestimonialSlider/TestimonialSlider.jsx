import React, { useEffect, useRef } from "react";

import "./TestimonialSlider.css";

const TestimonialSlider = () => {
  return (
    <div className="container mt-5 py-5">
      <div className="row">
        <h2 className="text-center" style={{ color: "#01ab86" }}>
          Testimonials
        </h2>
        <div className="col-lg-2"></div>
        <div className="col-lg-8 text-center mt-4">
          <h4>
            Our experience with CPC Diagnostics has been exceptional. Their
            products are reliable, and their support is outstanding.
          </h4>
        </div>
        <div className="col-lg-2"></div>
        <div className="col-md-12 mt-5">
          <div id="testimonial-slider" className="owl-carousel">
            <div className="testimonial">
              <div className="pic">
                <img
                  src="https://images.pexels.com/photos/704955/pexels-photo-704955.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"
                  alt="Jessica"
                />
              </div>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                malesuada vulputate nisi in fermentum. Vivamus ac libero quis
                nisi auctor pulvinar. Aenean sit amet lectus posuere, mattis
                massa eget, ullamcorper diam. Nunc sit amet felis eget arcu
                congue dictum.
              </p>
              <h3 className="title">Jessica</h3>
              <small className="post">- Architect</small>
            </div>

            <div className="testimonial">
              <div className="pic">
                <img
                  src="https://images.pexels.com/photos/638700/pexels-photo-638700.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"
                  alt="Pearl"
                />
              </div>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                malesuada vulputate nisi in fermentum. Vivamus ac libero quis
                nisi auctor pulvinar. Aenean sit amet lectus posuere, mattis
                massa eget, ullamcorper diam. Nunc sit amet felis eget arcu
                congue dictum.
              </p>
              <h3 className="title">Pearl</h3>
              <small className="post">- Engineer</small>
            </div>

            <div className="testimonial">
              <div className="pic">
                <img
                  src="https://images.pexels.com/photos/531139/pexels-photo-531139.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"
                  alt="Kellie"
                />
              </div>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                malesuada vulputate nisi in fermentum. Vivamus ac libero quis
                nisi auctor pulvinar. Aenean sit amet lectus posuere, mattis
                massa eget, ullamcorper diam. Nunc sit amet felis eget arcu
                congue dictum.
              </p>
              <h3 className="title">Kellie</h3>
              <small className="post">- Graphic Designer</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
