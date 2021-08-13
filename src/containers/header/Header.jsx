import React from 'react';
import styles from './Header.module.scss';
import Title from '../../components/Title';
import Nav from '../../components/Nav';

const Header = () => {
    return (
        <div className={styles.header}>
            <Title />
            <Nav />
        </div>
    );
};

export default Header;
