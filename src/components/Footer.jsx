import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>
        Made with{" "}
        <span role="img" aria-label="Love">
          &#128153;
        </span>{" "}
        by Mazin ⓒ {year}
      </p>
    </footer>
  );
}

export default Footer;
