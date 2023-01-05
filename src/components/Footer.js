import React from "react";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer">
        <div>
          <h2>isolate</h2>
          <p>
            if you use this website on a regular basis, contact me about it and
            let me know!
          </p>
        </div>
        <div>
          <h2>socials</h2>
          <div className="links">
            <a
              href="https://www.instagram.com/davbaly/"
              target="_blank"
              rel="noreferrer"
              className="link-underline"
            >
              instagram
            </a>
            <a
              href="https://github.com/davidbalian/"
              target="_blank"
              rel="noreferrer"
              className="link-underline"
            >
              github
            </a>
            <a
              href="https://www.linkedin.com/in/davidbalian/"
              target="_blank"
              rel="noreferrer"
              className="link-underline"
            >
              linkedin
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
