import { Star } from "@phosphor-icons/react";

export default function ReviewWithIcon({
  content = "",
  avatar = "",
  name = "",
  role = "",
}) {
  const QuoteIcon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="55"
      height="55"
      fill="none"
      viewBox="0 0 55 55"
      {...props}
    >
      <path
        d="M 8.459 14.419 C 11.674 10.934 16.539 9.167 22.919 9.167 L 25.211 9.167 L 25.211 15.627 L 23.366 15.996 C 20.226 16.624 18.042 17.859 16.874 19.672 C 16.264 20.648 15.918 21.766 15.87 22.917 L 22.917 22.917 C 24.182 22.917 25.208 23.943 25.208 25.208 L 25.208 41.25 C 25.208 43.778 23.153 45.833 20.625 45.833 L 6.875 45.833 C 5.609 45.833 4.583 44.807 4.583 43.542 L 4.583 32.083 L 4.59 25.394 C 4.57 25.14 4.134 19.112 8.459 14.419 Z M 45.836 45.833 L 32.086 45.833 C 30.82 45.833 29.794 44.807 29.794 43.542 L 29.794 32.083 L 29.799 25.394 C 29.778 25.14 29.343 19.112 33.667 14.419 C 36.882 10.934 41.747 9.167 48.127 9.167 L 50.419 9.167 L 50.419 15.627 L 48.574 15.996 C 45.435 16.624 43.251 17.859 42.082 19.672 C 41.472 20.648 41.126 21.766 41.078 22.917 L 48.125 22.917 C 49.391 22.917 50.417 23.943 50.417 25.208 L 50.417 41.25 C 50.417 43.778 48.361 45.833 45.833 45.833 Z"
        fill="rgb(245, 131, 39)"
      />
    </svg>
  );

  return (
    <div className="review-with-icon">
      <div className="_container">
        <div className="_wrapper">
          <div className="__top_content">
            <div className="-star_ratting">
              <Star size={10} weight="fill" className="__icon" />
              <Star size={10} weight="fill" className="__icon" />
              <Star size={10} weight="fill" className="__icon" />
              <Star size={10} weight="fill" className="__icon" />
              <Star size={10} weight="fill" className="__icon" />
            </div>

            <div className="-comment">
              <div className="richTextContainer -text_container">
                <p className="paragraphS">{content}</p>
              </div>

              <div className="-quoteMark">
                <div className="svgContainer">
                  <QuoteIcon className="rotate-180 text-lightTone" />
                </div>
              </div>
            </div>
          </div>

          <div className="__bottom_content">
            <div className="divide"></div>
            <div className="user_info">
              {avatar && (
                <div className="_avatar">
                  <div className="_container">
                    <div className="absolute inset-0">
                      <div className="">
                        <img src={avatar} alt="user" />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div className="_nameAndJob">
                <div className="-name richTextContainer">
                  <h5 className="">{name}</h5>
                </div>
                <div className="-job richTextContainer">
                  <p className="label text-white/50">{role}e</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
