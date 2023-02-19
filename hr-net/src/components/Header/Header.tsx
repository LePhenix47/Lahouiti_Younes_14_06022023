import React from "react";

//Next
import Image from "next/image";

//Images
import headerIcon from "../../../public/HRnet-logo.svg";
import Link from "next/link";

export default function Header(): JSX.Element {
  return (
    <header className="header">
      <section className="header__slogan">
        <Link href="/" className="header__link">
          <Image
            src={headerIcon}
            alt="Header with the logo of the HRnet brand"
            height={90}
            width={90}
          />
          <span className="header__link-brand">HRnet</span>: Connecting Talent.
          Empowering Teams.
        </Link>
      </section>
      <nav className="header__navigation">
        <ul className="header__list">
          <li className="header__item">
            <Link href="/" className="header__item-link">
              Home
            </Link>
          </li>
          <li className="header__item">
            <Link href="/employees" className="header__item-link">
              Employees
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
