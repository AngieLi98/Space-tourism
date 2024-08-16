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
      <header className="flex flex-row items-center justify-between w-full px-8 py-4 absolute top-0">
        {/* Logo */}
        <img src={logo} alt="Logo" className="h-12 w-auto" />
        <div className="relative mt-20">
          <hr className="border-tertiary border-t-2" />
          <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-white rounded-full"></div>
        </div>
        {/* Contenedor de los enlaces con blur */}
        <ul className="bg-tertiary bg-opacity-5 backdrop-blur-lg flex flex-row space-x-12 px-14 py-7">
          {links.map((link, index) => (
            <li key={index} className="text-tertiary">
              <NavLink
                className={({ isActive }) =>
                  [isActive ? "link active" : "link"].join(" ")
                }
                to={link.path}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </header>
    </>
  );
};

export default Header;