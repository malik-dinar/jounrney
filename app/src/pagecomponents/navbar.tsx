"use client";

import "../styles/navbar.css";

export const Navbar = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
        <div className="nav-left">
        <img src="/assets/hopelogo.svg" alt="Journey of Hope" />
        </div>

      <div className="nav-right">
        <button onClick={() => scrollToSection("home")}>Home</button>
        <button onClick={() => scrollToSection("about")}>About</button>
        <button onClick={() => scrollToSection("services")}>Services</button>
        <button onClick={() => scrollToSection("departments")}>
          Departments
        </button>
        <button onClick={() => scrollToSection("contact")}>Contact</button>
      </div>
    </nav>
  );
};
