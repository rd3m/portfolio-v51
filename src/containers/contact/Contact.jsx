import React from "react";
import styles from "./Contact.module.scss";

const Contact = () => {
    return (
        <div id="contact" className={styles.contact}>
            <h3 className={styles.contact__header}>Contact</h3>
            <p className={styles.contact__text}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
                pariatur voluptatem animi doloremque eligendi velit debitis
                fugiat. Vero, recusandae id. Iste impedit accusantium animi
                nulla quos fugiat quasi dolorem ut?
            </p>
        </div>
    );
};

export default Contact;
