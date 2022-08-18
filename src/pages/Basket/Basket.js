import React from 'react';
import styles from './Basket.module.css';

const Basket = () => {
    return (
        <div className={styles.container}>
            <h1>Оформление заказа</h1>
            <div className={styles.item}>
                <div className={styles.head}>
                    <div>
                        <div>Наименование</div>
                    </div>
                    <div>
                        <div>Цена</div>
                    </div>
                    <div>
                        <div>Количество</div>
                    </div>
                </div>
                <div className={styles.price}>
                    Итого:
                </div>
            </div>
        </div>
    );
};

export default Basket;