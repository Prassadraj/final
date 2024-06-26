import React, { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import debounce from "lodash.debounce";
import styles from "./styles.module.scss";
import itrack from "../../images/itrack/itrack.png";
import itrackImg1 from "../../images/itrack/itrack1.jpg";
import itrackImg2 from "../../images/itrack/itrack2.png";
import itrackImg3 from "../../images/itrack/itrack3.jpg";
import itrackImg4 from "../../images/itrack/itrack4.jpg";
import itrackImg5 from "../../images/itrack/itrack5.png";
import AOS from "aos";
function ZoomEffect() {
  const container = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = debounce(() => {
    setScrollY(window.scrollY);
  }, 10); // Adjust the debounce delay as needed

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    AOS.init();
  }, []);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const springConfig = { damping: 20, stiffness: 100 };
  const smoothScrollYProgress = useSpring(scrollYProgress, springConfig);

  const scale4 = useTransform(smoothScrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(smoothScrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(smoothScrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(smoothScrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(smoothScrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    { src: itrackImg1, scale: scale4, zIndex: 1 },
    { src: itrackImg2, scale: scale5 },
    { src: itrackImg3, scale: scale6 },
    { src: itrackImg4, scale: scale5 },
    { src: itrackImg5, scale: scale6 },
    { src: itrackImg5, scale: scale8 },
  ];

  return (
    <div
      className="flex flex-col gap-5"
      style={{
        width: "100%",
        height: "100%",
        // backgroundImage:
        //   "url('https://images.pexels.com/photos/18069490/pexels-photo-18069490/free-photo-of-a-white-and-green-machine-with-people-on-it.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex justify-center items-center flex-col gap-4 mt-5">
        <img
          data-aos="flip-down"
          style={{ objectFit: "cover" }}
          width="220px"
          src={itrack}
          alt=""
        />
        <p data-aos="zoom-in-up" className="text-2xl">
          CPC developed i-track, a proprietary system for remote instrument
          maintenance, in a groundbreaking initiative.
        </p>
        <p className="text-xl text-center " data-aos="zoom-in-up">
          For SupportDial: 1800 571 1101
        </p>
      </div>
      <div
        ref={container}
        id={styles.container}
        className="md:h-[200vh] w-100vh"
      >
        <div className={styles.sticky}>
          {pictures.map(({ src, scale, zIndex }, index) => (
            <motion.div
              key={index}
              style={{ scale, zIndex }}
              className={styles.el}
            >
              <div className={styles.imageContainer}>
                <img src={src} alt="image" placeholder="blur" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ZoomEffect;
