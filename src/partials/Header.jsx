import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/img/logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const serviceRoutes = [
    "/outsourcing",
    "/sass",
    "/seo",
    "/ecommerce",
    "/ai-agency",
  ];
  const isServiceActive =
    location.pathname === "/services" ||
    serviceRoutes.includes(location.pathname);

  // Hàm giúp quyết định class cho các NavLink thông thường
  const getNavClass = (isActive) => (isActive ? "navText active" : "navText");

  return (
    <header className="header">
      <div className="__container">
        <div className="__logo">
          <NavLink to="/">
            <img src={logo} alt="Logo" />
          </NavLink>
        </div>

        <nav className="__nav">
          <NavLink to="/" className={({ isActive }) => getNavClass(isActive)}>
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => getNavClass(isActive)}
          >
            About
          </NavLink>
          {/* Với Services, dùng điều kiện tùy chỉnh từ useLocation */}
          <NavLink
            to="/services"
            className={() => (isServiceActive ? "navText active" : "navText")}
          >
            Services
          </NavLink>
          <NavLink
            to="/reviews"
            className={({ isActive }) => getNavClass(isActive)}
          >
            Reviews
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => getNavClass(isActive)}
          >
            Contact
          </NavLink>
        </nav>

        <div className="hidden w-[144px] lg:flex"></div>

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
            <NavLink to="/" className={({ isActive }) => getNavClass(isActive)}>
              Home
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/about"
              className={({ isActive }) => getNavClass(isActive)}
            >
              About
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/services"
              className={() => (isServiceActive ? "navText active" : "navText")}
            >
              Services
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/reviews"
              className={({ isActive }) => getNavClass(isActive)}
            >
              Reviews
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/contact"
              className={({ isActive }) => getNavClass(isActive)}
            >
              Contact
            </NavLink>
          </div>
        </nav>
      )}
    </header>
  );
}
