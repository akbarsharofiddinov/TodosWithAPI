import React from "react";
import { Link, NavLink } from "react-router-dom";
import classes from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={classes.header}>
      <div className="container">
        <div className={classes.header_inner}>
          <Link to="/" className={classes.logo}>
            Redux Toolkit
          </Link>
          <ul className={classes.menu}>
            <li className={classes.menu_item}>
              <NavLink to="/">Home</NavLink>
            </li>
            <li className={classes.menu_item}>
              <NavLink to="/todos">Todos</NavLink>
            </li>
            <li className={classes.menu_item}>
              <NavLink to="/products">Products</NavLink>
            </li>
            <li className={classes.menu_item}>
              <NavLink to="/setting">Create and Edit</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
