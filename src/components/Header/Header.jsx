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
      <header className="flex flex-row items-center justify-between w-full pl-10 pt-10 md:pt-10 sm:pt-0 absolute top-0 z-50 font-barlow-condensed">
        {/* Logo */}
        <img src={logo} alt="Logo" className="h-12 w-auto" />

        {/* Botón de menú hamburguesa solo para pantallas pequeñas */}
        <div className="sm:hidden pr-10 z-10">
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

        {/* Contenedor de los enlaces con blur para pantallas grandes y tabletas */}
        <ul className="hidden sm:flex bg-tertiary bg-opacity-5 backdrop-blur-lg flex-row space-x-8 pl-9 pr-16 py-8 z-10 relative sm:pl-12 sm:pr-20 md:pl-28 md:pr-48">
          {links.map((link, index) => (
            <li key={index} className="header-li text-tertiary tracking-widest">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "relative text-tertiary after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-[-34px] after:h-[3px] after:bg-tertiary after:rounded-full"
                    : "relative text-tertiary hover:after:content-[''] hover:after:absolute hover:after:left-0 hover:after:right-0 hover:after:bottom-[-34px] hover:after:h-[3px] hover:after:bg-tertiary hover:after:opacity-25 hover:after:rounded-full"
                }
                to={link.path}
              >
                {/* Mostrar solo los números en pantallas grandes */}
                <span className="font-bold hidden lg:inline">{link.label.slice(0, 2)}</span>
                {/* Mostrar solo el nombre de la página en pantallas tabletas */}
                <span className="hidden sm:inline md:hidden">{link.label.slice(3)}</span>
                {/* Mostrar el nombre de la página en pantallas grandes */}
                <span className="hidden md:inline">{link.label.slice(2)}</span>
              </NavLink>
            </li>
          ))}
        </ul>


        {/* Menú desplegable para pantallas pequeñas */}
        <div
          className={`fixed top-0 right-0 h-full bg-tertiary bg-opacity-25 backdrop-blur-lg w-2/3 transition-transform transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"
            } sm:hidden`}
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