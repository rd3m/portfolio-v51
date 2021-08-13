import React from "react";
import styles from "./Projects.module.scss";

const Projects = () => {
    return (
        <div id="projects" className={styles.projects}>
            <h3 className={styles.projects__header}>Projects</h3>
            <p className={styles.projects__text}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
                pariatur voluptatem animi doloremque eligendi velit debitis
                fugiat. Vero, recusandae id. Iste impedit accusantium animi
                nulla quos fugiat quasi dolorem ut?
            </p>
        </div>
    );
};

export default Projects;
