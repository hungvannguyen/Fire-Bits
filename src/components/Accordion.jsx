import { useState } from "react";
import { Plus } from "@phosphor-icons/react";

export default function Accordion({
  initialOpen = false,
  title = "",
  subtitle = "",
  content = "",
}) {
  const [isOpen, setIsOpen] = useState(initialOpen);

  return (
    <div
      className="accordion group cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="__header">
        <div className={`__title ${!isOpen ? "group-hover:pl-4" : ""}`}>
          <h4>{title}</h4>
          {subtitle && <h4>{subtitle}</h4>}
        </div>
        <div className="__icon">
          <Plus
            className={`transition-transform duration-300 ease-in-out ${
              isOpen ? "rotate-45" : "rotate-0"
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
