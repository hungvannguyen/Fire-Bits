import { ArrowUp } from "@phosphor-icons/react";

const ServiceCard = ({icon: Icon, title, description, link=""}) => {
    return(
        <div className="ServiceCard">
            <a href={link} className="_SVcontainer" style={{width: '100%'}}>
                <div className="_iconAndName flex-none-nowrap">
                    <div>
                    {Icon && <Icon size={36} className="-icon" />}
                    </div>
                    <div className="-name">
                        <h3>{title}</h3>
                    </div>
                </div>
        
                <div className="_richTextContainer">
                    <p className="paragraphXS text-white/80">{description}</p>
                </div>

                <div className="_buttonContainer flex-none-nowrap">
                    <div className="-text">
                        <p>learn more</p>
                    </div>
                    <div className="-icon">
                        <ArrowUp size={14} className="text-white rotate-[45deg]" />
                    </div>
                </div>
            </a>
        </div>
    );
};

export default ServiceCard;