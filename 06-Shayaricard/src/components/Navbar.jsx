import React from "react";

const categories = [
  "Love",
  "Sad",
  "Regret",
  "Philosophy",
  "Nostalgia",
];

const Navbar = () => {
  return (
    <nav className="navbar">
     
      <a href="/" className="logo">
        DIL-E-NOOR
      </a>

    
      <div className="nav-links">
        {categories.map((category) => (
          <a
            key={category}
            href={`/category/${category.toLowerCase()}`}
          >
            {category}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
