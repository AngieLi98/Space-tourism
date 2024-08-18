import { NavLink } from "react-router-dom";
import logo from "../../assets/images/shared/logo.svg";

const Header = () => {
  const links = [
    { label: "00 HOME", path: "/" },
    { label: "01 DESTINATION", path: "/Destination" },
    { label: "02 CREW", path: "/Crew" },
    { label: "03 TECHNOLOGY", path: "/Technology" },
  ];

  return (
    <>
      <header className="flex flex-row items-center justify-between w-full pl-10 md:pt-10 absolute top-0">
        {/* Logo */}
        <img src={logo} alt="Logo" className="h-12 w-auto" />

        {/* Divisor horizontal */}
        <div className="flex-1 mx-4 relative">
          <hr className="absolute -right-10 border-t-1 border-tertiary opacity-5 w-full z-20" />
        </div>

        {/* Contenedor de los enlaces con blur */}
        <ul className="bg-tertiary bg-opacity-5 backdrop-blur-lg flex flex-row space-x-8 pl-9 pr-16 py-8 z-10 relative md:pl-28 md:pr-48">
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
                {/* Mostrar solo los números en pantallas grandes */}
                <span className="font-bold hidden md:inline">{link.label.slice(0, 2)}</span>
                {/* Mostrar solo el nombre de la página en pantallas pequeñas */}
                <span className="md:hidden">{link.label.slice(3)}</span>
                {/* Mostrar el nombre de la página en pantallas grandes */}
                <span className="hidden md:inline">{link.label.slice(2)}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </header>
    </>
  );
};

export default Header;
