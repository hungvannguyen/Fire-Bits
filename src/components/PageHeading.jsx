const PageHeading = ({ title, titleLine2 }) => {
  return (
    <div className="">
      <div className="PageHeading">
        <div className="_container richTextContainer">
          <p className="h1-inner-page text-center">
            {title}
            <br />
            {titleLine2}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageHeading;
