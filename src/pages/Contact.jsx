import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
} from "@phosphor-icons/react";

export default function Contact() {
  return (
    <div className="contact">
      <div className="__heading">
        <h1 className="inner-page">Let's Work Together </h1>
      </div>

      <div className="__contact">
        <div className="__wrapper">
          <div className="__head">
            <div className="__item-col-1">
              <h4>Hotline:</h4>
              <p className="link">(555) 123-4567 </p>
            </div>

            <div className="__item-col-1">
              <h4>Address:</h4>
              <p className="link">
                123 Main Street, Cityville, Stateburg, 98765{" "}
              </p>
            </div>

            <div className="__item-col-1">
              <h4>Email:</h4>
              <p className="link">agencee@email.com </p>
            </div>

            <div className="__item-col-2">
              <h4>Opening Hours: </h4>
              <ul className="__list">
                <li>Mon To Fri: 9.00 AM - 8.30 PM</li>
                <li>Sat: 10:00 AM - 6:30 PM</li>
                <li>Sun: Closed</li>
              </ul>
            </div>

            <div className="__item-col-1 lg:order-5">
              <h4>Follow Us:</h4>
              <ul className="__list">
                <li>
                  <a className="__social-logo" href="/">
                    <FacebookLogo size={24} weight="fill" />
                  </a>
                </li>
                <li>
                  <a className="__social-logo" href="/about">
                    <TwitterLogo size={24} weight="fill" />
                  </a>
                </li>
                <li>
                  <a className="__social-logo" href="/services">
                    <LinkedinLogo size={24} weight="fill" />
                  </a>
                </li>
                <li>
                  <a className="__social-logo" href="/reviews">
                    <InstagramLogo size={24} weight="fill" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="__map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.123456789012!2d-122.4194154846814!3d37.7749292797599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085816c12345678%3A0x123456789abcdef0!2sSan%20Francisco%2C%20CA%2094105%2C%20USA!5e0!3m2!1sen!2suk!4v1612345678901"
              allowFullScreen=""
              loading="lazy"
              className="__map-iframe"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
