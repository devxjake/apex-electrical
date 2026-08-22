import Link from "next/link";

import MobileBar from "./MobileBar";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Apex", href: "#why-apex" },
  { label: "Our Work", href: "#our-work" },
  { label: "Contact", href: "#contact" },
];

function Logo() {
  return (
    <Link href="/" className="logo">
      <div className="logo-icon">A</div>
      Apex Electrical
    </Link>
  );
}

export default function Header() {
  return (
    <header>
      {/* MOBILE NAV */}
      <MobileBar logo={<Logo />} navLinks={navLinks} />
    </header>
  );
}
