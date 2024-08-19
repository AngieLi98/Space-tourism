import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/shared/logo.svg";
import hamburger from "../../assets/images/shared/icon-hamburger.svg";
import close from "../../assets/images/shared/icon-close.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { label: "00 HOME", path: "/" },
    { label: "01 DESTINATION", path: "/Destination" },
    { label: "02 CREW", path: "/Crew" },
    { label: "03 TECHNOLOGY", path: "/Technology" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="flex flex-row items-center justify-between w-full pl-10 md:pt-10 absolute top-0 z-50">
        {/* Logo */}
        <img src={logo} alt="Logo" className="h-12 w-auto" />

        {/* Botón de menú hamburguesa para pantallas pequeñas */}
        <div className="md:hidden pr-10 z-10">
          <img
            src={isMenuOpen ? close : hamburger}
            alt="Menu"
            className="h-8 w-8 cursor-pointer"
            onClick={toggleMenu}
          />
        </div>

        {/* Divisor horizontal en pantallas grandes */}
        <div className="flex-1 mx-4 relative hidden md:block">
          <hr className="absolute -right-10 border-t-1 border-tertiary opacity-5 w-full z-20" />
        </div>

        {/* Contenedor de los enlaces con blur para pantallas grandes */}
        <ul className="hidden md:flex bg-tertiary bg-opacity-5 backdrop-blur-lg flex-row space-x-8 pl-9 pr-16 py-8 z-10 relative md:pl-28 md:pr-48">
          {links.map((link, index) => (
            <li key={index} className="header-li text-tertiary tracking-widest">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "relative text-tertiary after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-[-34px] after:h-[3px] after:bg-tertiary after:rounded-full"
                    : "relative text-tertiary"
                }
                to={link.path}
              >
                <span className="font-bold">{link.label.slice(0, 2)}</span>
                {link.label.slice(2)}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Menú desplegable para pantallas pequeñas */}
        <div
          className={`fixed top-0 right-0 h-full bg-tertiary bg-opacity-15 backdrop-blur-lg w-2/3 transition-transform transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
        >
          <ul className="flex flex-col space-y-8 pl-10 pr-6 pt-20">
            {links.map((link, index) => (
              <li key={index} className="text-tertiary tracking-widest text-lg">
                <NavLink
                  onClick={toggleMenu}
                  to={link.path}
                  className="flex items-center"
                >
                  <span className="font-bold">{link.label.slice(0, 2)}</span>
                  <span className="ml-2">{link.label.slice(3)}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;