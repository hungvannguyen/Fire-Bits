import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function MarqueeCarousel({
  className = "",
  items = [],
  speed = 20,
  direction = "left",
}) {
  const containerRef = useRef(null);
  const marqueeRef = useRef(null);

  const duplicatedItems = [...items, ...items];

  useEffect(() => {
    const marqueeEl = marqueeRef.current;
    if (!marqueeEl) return;

    const totalWidth = marqueeEl.scrollWidth / 2;

    gsap.to(marqueeEl, {
      x: -totalWidth,
      ease: "none",
      duration: speed,
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
      },
    });
  }, [speed, items]);

  const containerStyle =
    direction === "right" ? { transform: "scaleX(-1)" } : {};
  const itemStyle = direction === "right" ? { transform: "scaleX(-1)" } : {};

  return (
    <div
      ref={containerRef}
      className={`marquee-wrapper w-full overflow-hidden ${className}`}
      style={containerStyle}
    >
      <ul ref={marqueeRef} className="marquee-list whitespace-nowrap">
        {duplicatedItems.map((item, index) => (
          <li
            key={index}
            className="marquee-item mx-[5px] inline-block"
            style={itemStyle}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
