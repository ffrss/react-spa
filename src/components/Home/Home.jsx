import React from "react";
import styles from "./Home.module.scss";

export const Home = () => {
  return (
    <>
      <div className={styles.container}>
        Главная страница является публичной, доступной как авторизованным, так и
        неавторизованным пользователям.
      </div>
    </>
  );
};
