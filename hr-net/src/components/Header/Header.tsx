import React from "react";

//Next
import Image from "next/image";

//Images
import headerIcon from "../../../public/HRnet-logo.svg";

export default function Header(): JSX.Element {
  return (
    <header className="header">
      <Image
        src={headerIcon}
        alt="Header with the logo of the HRnet brand"
        height={90}
        width={90}
      />
    </header>
  );
}
