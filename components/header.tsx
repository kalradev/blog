import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab);
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Theme from "../theme"

function Header() {
  return (
    <div className="header">
      <div className="tagline">Lifelong Learner</div>

      <div className="connect">
        <div className="link">
          <a href="https://www.github.com/kalradev" target="blank">
            <FontAwesomeIcon icon={["fab", "github"]} />
          </a>
        </div>
        <div className="link">
          <a
            href="https://www.linkedin.com/in/dev-kalra-b94282160/"
            target="blank"
          >
            <FontAwesomeIcon icon={["fab", "linkedin"]} />
          </a>
        </div>
      </div>
      
      <style jsx>{`
        .header {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          font-size: 2em;
          margin-bottom: 15px;
        }
        .tagline {
          color: ${Theme.colors.accent};
          font-family: ${Theme.fontFamily.brand};
        }
        .connect {
          display: flex;
          flex-direction: row;
        }
        .link {
          padding-left: 10px;
        }
        `}</style>
    </div>
  );
}

export default Header;