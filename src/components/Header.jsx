import { useState } from "react";

export default function Header() {

  const [open, setOpen] = useState(false);

  return (
    <header className={`header ${open ? "is-open" : ""}`}>
      <div className="header__container container">

        <div className="header__logo">
          <img src="/logo.svg" className="header__logo-image" />
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <a href="#" className="header__nav-link">
                Home
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#" className="header__nav-link">
                Products
              </a>
            </li>
            <li className="header__nav-item">
              <button className="header__cart-btn">
                <img src="/cart.svg" className="header__cart-icon" />
              </button>
            </li>
          </ul>
        </nav>
        <button
          className="header__burger"
          aria-label="Menu"
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <div
        id="mobile-menu"
        className="header__mobile"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <ul className="header__mobile-list">
          <li><a href="/" onClick={() => setOpen(false)}>Home</a></li>
          <li><a href="/products" onClick={() => setOpen(false)}>Products</a></li>
          <li>
            <button className="header__cart-btn" onClick={() => setOpen(false)}>
              <img src="/cart.svg" className="header__cart-icon" alt="" />
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};
