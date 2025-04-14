const CardBgBlur = ({icon: Icon, heading, subText }) => {
  return (
    
      <div className="CardBgBlur">
        <div className="-itemBox">
          <div className="-icon">
            <div>
              {Icon && <Icon size={42} className="relative text-lightTone" />}
            </div>
          </div>

          <div className="-text">
            <div className="_heading">
              <h3 className="text-center">{heading}</h3>
            </div>
            <div className="_subText">
              <p className="paragraphXS text-center text-white/80">
                {subText}
              </p>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default CardBgBlur;
