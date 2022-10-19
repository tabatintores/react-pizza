import React from 'react';

import styles from './NotFoundBody.module.scss'

const NotFoundBody = () => {
    return (
        <div className={styles.root}>
            <h1>Ничего не найдено 🤓</h1>
            <h3>Не стоит использовать несуществующие роуты</h3>
        </div>
    );
};

export default NotFoundBody;
