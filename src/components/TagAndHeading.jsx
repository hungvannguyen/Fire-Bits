const TagAndHeading = ({ tag = "", heading = "" }) => {
  return (
    <div className="TagAndHeading">
      <div className="tag_name">
        <p className="label">{tag}</p>
      </div>

      <div className="section_name">
        <h2>{heading}</h2>
      </div>
    </div>
  );
};

export default TagAndHeading;
