import React from "react";
import styles from "./Cv.module.scss";

const Cv = () => {
    return (
        <div id="cv" className={styles.cv}>
            <h3 className={styles.cv__header}>CV</h3>
            <p className={styles.cv__text}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
                pariatur voluptatem animi doloremque eligendi velit debitis
                fugiat. Vero, recusandae id. Iste impedit accusantium animi
                nulla quos fugiat quasi dolorem ut?
            </p>
        </div>
    );
};

export default Cv;
