import React from "react";

//Next
import Image from "next/image";

//Images
import footerIcon from "../../../public/Entir-new-icon 2.png";

export default function Footer(): JSX.Element {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__image-container">
        <Image
          src={footerIcon}
          alt="Footer icon for the Wealth Health brand"
          //Aspect ratio of 2.2/1
          width={176}
          height={80}
          className="footer__image"
        />
      </div>
      <div className="footer__copyright-container">
        <small className="footer__copyright">
          HRnet by Wealth Health, 2006-{currentYear} ©. All rights reserved.
        </small>
      </div>
    </footer>
  );
}
