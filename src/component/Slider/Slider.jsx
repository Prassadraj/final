import React, { useEffect } from "react";
import "./slider.css";

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
            }, 3000); // Change image every 3 seconds
          };

        return { init: init };
      })();

      Page.init();
    });
  }, []);

  return (
    <div className="">
      <div className="container">
        <div className="wrapper">
          <ul id="sb-slider" className="sb-slider">
            <li>
              <a
                //   href="http://www.flickr.com/photos/strupler/2969141180"
                target="_blank"
              >
                <img
                  src="https://tympanus.net/Development/Slicebox/images/1.jpg"
                  alt="image1"
                />
              </a>
              <div className="sb-description">
                <h3>Creative Lifesaver</h3>
              </div>
            </li>
            <li>
              <a
                //   href="http://www.flickr.com/photos/strupler/2968268187"
                target="_blank"
              >
                <img
                  src="https://tympanus.net/Development/Slicebox/images/2.jpg"
                  alt="image2"
                />
              </a>
              <div className="sb-description">
                <h3>Honest Entertainer</h3>
              </div>
            </li>
            <li>
              <a
                //   href="http://www.flickr.com/photos/strupler/2968114825"
                target="_blank"
              >
                <img
                  src="https://tympanus.net/Development/Slicebox/images/3.jpg"
                  alt="image1"
                />
              </a>
              <div className="sb-description">
                <h3>Brave Astronaut</h3>
              </div>
            </li>
            <li>
              <a
                //   href="http://www.flickr.com/photos/strupler/2968122059"
                target="_blank"
              >
                <img
                  src="https://tympanus.net/Development/Slicebox/images/4.jpg"
                  alt="image1"
                />
              </a>
              <div className="sb-description">
                <h3>Affectionate Decision Maker</h3>
              </div>
            </li>
            <li>
              <a
                //   href="http://www.flickr.com/photos/strupler/2969119944"
                target="_blank"
              >
                <img
                  src="https://tympanus.net/Development/Slicebox/images/5.jpg"
                  alt="image1"
                />
              </a>
              <div className="sb-description">
                <h3>Faithful Investor</h3>
              </div>
            </li>
            <li>
              <a
                //   href="http://www.flickr.com/photos/strupler/2968126177"
                target="_blank"
              >
                <img
                  src="https://tympanus.net/Development/Slicebox/images/6.jpg"
                  alt="image1"
                />
              </a>
              <div className="sb-description">
                <h3>Groundbreaking Artist</h3>
              </div>
            </li>
            <li>
              <a
                //   href="http://www.flickr.com/photos/strupler/2968945158"
                target="_blank"
              >
                <img
                  src="https://tympanus.net/Development/Slicebox/images/7.jpg"
                  alt="image1"
                />
              </a>
              <div className="sb-description">
                <h3>Selfless Philantropist</h3>
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
