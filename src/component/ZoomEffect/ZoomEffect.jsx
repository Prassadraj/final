import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import styles from "./styles.module.scss";
import itrack from "../../images/itrack/itrack.png";
import itrackImg1 from "../../images/itrack/itrack1.jpg";
import itrackImg2 from "../../images/itrack/itrack2.png";
import itrackImg3 from "../../images/itrack/itrack3.jpg";
import itrackImg4 from "../../images/itrack/itrack4.jpg";
import itrackImg5 from "../../images/itrack/itrack5.png";

function ZoomEffect() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 7]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 8]);

  const pictures = [
    {
      src: itrackImg1,
      scale: scale4,
      zIndex: 999,
    },
    {
      src: itrackImg2,
      scale: scale5,
    },
    {
      src: itrackImg3,
      scale: scale6,
    },
    {
      src: itrackImg4,
      scale: scale8,
    },
    {
      src: itrackImg2,
      scale: scale9,
    },
    {
      src: itrackImg2,
      scale: scale8,
    },
    // {
    //   src: itrackImg5,
    //   scale: scale9,
    // },
  ];

  return (
    <div
      className=" flex flex-col gap-5 p-5"
      style={{
        width: "100%",
        // Adjust the height as needed
        height: "100%",
        backgroundImage:
          "url('https://images.pexels.com/photos/18069490/pexels-photo-18069490/free-photo-of-a-white-and-green-machine-with-people-on-it.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex justify-center items-center flex-col gap-4">
        <img style={{ objectFit: "cover" }} width="220px" src={itrack} alt="" />
        <p className="text-2xl">
          In yet another pioneering venture, CPC created i-track, our home-grown
          design for remote maintenance of instruments.
        </p>
      </div>
      <div ref={container} className={styles.container}>
        <div className={styles.sticky}>
          {pictures.map(({ src, scale, zIndex }, index) => {
            return (
              <motion.div
                key={index}
                style={{ scale, zIndex }}
                className={styles.el}
              >
                <div className={styles.imageContainer}>
                  <img src={src} fill alt="image" placeholder="blur" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ZoomEffect;
