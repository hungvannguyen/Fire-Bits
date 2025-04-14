import { Star, Quotes } from "@phosphor-icons/react";

export default function ReviewWithIcon({
  content = "",
  avatar = "",
  name = "",
  role = "",
}) {
  return (
    <div className="review-with-icon relative h-[510px]">
      <div className="__head">
        <ul className="__stars">
          <li>
            <Star size={12} weight="fill" className="__icon" />
          </li>

          <li>
            <Star size={12} weight="fill" className="__icon" />
          </li>

          <li>
            <Star size={12} weight="fill" className="__icon" />
          </li>

          <li>
            <Star size={12} weight="fill" className="__icon" />
          </li>

          <li>
            <Star size={12} weight="fill" className="__icon" />
          </li>
        </ul>
      </div>

      <div className="__quote absolute top-[40px] rotate-180">
        <Quotes size={55} weight="fill" className="text-lightTone opacity-50" />
      </div>

      <div className="absolute top-[60px] p-2.5">
        <div className="__content break-words whitespace-normal">
          <p className="paragraphS">{content}</p>
        </div>

        <div className="__footer">
          {avatar && (
            <div className="__avatar">
              <img src={avatar} alt="user" />
            </div>
          )}

          <div className="__bio">
            <h5 className="__name">{name}</h5>
            <p className="__role">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
