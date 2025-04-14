import { Star } from "@phosphor-icons/react";

export default function Review({
  content = "",
  avatar = "",
  name = "",
  role = "",
}) {
  return (
    <div className="review">
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

      <div className="__content">
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
  );
}
