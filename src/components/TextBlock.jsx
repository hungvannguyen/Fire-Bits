const TextBlock = ({ title = "", content = "" }) => (
  <div className="flex flex-col">
    <p className="paragraphM">{title}</p>
    <p className="paragraphXS">{content}</p>
  </div>
);

export default TextBlock;
