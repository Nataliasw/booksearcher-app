import React from "react";

const Contact = () => {
  return (
    <div id="contact">
      <p className="contact">Copyright NatSwi © {new Date().getFullYear()}</p>
      <p className="contact">
        <i className="fab fa-github"></i>{" "}
        <a href="https://github.com/Nataliasw" target="_blank" rel="noreferrer">
          myGithub
        </a>
      </p>
    </div>
  );
};

export default Contact;
