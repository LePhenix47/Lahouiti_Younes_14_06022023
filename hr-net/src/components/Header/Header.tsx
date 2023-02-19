import React from "react";

//Next
import Image from "next/image";

//Images
import headerIcon from "../../../public/HRnet-logo.svg";
import Link from "next/link";

//Components
import NavLink from "../NavLink/NavLink";

export default function Header(): JSX.Element {
  return (
    <header className="header">
      <section className="header__slogan">
        <Link href="/" className="header__link">
          <Image
            src={headerIcon}
            alt="Header with the logo of the HRnet brand"
            className="header__image"
            height={90}
            width={90}
          />
          <p className="header__link-paragraph">
            <span className="header__link-brand">HRnet</span>: Connecting
            Talent. Empowering Teams.
          </p>
        </Link>
      </section>
      <nav className="header__navigation">
        <ul className="header__list">
          <li className="header__item">
            <NavLink href="/">Home</NavLink>
          </li>
          <li className="header__item">
            <NavLink href="/employees">Employees</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
