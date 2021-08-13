import React from "react";
import styles from "./Nav.module.scss";

const Nav = () => {
    return (
        <div className={styles.nav}>
            <a href="#projects">
                <h1 className={styles.nav__link}>Projects</h1>
            </a>
            <a href="#contact">
                <h1 className={styles.nav__link}>Contact</h1>
            </a>
            <a href="#cv">
                <h1 className={styles.nav__link}>CV</h1>
            </a>
        </div>
    );
};

export default Nav;
