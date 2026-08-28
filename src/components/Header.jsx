import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();

  const isActive = (path) => location.pathname === path;
  return (
    <div>

      <header className="fixed top-0 w-full z-50 bg-surface/90 dark:bg-surface-container/90 backdrop-blur-md border-b border-outline-variant/30">
        <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">

          <div className="font-headline-md text-headline-md font-bold tracking-tight text-primary dark:text-on-surface">
            EMBER &amp; PLATE
          </div>

            <nav className="hidden md:flex gap-8">
      <Link
        to="/"
        className={`font-label-sm text-label-sm uppercase pb-1 transition-all duration-300 ${
          isActive("/")
            ? "text-secondary dark:text-secondary-fixed-dim border-b-2 border-secondary"
            : "text-on-surface-variant dark:text-outline-variant hover:text-primary border-b-2 border-transparent"
        } hover:bg-secondary-container/10`}
      >
        Home
      </Link>

      <Link
        to="/menu"
        className={`font-label-sm text-label-sm uppercase pb-1 transition-all duration-300 ${
          isActive("/menu")
            ? "text-secondary dark:text-secondary-fixed-dim border-b-2 border-secondary"
            : "text-on-surface-variant dark:text-outline-variant hover:text-primary border-b-2 border-transparent"
        } hover:bg-secondary-container/10`}
      >
        Menu
      </Link>

      <Link
        to="/contact"
        className={`font-label-sm text-label-sm uppercase pb-1 transition-all duration-300 ${
          isActive("/contact")
            ? "text-secondary dark:text-secondary-fixed-dim border-b-2 border-secondary"
            : "text-on-surface-variant dark:text-outline-variant hover:text-primary border-b-2 border-transparent"
        } hover:bg-secondary-container/10`}
      >
        Contact
      </Link>
    </nav>

          <div className="hidden md:flex gap-4 items-center">

            <a className="text-link" href="#">
              Call Now
            </a>

            <a className="btn-primary" href="/book">
              Book a Table
            </a>

          </div>

          <button className="md:hidden">
            <span
              className="material-symbols-outlined"
              data-icon="menu"
            >
              menu
            </span>
          </button>

        </div>
      </header>


    </div>
  )
}

export default Header