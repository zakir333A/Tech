import React, { useState, useEffect } from "react";
import "./Header.css";
import { MdOutlineLanguage } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import FootContact from "../Footer/FootContact";
import "../Footer/Footer.css";
import {
  FaLocationDot,
  FaPhone,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa6";

function Header() {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("AZ");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const toggleLanguageMenu = (event) => {
    event.stopPropagation();
    setIsLanguageOpen(!isLanguageOpen);
  };

  const changeLanguage = (language) => {
    setSelectedLanguage(language);
    setIsLanguageOpen(false);
  };

  const toggleSubmenu = (event) => {
    event.preventDefault();
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isLanguageOpen && !event.target.closest(".language_bar")) {
        setIsLanguageOpen(false);
      }

      if (
        isSubmenuOpen &&
        !event.target.closest(".submenu") &&
        !event.target.closest(".product_list")
      ) {
        setIsSubmenuOpen(false);
      }

      if (
        isMenuOpen &&
        !event.target.closest(".head_navList") &&
        !event.target.closest(".hamburger-icon")
      ) {
        setIsMenuOpen(false);
        document.body.style.overflow = "auto";
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
        setIsSubmenuOpen(false);
        document.body.style.overflow = "auto";
      }
    };

    document.addEventListener("click", handleClickOutside);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, [isLanguageOpen, isSubmenuOpen, isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className={`h-wrapper container ${isScrolled ? "scroll-active" : ""} ${
        isMenuOpen ? "menu-open" : ""
      }`}
    >
      <div className="header_logo">
        <img src="/logo-a.png" alt="header_logo_img" />
      </div>

      <nav className={`head_navList ${isMenuOpen ? "active" : ""}`}>
        {isMenuOpen && (
          <div className="miniHeader" style={{ width: "100%" }}>
            <img
              src="../../../public/logo-a.png"
              alt="logo"
              style={{ width: "100px", height: "50px" }}
            />
            <IoClose onClick={toggleMenu} />
          </div>
        )}

        <ul>
          <li>
            <a href="/about">Haqqımızda</a>
          </li>
          <li>
            <a href="#">Xidmətlər</a>
          </li>
          <li>
            <a
              href="#"
              className="product_list"
              onClick={toggleSubmenu}
              aria-expanded={isSubmenuOpen}
              aria-haspopup="true"
            >
              Məhsullar <IoIosArrowDown />
            </a>
            {isSubmenuOpen && (
              <ul className="submenu">
                <li>
                  <a href="#">IT avadanlıqları</a>
                </li>
                <li>
                  <a href="#">Proqram Təminatı</a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href="#">Lahiyələr</a>
          </li>
          <li>
            <a href="#">Müştərilər</a>
          </li>
          <li>
            <a href="#">Əlaqə</a>
          </li>
          <li>
            <a href="#">Bloq</a>
          </li>

          {isMenuOpen && (
            <div className="contact-section" style={{paddingTop: "10rem"}}>
              <ul className="contact-info">
                <h4 className="contact-section-title">Əlaqə</h4>
                <li>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLocationDot className="contact-icon" />
                    Nizami rayon, Mehdi Abbasov 121
                  </a>
                </li>
                <li>
                  <a href="tel:0558650545">
                    <FaPhone className="contact-icon" />
                    (055) 865 05 45
                  </a>
                </li>
              </ul>
              <div className="social-links">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </a>
              </div>
            </div>
          )}
        </ul>
      </nav>

      <button
        className="hamburger-icon"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <GiHamburgerMenu />
      </button>

      <div
        className="language_bar"
        onClick={toggleLanguageMenu}
        role="button"
        aria-expanded={isLanguageOpen}
        tabIndex={0}
      >
        <span>{selectedLanguage}</span>
        <i>
          <MdOutlineLanguage />
        </i>

        {isLanguageOpen && (
          <div className="language_menu">
            <ul>
              <li>
                <a href="#" onClick={() => changeLanguage("AZ")}>
                  Azərbaycan
                </a>
              </li>
              <li>
                <a href="#" onClick={() => changeLanguage("EN")}>
                  English
                </a>
              </li>
              <li>
                <a href="#" onClick={() => changeLanguage("RU")}>
                  Русский
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}

export default Header;
