import {
  Envelope,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  MapPin,
  Phone,
  TwitterLogo,
} from "@phosphor-icons/react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="__container">
        <div className="__head">
          <div className="__left">
            <p>Let's</p>
            <p>Talk!</p>
          </div>
          <div className="__right">
            <form>
              <label className="__label">
                <span>Name</span>
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="__input"
                  />
                </div>
              </label>

              <label className="__label">
                <span>Email</span>
                <div>
                  <input
                    type="text"
                    placeholder="Your Email"
                    className="__input"
                  />
                </div>
              </label>

              <label className="__label">
                <span>Message</span>
                <div>
                  <textarea
                    placeholder="Write your messgage"
                    className="__input"
                  />
                </div>
              </label>

              <button type="submit" className="__btn">
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className="__footer">
          <div className="__wrapper">
            <div className="__top">
              <div className="__left">
                <div className="__item">
                  <Envelope size={30} className="__icon" />
                  <a className="link" href="/">
                    Firebits@gmail.com
                  </a>
                </div>

                <div className="__item">
                  <Phone size={30} className="__icon" />
                  <a className="link" href="/">
                    + 54 2541 22 55 66
                  </a>
                </div>

                <div className="__item">
                  <MapPin size={30} className="__icon" />
                  <a className="link" href="/">
                    123 Main Street Anytown, USA, 2141
                  </a>
                </div>
              </div>
              <div className="__right">
                <div className="__item">
                  <h5 className="__label">Menu</h5>
                  <ul className="__list">
                    <li>
                      <a className="footerLink paragraphXS" href="/">
                        Home
                      </a>
                    </li>
                    <li>
                      <a className="footerLink paragraphXS" href="/about">
                        About
                      </a>
                    </li>
                    <li>
                      <a className="footerLink paragraphXS" href="/services">
                        Services
                      </a>
                    </li>
                    <li>
                      <a className="footerLink paragraphXS" href="/reviews">
                        Reviews
                      </a>
                    </li>
                    <li>
                      <a className="footerLink paragraphXS" href="/contact">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="__item">
                  <h5 className="__label">Services</h5>
                  <ul className="__list">
                    <li>
                      <a className="footerLink" href="/">
                        SEO
                      </a>
                    </li>
                    <li>
                      <a className="footerLink" href="/about">
                        Outsourcing
                      </a>
                    </li>
                    <li>
                      <a className="footerLink" href="/services">
                        SaaS
                      </a>
                    </li>
                    <li>
                      <a className="footerLink" href="/reviews">
                        Ecommerce
                      </a>
                    </li>
                    <li>
                      <a className="footerLink" href="/contact">
                        AI agency
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="__bottom">
              <div className="__follow">
                <h5 className="__label">Follow us</h5>
                <ul className="__list">
                  <li>
                    <a className="footerLink __social-logo" href="/">
                      <FacebookLogo size={24} weight="fill" />
                    </a>
                  </li>
                  <li>
                    <a className="footerLink __social-logo" href="/about">
                      <TwitterLogo size={24} weight="fill" />
                    </a>
                  </li>
                  <li>
                    <a className="footerLink __social-logo" href="/services">
                      <LinkedinLogo size={24} weight="fill" />
                    </a>
                  </li>
                  <li>
                    <a className="footerLink __social-logo" href="/reviews">
                      <InstagramLogo size={24} weight="fill" />
                    </a>
                  </li>
                </ul>
              </div>
              <form className="__subscribe">
                <input type="email" placeholder="Your email" />

                <button type="submit" className="__btn">
                  Subscribe for newsletter
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="__credit">
          <span className="footerLink">
            &copy; {new Date().getFullYear()} Firebits. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
