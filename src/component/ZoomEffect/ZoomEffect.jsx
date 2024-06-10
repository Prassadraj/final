import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import styles from "./styles.module.scss";
import itrack from "../../images/itrack/itrack.png";
import Picture1 from "../../images/image4.jpg";
import Picture2 from "../../images/image4.jpg";
import Picture3 from "../../images/image4.jpg";
import Picture4 from "../../images/image4.jpg";
import Picture5 from "../../images/image4.jpg";
import Picture6 from "../../images/image4.jpg";
import Picture7 from "../../images/image4.jpg";

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
      src: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      scale: scale4,
      zIndex: 999,
    },
    {
      src: "https://images.unsplash.com/photo-1431631927486-6603c868ce5e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      scale: scale5,
    },
    {
      src: "https://images.unsplash.com/photo-1461301214746-1e109215d6d3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      scale: scale6,
    },
    {
      src: "https://images.unsplash.com/photo-1543964198-d54e4f0e44e3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      scale: scale5,
    },
    {
      src: "https://images.unsplash.com/reserve/O7A9fAvYSXC7NTdz8gLQ_IMGP1039.jpg?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      scale: scale6,
    },
    {
      src: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      scale: scale8,
    },
    {
      src: "https://images.unsplash.com/photo-1431631927486-6603c868ce5e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      scale: scale9,
    },
  ];

  return (
    <div className=" flex flex-col gap-5">
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
