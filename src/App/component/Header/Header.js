import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  header,
  headerNav,
  headerNavItem,
  headerNavItemLink,
  headerNavItemLinkActive,
} from './Header.module.css';

const Header = () => {
  return (
    <header className={header}>
      <nav>
        <ul className={headerNav}>
          <ol className={headerNavItem}>
            <NavLink
              to="/"
              exact
              className={headerNavItemLink}
              activeClassName={headerNavItemLinkActive}
            >
              Home
            </NavLink>
          </ol>
          <ol className={headerNavItem}>
            <NavLink
              to="/movies"
              className={headerNavItemLink}
              activeClassName={headerNavItemLinkActive}
            >
              Movies
            </NavLink>
          </ol>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
