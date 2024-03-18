import Logo from "/src/assets/top-logo.png";
import MainLogo from "/src/assets/Logo.png";
import TextLogo from "/src/assets/LOGOtext.png";
import SearchIcon from "/src/assets/search-normal.png";
import HeartIcon from "/src/assets/heart.png";
import CartIcon from "/src/assets/shopping-bag.png";
import ProfileIcon from "/src/assets/profile.png";
import ArrowDown from "/src/assets/arrow-left.png";
import MenuIcon from "/src/assets/solar_hamburger-menu-linear.png";
import CloseIcon from "/src/assets/close.png";
import { useEffect, useRef, useState } from "react";
import MenuSection from "../MenuSection/MenuSection";

const AppHeader = () => {
  const [menu, setMenu] = useState(false);
  const menuRef = useRef(null);
  
  useEffect(() => {
    const handleResizeScroll = () => {
      setMenu(false);
    };
    window.addEventListener("resize", handleResizeScroll);
    window.addEventListener("scroll", handleResizeScroll);
    return () => {
      window.removeEventListener("resize", handleResizeScroll);
      window.removeEventListener("scroll", handleResizeScroll);
    };
  }, []);

  return (
    <>
      <header className="nav-header">
        <div className="top-header-section">
          <div className="logo-with-text">
            <img src={Logo} alt="Brand-Logo" />
            <span>Lorem ipsum dolo</span>
          </div>
          <div className="logo-with-text sm-hide-element">
            <img src={Logo} alt="Brand-Logo" />
            <span>Lorem ipsum dolo</span>
          </div>
          <div className="logo-with-text sm-hide-element">
            <img src={Logo} alt="Brand-Logo" />
            <span>Lorem ipsum dolo</span>
          </div>
        </div>
        <div className="middle-header-section">
          <div className="logo-with-menu-container">
            {!menu ? (
              <img
                src={MenuIcon}
                alt="MenuIcon"
                className="menu-btn sm-show-element"
                onClick={() => setMenu(true)}
              />
            ) : (
              <img
                src={CloseIcon}
                alt="CloseIcon"
                className="menu-btn sm-show-element close"
                onClick={() => setMenu(false)}
              />
            )}
            <img src={MainLogo} alt="Brand-Logo" className="Brand-Logo" />
          </div>
          <img
            src={TextLogo}
            alt="Text-Brand-Heading-Logo"
            className="Text-Brand-Heading-Logo"
          />
          <div className="header-nav-options">
            <img src={SearchIcon} alt="Search Icon" />
            <img src={HeartIcon} alt="Heart Icon" />
            <img src={CartIcon} alt="Cart Icon" />
            <img
              src={ProfileIcon}
              alt="Profile Icon"
              className="x-sm-hide-element"
            />
            <div className="nav-options-dropdown x-sm-hide-element">
              <span>ENG</span>
              <img src={ArrowDown} alt="ArrowDown" />
            </div>
          </div>
        </div>
        <nav className="navbar bottom-section sm-hide-element">
          <ul className="navbar-ul">
            <li>SHOP</li>
            <li>SKILLS</li>
            <li>STORIES</li>
            <li>ABOUT</li>
            <li>CONTACT US</li>
          </ul>
        </nav>
      </header>
      <div className={menu ? "sm-menu-container in" : "sm-menu-container out"}>
        <MenuSection menuRef={menuRef} />
      </div>
      <div className="page-path-container">
        <span>HOME</span>
        <span>|</span>
        <span>SHOP</span>
      </div>
    </>
  );
};

export default AppHeader;
