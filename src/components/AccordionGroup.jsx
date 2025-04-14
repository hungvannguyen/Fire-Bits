import { useState } from "react";

export default function AccordionGroup({ accordions }) {
  const [openIndex, setOpenIndex] = useState(null);

  const handleAccordionClick = (index) => {
    // Nếu nhấn vào accordion đang mở, đóng nó (đặt lại openIndex là null)
    // Nếu không, đặt openIndex bằng index của accordion vừa được nhấn
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      {accordions.map((item, index) => (
        <Accordion
          key={index}
          isOpen={openIndex === index}
          title={item.title}
          subtitle={item.subtitle}
          content={item.content}
          onClick={() => handleAccordionClick(index)}
        />
      ))}
    </div>
  );
}
