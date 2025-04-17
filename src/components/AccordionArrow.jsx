import { useRef, useState, useEffect } from "react";
import { CaretDown } from "@phosphor-icons/react";

export default function AccordionArrow({
  className = "",
  initialOpen = false,
  title = "",
  subtitle = "",
  content = "",
}) {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div
      className={`accordion-arrow group cursor-pointer ${isOpen ? "is-open" : ""} ${className}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="__heading">
        <div className={`__title ${!isOpen ? "" : "__isOpen"}`}>
          <h4>{title}</h4>
          {subtitle && <h4>{subtitle}</h4>}
        </div>
        <div className="__icon">
          <CaretDown
            className={`transition-transform duration-300 ease-in-out ${
              isOpen ? "-rotate-180" : "rotate-0"
            }`}
            size={14}
          />
        </div>
      </div>

      <div
        className="__content-wrapper"
        style={{ height: `${height}px` }}
      >
        <div ref={contentRef} className="__content">
          <p className="paragraphXS">{content}</p>
        </div>
      </div>
    </div>
  );
}
