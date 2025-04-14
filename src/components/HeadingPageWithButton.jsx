const HeadingPageWithButton = ({ title, content, buttonText }) => {
  return (
    <div className="headingPageWithButton">
      <div className="__head">
        <h1 className="inner-page">{title}</h1>
        <p className="paragraphS">{content}</p>
      </div>

      <button className="__btn">
        <p className="navText">{buttonText}</p>
      </button>
    </div>
  );
};

export default HeadingPageWithButton;
