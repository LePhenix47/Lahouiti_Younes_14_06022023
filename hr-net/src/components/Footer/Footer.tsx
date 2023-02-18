import React from "react";

//Next
import Image from "next/image";

//Images
import footerIcon from "../../../public/Entir-new-icon 2.png";

export default function Footer(): JSX.Element {
  return (
    <footer className="footer">
      {
        <Image
          src={footerIcon}
          alt="Footer icon for the Wealth Health brand"
          //Aspect ratio of 2.2/1
          width={176}
          height={80}
          className="footer__image"
        />
      }
    </footer>
  );
}
