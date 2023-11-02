import React, { useState, useEffect } from "react";
import styles from "./Auth.module.scss";
import { useNavigate } from "react-router-dom";

export const Auth = ({ isLoggedIn, setIsLoggedIn }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleChangeLogin = (event) => {
    setLogin(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  useEffect(() => {
    const storedAuth = localStorage.getItem("isLoggedIn");
    if (storedAuth) {
      setIsLoggedIn(JSON.parse(storedAuth));
    }
  }, []);

  const handleAuth = () => {
    const newAuth = !isLoggedIn;
    setIsLoggedIn(newAuth);
    localStorage.setItem("isLoggedIn", JSON.stringify(newAuth));
    setLogin("");
    setPassword("");
    if (!isLoggedIn) {
      navigate("/");
    }
  };

  return (
    <>
      <div className={styles.formContainer}>
        <div className={styles.formContainer__body}>
          <form action="#">
            <div className={styles.form__cell}>
              <label className={styles.form__cell__title}>Логин</label>
              <input
                disabled={isLoggedIn ? true : false}
                type="text"
                value={login}
                onChange={handleChangeLogin}
                className={styles.form__cell__input}
              />
            </div>
            <div className={styles.form__cell}>
              <label className={styles.form__cell__title}>Пароль</label>
              <input
                disabled={isLoggedIn ? true : false}
                type="password"
                value={password}
                onChange={handleChangePassword}
                className={styles.form__cell__input}
              />
            </div>
            <div className={styles.logout}>
              {isLoggedIn ? (
                <button className={styles.logout__btn} onClick={handleAuth}>
                  Выйти
                </button>
              ) : (
                <button
                  type="submit"
                  className={styles.logout__btn}
                  onClick={handleAuth}
                >
                  Войти
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
