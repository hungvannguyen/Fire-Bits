import { NavLink } from "react-router-dom";

const HeadingPageWithButton = ({ title, content, buttonText, link = "" }) => {
  return (
    <div className="headingPageWithButton">
      <div className="__head">
        <h1 className="inner-page">{title}</h1>
        <p className="paragraphS">{content}</p>
      </div>

      <NavLink to={link} className="__btn">
        <p className="navText">{buttonText}</p>
      </NavLink>
    </div>
  );
};

export default HeadingPageWithButton;
