import React from "react";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Box } from "@mui/material";
import Heading from "./Heading";
import organisation1 from "../../images/organisation/1.png";
import organisation2 from "../../images/organisation/2.png";
import organisation3 from "../../images/organisation/3.png";

function Organization2() {
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set(".photo:not(:first-child)", { opacity: 0, scale: 0.5 });

      const animation = gsap.to(".photo:not(:first-child)", {
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 1,
      });

      ScrollTrigger.create({
        trigger: ".gallery",
        start: "top top",
        end: "bottom bottom",
        pin: ".rightblock",
        animation: animation,
        scrub: true,
        // markers: true,
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <React.Fragment>
      <Heading />
      <Box className="gallery gap-8" sx={{ display: "flex" }}>
        <Box
          className="left font-poppins"
          sx={{
            width: "50%",
            marginLeft: "auto",
            "& .details": {
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "40vw",
              marginLeft: "auto",
              color: "#000",
              fontSize: "2rem",
              fontWeight: 500,
            },
          }}
        >
          {/* <Box className="details"> </Box> */}
          <div className="details">
            {" "}
            <img src={organisation1} width="80px" alt="" />
            Jeev Diagnostics Pvt. Ltd. is a collaborative venture between
            Awareness Technology Inc. (USA) and CPC Diagnostics Pvt. Ltd.
            (India), focusing on cutting-edge in vitro clinical chemistry
            reagents.
          </div>
          <Box className="details">
            {" "}
            <img src={organisation2} width="80px" alt="" />
            Sachika, an initiative by CPC Diagnostics Pvt. Ltd., focuses on life
            sciences education, empowering clinicians with contemporary
            bioscience skills.
          </Box>
          <Box className="details">
            {" "}
            <img src={organisation3} width="80px" alt="" />
            Aggapo is a rapidly growing startup by CPC Diagnostics Pvt. Ltd.,
            catering to the diagnostic needs of the African market with a broad
            range of in vitro diagnostic solutions.
          </Box>
        </Box>
        <Box
          className="rightblock"
          sx={{
            width: "50%",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: "40vw",
              height: "40vw",
              position: "relative",
              "& .photo": {
                position: "absolute",
                width: "100%",
                height: "100%",
                "& img": {
                  height: { md: "100%" },

                  width: "100%",
                },
              },
            }}
          >
            <Box className="photo">
              <img
                src="http://static.showit.co/800/M0IzUCMvQCqlJn1YtNlikw/59514/pexels-yan-5793641-1.jpg"
                // src={organisation1}
                alt="img-1"
              />
            </Box>
            <Box className="photo">
              <img
                // src={organisation3}
                src="http://static.showit.co/800/137NFxuzSxeyjlons2WEzA/59514/pexels-yan-5793643.jpg"
                alt="img-2"
              />
            </Box>
            <Box className="photo">
              <img
                // src={organisation2}
                //  src="http://static.showit.co/800/M0IzUCMvQCqlJn1YtNlikw/59514/pexels-yan-5793641-1.jpg"
                src="http://static.showit.co/800/3kOLYaOCS1SMieN6Y88Fqg/59514/mukuko-studio-mu88mlefcou-unsplash.jpg"
                alt="img-3"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default Organization2;
