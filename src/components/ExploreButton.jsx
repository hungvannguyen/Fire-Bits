import { ArrowUp } from "@phosphor-icons/react";

const ExploreButton = ({ text = "", link = "#" }) => {
    return (
      <div className="flex w-full items-center justify-center">
        <a href={link} className="ExploreButton">
          <div className="__wrapText">
            <div className="__text">
              <p>{text}</p>
            </div>
          </div>
  
          <div className="__icon">
            <div>
                <ArrowUp size={20} className="__icon" />
            </div>
          </div>
        </a>
      </div>
    );
  };
  
  export default ExploreButton;