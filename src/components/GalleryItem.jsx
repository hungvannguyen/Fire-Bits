import { useState } from "react";

const GalleryItem = ({ first, second, reversed = false }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleHover = (index) => {
    const newIndex = reversed ? (index === 0 ? 1 : 0) : index;
    if (activeIndex !== newIndex) {
      setActiveIndex(newIndex);
    }
  };

  const getClass = (index) => {
    if (reversed) {
      return activeIndex === index ? "__short" : "__long";
    } else {
      return activeIndex === index ? "__long" : "__short";
    }
  };

  return (
    <div className="__item">
      <img
        src={first}
        alt="Gallery Item"
        onMouseEnter={() => handleHover(0)}
        className={getClass(0)}
      />
      <img
        src={second}
        alt="Gallery Item"
        onMouseEnter={() => handleHover(1)}
        className={getClass(1)}
      />
    </div>
  );
};

export default GalleryItem;
