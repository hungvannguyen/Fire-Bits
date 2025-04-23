import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const Step = ({
  stepNumber = "",
  badgeText = "",
  title = "",
  text = "",
  lightBar = false,
}) => {
  const stepRef = useRef(null);
  const timeLineRef = useRef(null);
  const lightBarRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const stepSection = stepRef.current;
      const timelineEl = timeLineRef.current;
      const timeline = timelineEl.querySelector(".__timeline");
      ScrollTrigger.create({
        trigger: timelineEl,
        start: "top 70%",
        end: "bottom 90%",
        // markers: true,

        onEnter: () => {
          gsap.to(timeline, {
            opacity: 1,
            color: "var(--color-lightTone, rgb(232,84,66))",
            textShadow: "rgb(255, 221, 0) 0px 1px 23px",
            ease: "power1.out",
            duration: 0.3,
          });
        },

        onLeaveBack: () => {
          gsap.to(timeline, {
            opacity: 0.15,
            color: "rgba(255,221,0,0.43)",
            textShadow: "rgba(255, 221, 0, 0) 0px 0px 0px",
            ease: "power1.inOut",
            duration: 0.1,
          });
        },
      });

      gsap.from(stepSection.querySelectorAll(".__content"), {
        y: 100,
        ease: "power3.out",
        scrollTrigger: {
          trigger: stepSection,
          start: "top 90%",
          end: "bottom 60%",
          scrub: 1.5,
          // markers: true,
        },
      });

      const lightBar = lightBarRef.current;

      // Animate light bar translateY
      gsap.fromTo(
        lightBar,
        { yPercent: -100 },
        {
          yPercent: 125,
          ease: "none",
          scrollTrigger: {
            trigger: stepSection,
            start: "top 85%",
            end: "bottom 60%",
            scrub: true,
            // markers: true,
          },
        },
      );
    }, stepRef);
    return () => ctx.revert();
  });

  return (
    <div
      className="flex h-[447] flex-col items-center justify-center gap-2.5 md:gap-0"
      ref={stepRef}
    >
      <div className="step">
        <div className="__timeline-container">
          <div className="" ref={timeLineRef}>
            <div className="__timeline">{stepNumber}</div>
          </div>
          <div className={`__progress-bar ${lightBar ? "relative" : "hidden"}`}>
            <div className="__lightBar" ref={lightBarRef}></div>
          </div>
        </div>
        <div className="__content">
          <div className="__header">
            <div className="__badge">
              <p className="paragraphL">{badgeText}</p>
            </div>
            <h3 className="__title">{title}</h3>
          </div>
          <p className="__text paragraphXS">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Step;
