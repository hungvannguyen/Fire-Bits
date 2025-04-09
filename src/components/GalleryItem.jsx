import { useState } from "react";

const GalleryItem = ({ first, second, reversed = false }) => {
  // activeIndex: 0 cho hình đầu tiên, 1 cho hình thứ hai.
  // Ban đầu, hình đầu tiên được đặt làm active.
  const [activeIndex, setActiveIndex] = useState(0);

  // Hàm xử lý khi di chuột: chỉ thay đổi nếu phần tử đang không active.
  const handleHover = (index) => {
    if (activeIndex !== index) {
      setActiveIndex(index);
    }
  };

  // Hàm xác định lớp CSS dựa theo trạng thái active và biến reversed.
  const getClass = (index) => {
    if (reversed) {
      // Khi reversed true: phần tử active có lớp "__short", phần còn lại có lớp "__long".
      return activeIndex === index ? "__short" : "__long";
    } else {
      // Khi reversed false: phần tử active có lớp "__long", phần còn lại có lớp "__short".
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
