import { useState, useEffect } from "react";
import { GoPerson } from "react-icons/go";
import { TfiSearch } from "react-icons/tfi";
import { IoBagOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import "./index.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu with Esc
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <nav className="navbar">
        {/* Desktop Menu */}
        <ul className="nav-links">
          <li>
            <button className="link-1">WHICH MANUKA IS FOR ME?</button>
          </li>
          <li><button className="bt-nav">Shop</button></li>
          <li><button className="bt-nav">Explore</button></li>
          <li>
            <img
              src="https://res.cloudinary.com/ddvwvwais/image/upload/v1756617377/dstp_logo_da8nvb.png"
              alt="Destination Manuka Logo"
              className="logo-img"
            />
          </li>
          <li><button className="bt-nav">Rewards</button></li>
          <li><button className="bt-nav">Contact</button></li>

          <ul className="icons-list">
            <li>
              <button className="bt-nav icon"><GoPerson /></button>
            </li>
            <li>
              <button className="bt-nav icon"><TfiSearch /></button>
            </li>
            <li className="cart-icon">
              <button className="bt-nav icon">
                <IoBagOutline />
              </button>
              <p className="cart-count">0</p>
            </li>
          </ul>
        </ul>
      </nav>

      {/* Mobile Navbar */}
      <nav className="mobile-nav">
        <button
        className="hamburger"
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            setIsOpen(!isOpen);
          }
        }}
      >
        <RxHamburgerMenu />
      </button>


        <img
          src="https://res.cloudinary.com/ddvwvwais/image/upload/v1756617377/dstp_logo_da8nvb.png"
          alt="Destination Manuka Logo"
          className="logo-img"
        />

        <ul className="mobile-list">
          <li className="mobile-icon">
            <button className="mobile-icon-bt"><GoPerson /></button>
          </li>
          <li className="mobile-icon">
            <button className="mobile-icon-bt"><TfiSearch /></button>
          </li>
          <li className="mobile-icon cart-icon">
            <button className="mobile-icon-bt">
              <IoBagOutline />
            </button>
            <p className="cart-count">0</p>
          </li>
        </ul>

        {/* Mobile Menu */}
        <ul
          className={`mobile-menu ${isOpen ? "open" : ""}`}
        >
          <li><button className="mobile-icon-bth">Shop</button></li>
          <li><button className="mobile-icon-bth">Explore</button></li>
          <li><button className="mobile-icon-bth">Rewards</button></li>
          <li><button className="mobile-icon-bth">Contact</button></li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
