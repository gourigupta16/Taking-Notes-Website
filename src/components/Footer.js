import React from "react";

const currentyear = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <p>Copyright@{currentyear}-Gouri Gupta</p>
    </footer>
  );
}

export default Footer;
