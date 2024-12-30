import React, { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";
import s from "./Header.module.scss";
import Hero from "../Hero/Hero";
import Works from "../Works/Works";
import Contribution from "../Contribution/Contribution";
import Footer from "../Footer/Footer";

const Header = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const fadeInProps = (delay) =>
    useSpring({
      opacity: 1,
      transform: "translateY(0)",
      from: { opacity: 0, transform: "translateY(-20px)" },
      config: { duration: 500 },
      delay: delay,
    });

  return (
    <>
      <animated.div style={fadeInProps(0)} className={s.header}>
        <div className="container">
          <animated.div style={fadeInProps(100)} className={s.nav}>
            <img
              src={theme === "light" ? "/Logo-light.svg" : "/Logo-dark.svg"}
              alt="logo"
            />

            <animated.div style={fadeInProps(200)} className={s.menu}>
              <div className={s.links}>
                <a href="/works">Works</a>
                <a href="/contribution">Contribution</a>
                <a href="/community">Community</a>
                <a href="/get-in-touch">Get in Touch</a>
              </div>
              <button className={s.burger} onClick={toggleMenu} style={{ zIndex: 2000 }}>
                <img
                  className={s.burger}
                  src={
                    theme === "light" ? "/Burger-dark.png" : "/Burger-light.png"
                  }
                  alt="menu"
                />
              </button>

              <button onClick={toggleTheme}>
                <img
                  src={theme === "light" ? "/Moon.svg" : "/Sun.svg"}
                  alt="theme toggle"
                />
              </button>
            </animated.div>
          </animated.div>
        </div>
      </animated.div>

      {isMenuOpen && (
        <div className={s.menuOverlay} ref={menuRef}>
          <div className={s.links}>
            <a href="/works">Works</a>
            <a href="/contribution">Contribution</a>
            <a href="/community">Community</a>
            <a href="/get-in-touch">Get in Touch</a>
          </div>
        </div>
      )}

      <animated.div style={fadeInProps(300)}>
        <Hero theme={theme} />
        <Works theme={theme} />
        <Contribution theme={theme} />
        <Footer theme={theme} />
      </animated.div>
    </>
  );
};

export default Header;
