"use client";

import { useState } from "react";

// NAV CONTROLS
function MenuControls({ isOpen, onToggle }) {
  return (
    <div className="menu-controls">
      <MenuBtn
        className={isOpen ? "menu-btn_close" : "menu-btn_open"}
        onClick={onToggle}
        ariaLabel={isOpen ? "Close menu" : "Open menu"}
      />
    </div>
  );
}

function MenuBtn({ className, onClick, ariaLabel }) {
  return (
    <button
      type="button"
      className={`menu-btn ${className}`}
      onClick={onClick}
      aria-label={ariaLabel}
    ></button>
  );
}

// MOBILE NAV
function MobileNav({ onLinkClick, navLinks }) {
  return (
    <nav className="nav mobile-nav">
      <ul className="nav_ul mobile-nav_ul">
        {navLinks.map((link) => {
          return (
            <ListItem key={link.href} href={link.href} onClick={onLinkClick}>
              {link.label}
            </ListItem>
          );
        })}
      </ul>

      <footer className="mobile-nav_footer">
        <strong>EMERGENCY CALL-OUT</strong>
        <a href="tel:+44121550198">0121 555 0198</a>
      </footer>
    </nav>
  );
}

// NAV LIST ITEM
function ListItem({ href, onClick, children }) {
  return (
    <li>
      <a href={href} onClick={onClick}>
        {children}
      </a>
    </li>
  );
}

export default function MobileBar({ logo, navLinks }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggleMenu() {
    setIsOpen((prev) => !prev);
  }

  function handleCloseMenu() {
    setIsOpen(false);
  }

  return (
    <div className="mobile-bar">
      <div className="mobile-bar_container">
        <div className="logo-container">{logo}</div>
        <MenuControls isOpen={isOpen} onToggle={handleToggleMenu} />
      </div>
      {isOpen && (
        <MobileNav onLinkClick={handleCloseMenu} navLinks={navLinks} />
      )}
    </div>
  );
}
