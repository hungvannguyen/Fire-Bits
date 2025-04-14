import React from "react";

const Step = ({ stepNumber = "", badgeText = "", title = "", text = "" }) => {
  return (
    <div className="flex h-[447] flex-col items-center justify-center gap-2.5 md:gap-0">
      <div className="step">
        <div className="__timeline-container">
          <div className="__timeline">{stepNumber}</div>
          <div className="__progress-bar"></div>
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
