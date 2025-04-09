import React from "react";

export default function MarqueeCarousel({
  className = "",
  items = [],
  speed = 20,
  direction = "left",
}) {
  const duplicatedItems = Array.from(
    { length: items.length * 3 },
    () => items,
  ).flat();

  const animationDuration = speed * (duplicatedItems.length / items.length);

  return (
    <div className={`marquee-wrapper w-full overflow-hidden ${className}`}>
      <ul
        className="marquee-list whitespace-nowrap"
        style={{
          animationDuration: `${animationDuration}s`,
          animationDirection: direction === "right" ? "reverse" : "normal",
        }}
      >
        {duplicatedItems.map((item, index) => (
          <li key={index} className="marquee-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
