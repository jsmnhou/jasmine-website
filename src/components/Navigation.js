// top navigation bar
// About Projects Github

import React from "react";
import { Link } from "gatsby";

import krool from "../assets/krool-old.png";
import moon from "../assets/moon.png";

import { ExternalLinkIcon } from "../assets/ExternalLinkIcon";
import { slugify } from "../utils/helpers";

const mainNavItems = [
  { url: "/", label: "Home", mobileOnly: true },
  { url: "/me", label: "About" },
  { url: "/projects", label: "Projects" },
];

const socialNavItems = [
  { url: "https://github.com/jsmnhou", label: "GitHub" },
  {
    url: "https://docs.google.com/gview?url=https://github.com/jsmnhou/jsmnhou/raw/main/resume.pdf&embedded=true",
    label: "Resume",
  },
];

export const Navigation = ({ theme, onUpdateTheme }) => {
  return (
    <section className="navigation">
      <div className="container">
        <div className="nav-wrapper">
          {/* icon: Jasmine Hou */}
          <Link to="/" className="item brand">
            <img src={krool} className="logo" alt="Jasmine Hou" />
            <span>Jasmine Hou</span>
          </Link>
          {/* map each mainNavItem to link on nav bar */}
          <nav>
            {mainNavItems.map((item) => (
              <div className="nav-item-outer" key={item.url}>
                <Link
                  to={item.url}
                  key={item.label}
                  activeClassName="active"
                  className={`item ${slugify(item.label)} ${
                    item.mobileOnly ? "mobile-only" : ""
                  }`}
                >
                  <span>{item.label}</span>
                </Link>
              </div>
            ))}
            {/* map each socialNavItem to link on nav bar */}
            {socialNavItems.map((item) => (
              <div className="nav-item-outer" key={item.url}>
                <img src={item.icon} alt={item.label} className="nav-image" />
                <a
                  href={item.url}
                  key={item.label}
                  className={`desktop-only item ${slugify(item.label)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>{item.label}</span>
                  <ExternalLinkIcon />
                </a>
              </div>
            ))}
          </nav>
        </div>
        {/* TODO: implement dark mode */}
        <div className="theme-toggle">
          <button onClick={onUpdateTheme}>
            <img src={moon} alt="Theme" />
          </button>
        </div>
      </div>
    </section>
  );
};
