import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Profile", to: "/" },
    { name: "Expertise", to: "/skills" },
    { name: "Projects", to: "/projects" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <nav className="fixed w-full z-50 shadow-md bg-[#cce4ff]">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        {/* LOGO + TEXT */}
        <div className="flex items-center gap-3">

          {/* T LOGO */}
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold text-xl shadow">
            T
          </div>

          <h1 className="text-2xl font-bold text-gray-800">Welcome</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          {links.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `hover:text-blue-600 transition ${
                    isActive ? "text-blue-700 font-bold" : "text-gray-800"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-white w-full py-4 px-6 shadow-lg space-y-4 font-medium absolute left-0 top-full">
          {links.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block hover:text-blue-600 transition ${
                    isActive ? "text-blue-700 font-bold" : "text-gray-800"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
