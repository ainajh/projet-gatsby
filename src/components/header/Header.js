import * as React from "react";
import * as styles from "./header.module.scss";
const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.toolbar}>
        <p>L'agence qui fait briller votre image/Tel: +33(0)4 93 42 33 18</p>
      </div>
      <div className={styles.menu}>
        <h1>Hello AIna</h1>
      </div>
    </div>
  );
};

export default Header;
