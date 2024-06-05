import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Counter() {
  const countUpRefs = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    countUpRefs.current.forEach((el) => {
      const endNumber = parseInt(el.dataset.end); // Retrieve the end number from dataset
      gsap.fromTo(
        el,
        { innerText: 0 },
        {
          duration: 1,
          innerText: endNumber, // Animate to the end number
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          onUpdate: function () {
            el.innerHTML = Math.ceil(el.innerText);
          },
        }
      );

      el.addEventListener("mouseenter", () => {
        gsap.to(el, {
          innerText: 0, // Animate to 0 on hover
          duration: 0.4,
          ease: "power3.out",
          onComplete: () => {
            gsap.to(el, {
              innerText: endNumber, // Animate back to the end number
              duration: 0.4,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 80%",
                toggleActions: "play none none none",
              },
              onUpdate: function () {
                el.innerHTML = Math.ceil(el.innerText);
              },
            });
          },
          onUpdate: function () {
            el.innerHTML = Math.ceil(el.innerText);
          },
        });
      });
    });
  }, []);

  const stats = [
    { end: 3, label: "Country presence" },
    { end: 250, label: "Employees" },
    { end: 1000, label: "Customers" },
    { end: 16, label: "Principles" },
    { end: 300, label: "Channel partners" },
  ];

  return (
    <div
      ref={containerRef}
      className="h-[264px] bg-white flex items-center justify-around pl-14 pr-14 counter-container"
    >
      {stats.map((stat, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="flex items-center justify-center">
            <span
              ref={(el) => (countUpRefs.current[index] = el)}
              data-end={stat.end}
              className="text-5xl font-semibold"
              style={{ fontFamily: "Poppins", color: "#00A786" }}
            >
              0
            </span>
            <span
              className="text-3xl"
              style={{ fontFamily: "Poppins, sans-serif", color: "#00A786" }}
            >
              +
            </span>
          </div>
          <div className="flex items-center">
            <p
              className="text-base font-bold"
              style={{ fontFamily: "Poppins" }}
            >
              {stat.label}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Counter;
