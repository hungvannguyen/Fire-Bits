import { useState } from "react";
import { CaretDown } from "@phosphor-icons/react";

export default function AccordionArrow({
  className = "",
  initialOpen = false,
  title = "",
  subtitle = "",
  content = "",
}) {
  const [isOpen, setIsOpen] = useState(initialOpen);

  return (
    <div
      className={`accordion-arrow group cursor-pointer ${className}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="__heading">
        <div className={`__title ${!isOpen ? "group-hover:pl-4" : ""}`}>
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
      {isOpen && (
        <div className="__content">
          <p className="paragraphXS">{content}</p>
        </div>
      )}
    </div>
  );
}
