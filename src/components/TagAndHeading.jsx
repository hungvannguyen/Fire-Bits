const TagAndHeading = ({ tag = "", heading = "", className = "" }) => {
  return (
    <div className={`TagAndHeading ${className}`}>
      <div className="flex-none w-auto h-auto relative">
        <div className="tag_name">
          <p className="label">{tag}</p>
        </div>
      </div>

      <div className="section_name">
        <h2>{heading}</h2>
      </div>
    </div>
  );
};

export default TagAndHeading;
