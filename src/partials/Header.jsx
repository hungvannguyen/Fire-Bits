import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/img/logo.png";
import { motion } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [hoveredIndex, setHoveredIndex] = useState(null);

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

  const links = [
    { label: "HOME", href: "/" },
    { label: "SERVICE", href: "/services", isService: true },
    { label: "ABOUT", href: "/about" },
    { label: "REVIEWS", href: "/reviews" },
    { label: "CONTACT", href: "/contact" },
  ];

  return (
    <header className="header">
      <div className="__container">
        <div className="__logo">
          <NavLink to="/">
            <img src={logo} alt="Logo" />
          </NavLink>
        </div>

        <nav className="_nav">
          {links.map((link, index) => {
            const isLinkActive = link.isService
              ? isServiceActive
              : location.pathname === link.href;
            return (
              <div
                key={index}
                className="_linkContainer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <NavLink
                  to={link.href}
                  className={({ isActive }) =>
                    `_link ${getNavClass(link.isService ? isServiceActive : isActive)}`
                  }
                >
                  <motion.div
                    className={`overlay ${isLinkActive ? "hidden" : ""}`}
                    initial={false}
                    animate={{
                      scale: hoveredIndex === index ? 1 : 0,
                      backgroundColor:
                        hoveredIndex === index
                          ? "rgba(51,66,50,0.05)"
                          : "rgba(255, 255, 255, 0.3)",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 212,
                      damping: 60,
                      mass: 1,
                      delay: 0,
                    }}
                  />
                  <div className="_text richTextContainer">
                    <p className="navText">{link.label}</p>
                  </div>
                </NavLink>
              </div>
            );
          })}
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
