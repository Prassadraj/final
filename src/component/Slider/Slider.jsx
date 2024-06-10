import React, { useEffect } from "react";
import "./slider.css";
import logo from "../../images/logo.png";
import image1 from "../../images/image1.jpg";

import image3 from "../../images/image3.jpg";
import image4 from "../../images/image4.jpg";
import image5 from "../../images/image5.jpg";
import image6 from "../../images/image6.jpg";

const Slider = () => {
  useEffect(() => {
    $(function () {
      var Page = (function () {
        var $navArrows = $("#nav-arrows").hide(),
          $shadow = $("#shadow").hide(),
          slicebox = $("#sb-slider").slicebox({
            onReady: function () {
              $navArrows.show();
              $shadow.show();
              startAutoChange();
            },
            orientation: "r",
            cuboidsRandom: true,
            disperseFactor: 30,
          }),
          init = function () {
            initEvents();
          },
          initEvents = function () {
            // add navigation events
            $navArrows.children(":first").on("click", function () {
              slicebox.next();
              return false;
            });

            $navArrows.children(":last").on("click", function () {
              slicebox.previous();
              return false;
            });
          },
          startAutoChange = function () {
            setInterval(function () {
              slicebox.next();
            }, 5000); // Change image every 3 seconds
          };

        return { init: init };
      })();

      Page.init();
    });
  }, []);

  return (
    <div className="">
      <div className="container border-none">
        <div className="wrapper border-none">
          <ul id="sb-slider" className="sb-slider ">
            <li>
              <a
                //   href="http://www.flickr.com/photos/strupler/2969141180"
                target="_blank"
              >
                <img src={image1} alt="image1" />
              </a>
              <div className="sb-description">
                <h3 className="text-gray-500 text-2xl">Nephelometer</h3>
              </div>
            </li>
            <li>
              <a
                //   href="http://www.flickr.com/photos/strupler/2968268187"
                target="_blank"
              >
                <img src={image6} alt="image2" />
              </a>
              <div className="sb-description">
                <h3 className="text-gray-500 text-2xl">Honest Entertainer</h3>
              </div>
            </li>
            <li>
              <a
                //   href="http://www.flickr.com/photos/strupler/2968114825"
                target="_blank"
              >
                <img src={image4} alt="image1" />
              </a>
              <div className="sb-description">
                <h3 className="text-gray-500 text-2xl">Ex-D-Ds_04</h3>
              </div>
            </li>
            <li>
              <a
                //   href="http://www.flickr.com/photos/strupler/2968122059"
                target="_blank"
              >
                <img src={image4} alt="image1" />
              </a>
              <div className="sb-description">
                <h3 className="text-gray-500 text-2xl">AST Plates</h3>
              </div>
            </li>
            <li>
              <a
                //   href="http://www.flickr.com/photos/strupler/2969119944"
                target="_blank"
              >
                <img src={image5} alt="image1" />
              </a>
              <div className="sb-description">
                <h3 className="text-gray-500 text-2xl">AIM-Automated</h3>
              </div>
            </li>
            <li>
              <a
                //   href="http://www.flickr.com/photos/strupler/2968126177"
                target="_blank"
              >
                <img src={image6} alt="image1" />
              </a>
              <div className="sb-description">
                <h3 className="text-gray-500 text-2xl">Manual-Viewbox</h3>
              </div>
            </li>
            <li>
              <a
                //   href="http://www.flickr.com/photos/strupler/2968945158"
                target="_blank"
              >
                <img src={image1} alt="image1" />
              </a>
              <div className="sb-description">
                <h3 className="text-gray-500 text-2xl">
                  Selfless Philantropist
                </h3>
              </div>
            </li>
          </ul>

          <div id="shadow" className="shadow"></div>

          <div id="nav-arrows" className="nav-arrows">
            {/* <a>Next</a>
            <a>Previous</a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
