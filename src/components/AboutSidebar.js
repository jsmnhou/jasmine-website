import React from "react";
import gatsby from "../assets/gatsby.png";
import github from "../assets/github.png";
import netlify from "../assets/netlify.png";

import me from "../assets/me.jpeg";
import hershey from "../assets/hershey.jpeg";

// import { Link } from "@reach/router";
const aboutIcons = [
  { url: "https://www.gatsbyjs.org/", label: "Gatsby", icon: gatsby },
  { url: "https://github.com/jsmnhou", label: "GitHub", icon: github },
  { url: "https://www.netlify.com", label: "Netlify", icon: netlify },
];

export const AboutSidebar = () => {
  return (
    <aside className="post-sidebar">
      <div className="post-sidebar-card">
        {/* <h2>Me</h2> */}
        <img className="rounded-image" src={me} alt="Jasmine" />
        <h2>Jasmine Hou</h2>
        <div className="post-sidebar-icons">
          <section>
            <nav>
              {aboutIcons.map((link) => (
                <a
                  href={link.url}
                  title={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={link.url}
                >
                  {/* <span>{link.label}</span> */}
                  <img className="post-sidebar-icons" src={link.icon} alt={link.label} />
                </a>
              ))}
            </nav>
          </section>
        </div>
      </div>
      {/* <div className="post-sidebar-card">
        <h2>Hershey</h2>
        <img src={hershey} alt="Hershey" />
      </div> */}
    </aside>
  );
};
