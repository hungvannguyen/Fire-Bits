import logo from "../assets/img/logo.png";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="header">
      <div className="__container">
        <div className="__logo">
          <a href="/">
            <img src={logo} alt="Logo" />
          </a>
        </div>

        <nav className="__nav">
          <a href="/" className="navText active">
            Home
          </a>
          <a href="/about" className="navText">
            About
          </a>
          <a href="/contact" className="navText">
            Services
          </a>
          <a href="/reviews" className="navText">
            Reviews
          </a>
          <a href="/contact" className="navText">
            Contact
          </a>
        </nav>
        <div></div>

        <div
          className={`__hamburger ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className={`__line transition-colors duration-200 ${
              isOpen
                ? "translate-y-[6px] rotate-45 transform bg-lightTone"
                : "bg-white"
            }`}
          ></div>
          <div
            className={`__line transition-colors duration-200 ${
              isOpen
                ? "-translate-y-[6px] -rotate-45 transform bg-lightTone"
                : "bg-white"
            }`}
          ></div>
        </div>
      </div>

      {isOpen && (
        <nav className="__nav-mobile">
          <div>
            <a href="/" className="navText active">
              Home
            </a>
          </div>
          <div>
            <a href="/about" className="navText">
              About
            </a>
          </div>
          <div>
            <a href="/contact" className="navText">
              Services
            </a>
          </div>
          <div>
            <a href="/reviews" className="navText">
              Reviews
            </a>
          </div>
          <div>
            <a href="/contact" className="navText">
              Contact
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
