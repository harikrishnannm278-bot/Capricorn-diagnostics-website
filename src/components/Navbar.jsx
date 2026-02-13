import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (!search.trim()) return;
    window.location.href = `/products?search=${search}`;
  };

  return (
    <header className="navbar">
      {/* LEFT LOGO */}
      <Link to="/" className="nav-logo">
        <img src="/navlogo.png" alt="Capricorn Diagnostics" />
      </Link>

      {/* RIGHT SIDE */}
      <div className="nav-right">
        {/* MENU */}
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
