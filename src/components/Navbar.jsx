import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const title = location.pathname === "/" ? "Welcome" : "Tarak";

  const links = [
    { name: "Profile", to: "/" },
    { name: "Expertise", to: "/skills" },
    { name: "Projects", to: "/projects" },
    { name: "Contact", to: "/contact" },

    {name: "Message",to:"/message"},
  ];

  return (
    <nav className="fixed w-full z-50 shadow-md" style={{ backgroundColor: "#021945" }}>
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* LOGO + TITLE */}
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 flex items-center justify-center rounded-full font-bold text-xl shadow"
            style={{ backgroundColor: "#D4AF37", color: "#021945" }}
          >
            T
          </div>
          <h1 className="text-2xl font-bold" style={{ color: "#D4AF37" }}>
            {title}
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          {links.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `transition-colors duration-300 hover:text-[#D4AF37] ${
                    isActive ? "text-[#D4AF37] font-bold" : "text-white"
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
          style={{ color: "#D4AF37" }}
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul
          className="md:hidden w-full py-4 px-6 shadow-lg space-y-4 font-medium absolute left-0 top-full"
          style={{ backgroundColor: "#021945" }}
        >
          {links.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.to}
                onClick={() => setOpen(false)}
                className="block transition-colors duration-300 hover:text-[#D4AF37]"
                style={({ isActive }) => ({
                  color: isActive ? "#D4AF37" : "white",
                  fontWeight: isActive ? "bold" : "normal",
                })}
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