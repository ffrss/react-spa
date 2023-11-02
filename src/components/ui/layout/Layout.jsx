import { Link } from "react-router-dom";
import styles from "./Layout.module.scss";
import React from "react";

const Layout = ({ children, isLoggedIn }) => {
  return (
    <div className={styles.layout}>
      <header>
        <nav>
          <Link to="/">Главная</Link>
          <Link to={isLoggedIn ? "/browse" : "/login"}>
            Просмотр информации сервиса
          </Link>
          {!isLoggedIn && <Link to="/login">Авторизация</Link>}
        </nav>
      </header>
      {children}
    </div>
  );
};

export default Layout;
