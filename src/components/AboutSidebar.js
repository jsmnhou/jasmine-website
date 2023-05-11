import React from "react";
// import { Link } from "@reach/router";

import me from "../assets/me.jpeg";
import hershey from "../assets/hershey.jpeg";

export const AboutSidebar = () => {
  return (
    <aside className="post-sidebar">
      <div className="post-sidebar-card">
        <h2>Me</h2>
        <img src={me} alt="Jasmine" />
      </div>
      <div className="post-sidebar-card">
        <h2>Hershey</h2>
        <img src={hershey} alt="Hershey" />
      </div>
    </aside>
  );
};
