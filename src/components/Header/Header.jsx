import { NavLink } from "react-router-dom";

const Header = () => {
    const links = [
        { label: "Home", path: "/" },
        { label: "Destination", path: "/Destination" },
        { label: "Crew", path: "/Crew" },
        { label: "Techonology", path: "/Technology" },
      ];
  return (
    <ul>
        {links.map((link, index) => (
          <li key={index}>
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
  )
}

export default Header